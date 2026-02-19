const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.desciption),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      desciption: "Some Dope Pizza, Yo!",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      desciption: "French Fries and Hot Dogs, WTF Italy",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      desciption: "Pineapple and Ham, WTF America?",
    }),
    React.createElement(Pizza, {
      name: "Chicken Piiza",
      desciption: "Chicken Nuggies on Your Pizza, WTF UK",
    }),
    React.createElement(Pizza, {
      name: "Baked Potato Pizza",
      desciption: "Unholy Potato Mash, WTF Minnesota",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
