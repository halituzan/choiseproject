import React from "react";
import UserConsumer from "../context";
import "./choiseconsept.css";

export default function ChoiseConsept() {
  return (
    <UserConsumer>
      {({ conseptSelect, gender }) => {
        return (
          <div className="rowWrap d-flex flex-column justify-content-between">
            <div className="row">
              <div
                className={
                  "col-4 cheight " + (gender === "m" ? "choise1" : "choise2")
                }
                onClick={() => conseptSelect("yilbasi")}
              >
                Yılbaşı
              </div>
              <div
                className={
                  "col-4 cheight " + (gender === "m" ? "choise1" : "choise2")
                }
                onClick={() => conseptSelect("evlilik")}
              >
                Evlilik Yıldönümü
              </div>
              <div
                className={
                  "col-4 cheight " + (gender === "m" ? "choise1" : "choise2")
                }
                onClick={() => conseptSelect("dogum")}
              >
                Doğum Günü
              </div>
            </div>
            <div className="row">
              <div
                className={
                  "col-4 cheight " + (gender === "m" ? "choise1" : "choise2")
                }
                onClick={() => conseptSelect("sevgili")}
              >
                Sevgililer Günü
              </div>
              <div
                className={
                  "col-4 cheight " + (gender === "m" ? "choise1" : "choise2")
                }
                onClick={() => conseptSelect("halloween")}
              >
                Cadılar Bayramı
              </div>
              <div
                className={
                  "col-4 cheight " + (gender === "m" ? "choise1" : "choise2")
                }
                onClick={() => conseptSelect("thanksgiving")}
              >
                Thanksgiving Day
              </div>
            </div>
            <div className="row">
              <div
                className={
                  "col-4 cheight " + (gender === "m" ? "choise1" : "choise2")
                }
                onClick={() => conseptSelect("bekarlik")}
              >
                Bekarlığa Veda Partisi
              </div>
              <div
                className={
                  "col-4 cheight " + (gender === "m" ? "choise1" : "choise2")
                }
                onClick={() => conseptSelect("stpatrick")}
              >
                St. Patrick’s Day
              </div>
              <div
                className={
                  "col-4 cheight " + (gender === "m" ? "choise1" : "choise2")
                }
                onClick={() => conseptSelect("spring")}
              >
                Spring Break
              </div>
            </div>
          </div>
        );
      }}
    </UserConsumer>
  );
}
