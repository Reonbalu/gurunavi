import React, { useState, useEffect } from "react";
import axios from "axios";
import Prefecture from "./Prefecture";
import "./style.css";

const url =
  "https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=2d57b3e7d910c257935ac086b0125abd&area=AREA150";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url);
        const response = result.data.rest;
        setItems(result.data.rest);

        console.log(result.data.rest);
        //response.map(res => console.log(res.access));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>budget</th>
            <th>line</th>
            <th>station</th>
            <th>station_exit</th>
            <th>walk</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.budget}</td>
              <td>{item.access.line}</td>
              <td>{item.access.station}</td>
              <td>{item.access.station_exit}</td>
              <td>{item.access.walk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
