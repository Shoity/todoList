import { Header } from "./components/Header";

import "./App.module.css";
import "./global.css";
import { Task } from "./components/Task";

function App() {
  return (
    <>
      <Header />
      {/* <CreateTask /> */}
      <Task />
    </>
  );
}

export default App;
