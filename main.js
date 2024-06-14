const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title" }, "React is rendered"),
    React.createElement(
      Person,
      { name: "Sameer", occupation: "Teacher" },
      null
    ),
    React.createElement(Person, { name: "Sudheer", occupation: "CA" }, null),
    React.createElement(
      Person,
      { name: "Sanjeev", occupation: "Business" },
      null
    ),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
