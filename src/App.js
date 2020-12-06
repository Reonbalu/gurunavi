import React from "react";
import "./style.css";
import Resturant from "./components/Resturant";

const App = () => {
  return (
    <>
      <div class="wrapper_form">
        <form>
          <div class="item">
            <label class="item_label">都道府県：</label>
            <select name="prefecutre" required>
              <option>please choose prefecture</option>
            </select>
            <label class="item_label">エリア</label>
            <select name="area" required>
              <option>please choose area</option>
            </select>
          </div>
          <div class="item">
            <label class="item_label">地方：</label>
            <select name="district" required>
              <option>please choose district</option>
            </select>
          </div>
          <div class="item">
            <label class="item_label" htmlFor="shopname">
              店名：
            </label>
            <input id="shopname" class="shopname" />
            <label class="item_label" htmlFor="freeinput">
              キーワード ：
            </label>
            <input id="freeinput" class="shopname" />
          </div>
          <div class="item">
            <label class="item_label" htmlFor="lunch">
              パターン
            </label>
            <label htmlFor="lunch">ランチ営業</label>
            <input id="lunch" type="radio" name="option1" value="lunch" />
            <label htmlFor="private">個室あり</label>
            <input id="private" type="radio" name="option1" value="private" />
            <label htmlFor="takeout">テイクアウトあり</label>
            <input id="takeout" type="radio" name="option1" value="takeout" />
          </div>
          <div class="item">
            <label class="item_label" htmlFor="midnight">
              深夜営業
            </label>
            <input
              id="midnight"
              type="checkbox"
              name="option"
              value="midnight"
            />
            <label htmlFor="birthday_privilege">誕生日特典あり</label>
            <input
              id="birthday_privilege"
              type="checkbox"
              name="option2"
              value="lunch"
            />
          </div>
        </form>
      </div>
      <Resturant />
    </>
  );
};

export default App;
