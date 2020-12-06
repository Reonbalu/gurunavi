import React, { useEffect, useState } from "react";
import axios from "axios";

const url =
  "https://api.gnavi.co.jp/master/GAreaSmallSearchAPI/v3/?keyid=2d57b3e7d910c257935ac086b0125abd";

const Area_s = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url);

        const data = result.data.garea_small.slice(0, 15);
        setItems(data);
        console.log(data);
      } catch (error) {
        console.log("error");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <select>
        <option value="" hidden>
          please choose area
        </option>
        {items.map(item => (
          <option value={item.areacode_s}>{item.areaname_s}</option>
        ))}
      </select>
    </>
  );
};

export default Area_s;
