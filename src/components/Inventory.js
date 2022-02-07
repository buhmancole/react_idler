const Inventory = ({ items, tools }) => {
  return (
    <div className="inventory">
      <div className="items">
        <h4>Inventory</h4>
        {items
          .filter((item) => item.count > 0)
          .map((item) => (
            <div key={item.name} className="item">
              <span>{item.name + ":"}</span>
              <span>{item.count}</span>
            </div>
          ))}
      </div>
      <div className="tools">
        <h4>Tools</h4>
        {tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
