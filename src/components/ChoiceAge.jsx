import React from "react";
import UserConsumer from "../context";
import "./choiceage.css";

export default function ChoiceAge() {
  return (
    <UserConsumer>
      {({ ageSelect,gender }) => {
        return (
          <div className="rowWrap d-flex flex-column justify-content-between">
            <div className="row">
              <div
                className={
                  "col-6 aheight " + (gender === "m" ? "choise1" : "choise2")
                }
                onClick={() => ageSelect("18-24")}
              >
                18-24 Years
              </div>
              <div
                className={
                  "col-6 aheight " + (gender === "m" ? "choise1" : "choise2")
                }
                onClick={() => ageSelect("24-36")}
              >
                24-36 Years
              </div>
            </div>
            <div className="row">
              <div
                className={
                  "col-6 aheight " + (gender === "m" ? "choise1" : "choise2")
                }
                onClick={() => ageSelect("36-44")}
              >
                36-44 Years
              </div>
              <div
                className={
                  "col-6 aheight " + (gender === "m" ? "choise1" : "choise2")
                }
                onClick={() => ageSelect("44-54")}
              >
                44-54 Years
              </div>
            </div>
          </div>
        );
      }}
    </UserConsumer>
  );
}
