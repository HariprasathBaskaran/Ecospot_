import { useEffect, useState } from "react";

function Testfile() {
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    fetch(`https://679502dfaad755a134eafb70.mockapi.io/Project/orders`)
      .then((res) => res.json())
      .then((data) => {
        console.log("testfile----", data);
        setNewData(data);
      });
  }, []);
  // console.log("newData", newData);
  return (
    <div>
      {newData.map((order) => (
        <div key={order.id}>
          <ul>
            {order.product.map((product, index) => (
              <li key={index}>
                <p>Product Name: {product.Name}</p>
                <p>Price: ${product.Price}</p>
                <p>Rating: {product.Rating}</p>
                <img src={product.imgPath} alt={product.Name} width="100" />
                <h3>Delivery Date: {order.deliveryDate}</h3>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Testfile;
