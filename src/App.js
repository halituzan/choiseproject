import "./App.css";
import ChoiceAge from "./components/ChoiceAge";
import ChoiseConsept from "./components/ChoiseConsept";
import Gender from "./components/Gender";
import ProductList from "./components/ProductList";
import UserConsumer from "./context";

function App() {
  return (
    <UserConsumer>
      {({ gender, consept, age }) => {
        return (
          <div className="App">
            {gender === " " ? (
              <Gender />
            ) : consept === " " ? (
              <ChoiseConsept />
            ) : age === " " ? (
              <ChoiceAge />
            ) : (
              <ProductList />
            )}
          </div>
        );
      }}
    </UserConsumer>
  );
}

export default App;
