import Button from "./Button";

const Enemies = ({ enemies, fight }) => {
  for (const enemy of enemies) {
    if (enemy.active) {
      return (
        <>
          <div className="fight">
            <Button text="Hit" />
            <Button text="Defend" />
            <Button text="Retreat" />
          </div>
          <div>Picture Here</div>
        </>
      );
    }
  }
  return enemies.map((enemy) => (
    <div key={enemy.name} className="resource">
      <Button
        className="fill"
        text={enemy.name}
        onClick={fight}
        args={enemy.name}
      />
    </div>
  ));
};

export default Enemies;
