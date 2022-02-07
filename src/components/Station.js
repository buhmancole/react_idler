import Button from "./Button";
import recipes from "../data";

const Station = ({ station, make, afford, craft }) => {
  let title = "";
  let disabled = "true";
  const recipe = recipes.get(station.name);
  if (recipe) {
    if (recipe.length > station.tier) {
      title = JSON.stringify(recipe[station.tier])
        .replaceAll(/[{}"]/g, "")
        .replaceAll(":", ": ")
        .replaceAll(",", "\n");
      if (afford(recipe[station.tier])) disabled = "";
    }
  }
  return (
    <div className="resource">
      {station.tier === 0 ? (
        ""
      ) : (
        <div>
          <span>
            {station.name} ({station.tier})
          </span>
          <Button text="Craft" onClick={craft} args={station} />
        </div>
      )}
      <div>
        <Button
          className="expand"
          title={title}
          onClick={make}
          args={station.name}
          text={station.tier === 0 ? "Build " + station.name : "Upgrade"}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default Station;
