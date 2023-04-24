import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "./Usertable";

function App() {
  const [users1, setUsers1] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [users3, setUsers3] = useState([]);
  const [users4, setUsers4] = useState([]);
  const [users5, setUsers5] = useState([]);
  const URL = "https://mobuser.onrender.com";
  useEffect(() => {
    axios
      .get(`${URL}/api/users/income-lower-than-5-and-car-make-bmw-mercedes`)
      .then((response) => {
        setUsers1(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`${URL}/api/users/male-with-phone-price-greater-than-10000`)
      .then((response) => {
        setUsers2(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(
        `${URL}/api/users/quote-length-greater-than-15-and-email-includes-name`
      )
      .then((response) => {
        setUsers3(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`${URL}/api/users/car-brand-and-email-without-digit`)
      .then((response) => {
        setUsers4(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`${URL}/api/users/top-10-cities-with-highest-users`)
      .then((response) => {
        setUsers5(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div align="center" >
      <h3>Income lower than $5 and owns a BMW or Mercedes</h3>
      <UserTable
        users={users1}
      />
      <h3>Male with phone price greater than 10000</h3>
      <UserTable
        users={users2}
      />
      <h3>Quote length greater than 15 and email includes firstname or lastname and lastname begins with M</h3>
      <UserTable
        title="Quote length greater than 15 and email includes lastname"
        users={users3}
      />
      <h3>Owns a BMW, Mercedes or Audi and has email without digit</h3>
      <UserTable users={users4} />
      <h3>Top 10 cities with highest users their and average income</h3>
      <UserTable users={users5} />
    </div>
  );
}

export default App;
