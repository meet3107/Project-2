export default function InventoryCard({ list, onClick , handleProductDelete, handleToggleEdit}) {
  return (
    <div className="Inventory-Container">
      {list.map((l) => (
        <div key={l.id} className="Inventory-Card">
          <img src={l.image} />
          <h2>{l.productName}</h2>
          <h3>{l.brand}</h3>
          <p>{l.quantity}</p>
          <p>
            <strong>{l.price}</strong>
          </p>
          <button className="Add-Button" onClick={() => onClick(l)}>Add to cart</button>
          <div>
            <button className="Edit-Button" onClick={() =>handleToggleEdit(l)}>Edit</button>
            <button className="Delete-Button" onClick={() => handleProductDelete(l)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
