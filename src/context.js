import React, { useState } from "react";

const UserContext = React.createContext();

export function UserProvider(props) {
  const [gender, setGender] = useState(" ");
  const [consept, setConsept] = useState(" ");
  const [age, setAge] = useState(" ");

  const genderSelect = (g) => setGender(g);
  const conseptSelect = (c) => setConsept(c);
  const ageSelect = (a) => setAge(a);

  return (
    <UserContext.Provider
      value={{ genderSelect, conseptSelect, ageSelect, gender, consept, age }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;
