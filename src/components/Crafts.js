import Button from "./Button";

const Crafts = ({ crafts, make }) => {
  return (
    <>
      <h4>Crafts</h4>
      {crafts.map((craft) => (
        <Button key={craft} text={craft} onClick={make} args={craft} />
      ))}
    </>
  );
};

export default Crafts;
