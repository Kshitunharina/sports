import React, { useState } from "react";
import "./Giftcard.css";
import { giftCardData } from "./GiftCardData";

function Giftcard() {
  const [activeclass, setactive] = useState([true, false, false, false, false]);

  const generic = filterFunction("generic");
  const occasion = filterFunction("occasion");
  const combos = filterFunction("combos");

  function multipleStates(index) {
    const newActiveBtn = activeclass.map((ele, i) => {
      if (index === i) {
        return !ele;
      }
      return false;
    });
    setactive(newActiveBtn);
  }

  function filterFunction(catagory) {
    const arr = giftCardData.filter((el) => {
      return el.catagory === catagory;
    });
    return arr;
  }

  return (
    <div className="GiftCards" style={{ border: "2px solid black" }}>
      <div className="f-picture">
        <img
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1692874595339_fdf.jpg"
          alt=""
          style={{ width: "95%", margin: "25px" }}
        />
        <div className="giftparent">
          <button className="giftcard--btn">
            <a href="">E-Gift cards</a>
          </button>
          <button className="giftcard--btn">
            <a href="">Physical Giftcards</a>
          </button>
        </div>
        <p style={{ textAlign: "center", width: "100vw" }}>
          Pick a card from one of our themes
        </p>
        <div className="filtergift">
          <button
            className={
              activeclass[0] ? `giftcardactive giftcardbtns` : `giftcardbtns`
            }
            onClick={() => {
              multipleStates(0);
            }}
          >
            All
          </button>
          <button
            className={
              activeclass[1] ? `giftcardactive giftcardbtns` : `giftcardbtns`
            }
            onClick={() => {
              multipleStates(1);
            }}
          >
            Generic
          </button>
          <button
            className={
              activeclass[2] ? `giftcardactive giftcardbtns` : `giftcardbtns`
            }
            onClick={() => {
              multipleStates(2);
            }}
          >
            Occasion
          </button>
          <button
            className={
              activeclass[3] ? `giftcardactive giftcardbtns` : `giftcardbtns`
            }
            onClick={() => {
              multipleStates(3);
            }}
          >
            Festival
          </button>
          <button
            className={
              activeclass[4] ? `giftcardactive giftcardbtns` : `giftcardbtns`
            }
            onClick={() => {
              multipleStates(4);
            }}
          >
            Combos
          </button>
        </div>
      </div>
<div className="toggle--btn" style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
      {activeclass[0] &&
        giftCardData.map((el) => {
          return (
            <div className="gift__card" key={el.id} >
              <img src={el.img} />
            </div>
          );
        })
      }

      {activeclass[1] &&
        generic.map((el) => {
          return (
            <div className="gift__card" key={el.id}>
              <img src={el.img} />
            </div>
          );
        })
        
        
      }

      {activeclass[2] &&
        occasion.map((el) => {
          return (
            <div className="gift__card" key={el.id}>
              <img src={el.img} />
            </div>
          );
        })}

      {activeclass[4] &&
        combos.map((el) => {
          return (
            <div className="gift__card" key={el.id}>
              <img src={el.img} />
            </div>
          );
        })
      }
      </div>
    </div>
  );
}

export default Giftcard;
