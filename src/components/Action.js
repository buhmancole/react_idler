import Button from "./Button";

const Action = ({ item, gather }) => {
  return (
    <div className="resource">
      <div>
        <span>{item.name}</span>
        <Button text="Gather" onClick={gather} args={item.name} />
      </div>
      <div>
        <Button className="expand" text={"Build " + item.expand} />
      </div>
    </div>
  );
};

export default Action;
