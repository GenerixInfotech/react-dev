import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    age: 21,
    username: "Manish",
  };

  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 p-4 text-black rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="Code with Generix" btnText="Click me" />
      <Card username="Code with Mehulinfotech" />
    </>
  );
}

export default App;
