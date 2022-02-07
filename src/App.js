//import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { recipes, setup } from "./data";
import Inventory from "./components/Inventory";
import Station from "./components/Station";
import Arena from "./components/Arena";
import Crafts from "./components/Crafts";
import Action from "./components/Action";

function App() {
  let tierLookup = [
    "No",
    "Stone",
    "Copper",
    "Bronze",
    "Iron",
    "Steel",
    "Mythril",
  ];
  const [stations, setStations] = useState(setup.get("stations"));
  const [items, setItems] = useState(setup.get("items"));
  const [tools, setTools] = useState(setup.get("tools"));
  const [enemies, setEnemies] = useState(setup.get("enemies"));
  const [crafts, setCrafts] = useState([]);

  const countUp = (name, num = 100) => {
    setItems((items) =>
      items.map((item) =>
        item.name === name ? { ...item, count: item.count + num } : item
      )
    );
  };

  const tierUp = (fn, name) => {
    fn((arr) =>
      arr.map((elem) =>
        elem.name === name ? { ...elem, tier: elem.tier + 1 } : elem
      )
    );
  };

  const spend = (recipe) => {
    for (const prop in recipe) {
      countUp(prop, -recipe[prop]);
    }
    return true;
  };

  const canSpend = (recipe) => {
    if (!recipe) return false;
    for (const prop in recipe) {
      const item = items.find((item) => item.name === prop);
      if (item.count < recipe[prop]) return false;
    }
    return true;
  };

  // set crafts based on station name
  const craft = (station) => {
    if (station.name === "Workbench") {
      setCrafts(
        tools
          .filter((tool) => tool.tier < station.tier)
          .map((tool) => tierLookup[tool.tier + 1] + " " + tool.name)
      );
    } else {
      setCrafts(
        items
          .filter(
            (item) => item.region === "Furnace" && item.tier < station.tier
          )
          .map((item) => item.name)
      );
    }
  };

  const unlock = (name) => {
    for (const fn of [setItems, setStations])
      fn((items) =>
        items.map((item) =>
          item.unlock === name ? { ...item, tier: item.tier + 1 } : item
        )
      );
  };

  const make = (name) => {
    for (const tool of tools) {
      if (name.includes(tool.name)) {
        if (!spend(recipes.get(tool.name)[tool.tier])) {
          console.log("Couldn't create " + name);
          return false;
        }
        tierUp(setTools, tool.name);
        setCrafts((crafts) => crafts.filter((craft) => craft !== name));
        unlock(tool.name + tool.tier);
        return true;
      }
    }
    for (const station of stations) {
      if (station.name === name) {
        if (!spend(recipes.get(name)[station.tier])) {
          console.log("Couldn't create " + name);
          return false;
        }
        tierUp(setStations, name);
        return true;
      }
    }
    if (!spend(recipes.get(name))) {
      console.log("Couldn't create " + name);
      return false;
    }
    countUp(name, 1);
    return true;
  };

  const fight = (name) => {
    setEnemies((enemies) =>
      enemies.map((enemy) =>
        enemy.name === name ? { ...enemy, active: true } : enemy
      )
    );
  };

  return (
    <>
      <div className="title">
        <h2>Idler</h2>
      </div>
      <div className="container">
        <Inventory
          items={items}
          tools={tools.map((tool) => tierLookup[tool.tier] + " " + tool.name)}
        />
        <div className="home">
          {stations
            .filter((station) => station.tier > -1)
            .map((station) => (
              <Station
                key={station.name}
                station={station}
                make={make}
                afford={canSpend}
                craft={craft}
              />
            ))}
        </div>
        <div className="arena">
          <Arena enemies={enemies} fight={fight} />
        </div>
        <div className="craft">
          <Crafts crafts={crafts} make={make} afford={canSpend} />
        </div>
        {["Mine", "Forest"].map((region) => {
          return (
            <div key={region} className={region.toLowerCase()}>
              {items
                .filter((action) => action.region === region && action.tier > 0)
                .map((item) => (
                  <Action key={item.name} item={item} gather={countUp} />
                ))}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
