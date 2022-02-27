import React from "react";
import UserConsumer from "../context";
import "./gender.css";

export default function Gender() {
  return (
    <UserConsumer>
      {({genderSelect}) => {
          console.log(genderSelect);
        return (
          <div className="gender d-flex flex-column justify-content-center">
            <h1 className="align-self-center ms-3" style={{top:"0"}}>
              <span className="choise1Text">Chose</span>
              {" "}
              <span className="choise2Text">Gender</span>
            </h1>
            <div className="wrapGender d-flex" >
              <div className="woman g d-flex justify-content-center" onClick={()=>genderSelect("w")}>
                <img
                  src={process.env.PUBLIC_URL + "/icons/woman.svg"}
                  alt="Woman Choise"
                />
              </div>
              <div className="man g d-flex justify-content-center" onClick={()=>genderSelect("m")}>
                <img
                  src={process.env.PUBLIC_URL + "/icons/man.svg"}
                  alt="Woman Choise"
                />
              </div>
            </div>
          </div>
        );
      }}
    </UserConsumer>
  );
}
