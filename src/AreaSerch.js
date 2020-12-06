import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const url =
  "https://api.gnavi.co.jp/master/AreaSearchAPI/v3/?keyid=2d57b3e7d910c257935ac086b0125abd";

const App = () => {
  const [items, setItem] = useState([]);
  const [lists, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url);
        const response = result.data.area;
        console.log(response);
        setItem(response);
        setList(response);
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
  }, []);

  const extData = event => {
    console.log(event.target.value);
    const id = event.target.value;
    setList(items.filter(item => item.area_code === id));
  };

  return (
    <>
      <form>
        <select name="district" required onChange={extData}>
          <option value="">地域を選択</option>
          {items.map((item, index) => (
            <option value={item.area_code}>{item.area_name}</option>
          ))}
        </select>
      </form>
      <ul>
        <li>
          <span class="area_code area_header">AREA_CODE</span>
          <span class="area_name area_header">AREA_NAME</span>
        </li>
        {lists.map((list, index) => (
          <>
            <li>
              <span class="area_code">{list.area_code}</span>
              <span class="area_name"> {list.area_name}</span>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default App;
