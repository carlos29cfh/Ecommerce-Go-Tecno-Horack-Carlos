import React from "react";
import { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import CartContext from "../../CartContext/CartContext";
import { getFirestore } from "firebase/firestore";
import Spinner from "../Spinner/Spinner";
import { Button, Form } from "react-bootstrap";
import './Checkout.css';

function Checkout() {
  const db = getFirestore();

  const { products, clear, precioTotal } = useContext(CartContext);

  const [load, setLoad] = useState(false);
  const [orderId, setOrderId] = useState();

  const [buyer, setBuyer] = useState({
    Nombre: "",
    Email: "",
    Telefono: "",
  });

  const { Nombre, Email, Telefono } = buyer

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const generateOrder = async (data) => {
    setLoad(true);
    try {
      const col = collection(db, "Orders")
      const order = await addDoc(col, data)
      setOrderId(order.id)
      clear();
      setLoad(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dia = new Date();
    const items = products.map((e) => {
      return { id: e.id, title: e.title, price: e.price };
    });
    const total = precioTotal();
    const data = { buyer, items, dia, total };
    console.log("data", data);
    generateOrder(data);
  };

  return (
    <>
      <h1 className="mb-3 text-center" >Finalizando Compra</h1>
      <hr />
      {load ? (
        <Spinner />
      ) : (
        !orderId && (
          <div className=" bg-secondary text-white col-sm justify-center-center align-items-center">
            <h4 className="text-center" >Completar datos:</h4>
            <br />
            <Form className="checkout">
              <Form.Group className=" text-center" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="Nombre"
                  placeholder="Nombre"
                  value={Nombre}
                  onChange={handleInputChange}
                  required
                />
                <br />
                <br />
                <input
                  type="number"
                  name="Telefono"
                  placeholder="Telefono"
                  value={Telefono}
                  onChange={handleInputChange}
                  required
                />
                <br />
                <br />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  value={Email}
                  onChange={handleInputChange}
                  required
                />
                <br />
                <br />
                <Button variant="outline-info" type="submit" value="">
                  Finalizar Compra
                </Button>
              </Form.Group>
              <br/>
            </Form>
          </div>
        )
      )}

      {orderId && (
        <div>
          <h4>Compra finalizada con éxito</h4>
          <h4>{`Su código de compra es: ${orderId}`}</h4>
          <Link to="/">
            <h5>Realizar otra compra</h5>
          </Link>
        </div>
      )}
    </>
  );
}

export default Checkout;
