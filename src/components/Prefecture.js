import React, { useState, useEffect } from "react";
import axios from "axios";

const url =
  "https://api.gnavi.co.jp/master/PrefSearchAPI/v3/?keyid=2d57b3e7d910c257935ac086b0125abd";

const Prefecure = () => {
  //　外部APIから取得した値
  const [items, setItems] = useState([]);
  // 入力した値
  const [inputValue, setInputValue] = useState("react");
  // クエリパラメータ
  const [query, setQuery] = useState();
  // ローディング状態
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);
      const res = result.data.pref;
      setItems(result.data.pref);
      setIsLoading(false);
      console.log(res);
    };
    fetchData();
  }, [query]);

  return (
    <>
      <select>
        <option value="" hidden>
          please choose one
        </option>
        {items.map((item, index) => (
          <option value={item.pref_code}>{item.pref_name}</option>
        ))}
      </select>
    </>
  );
};

export default Prefecure;
