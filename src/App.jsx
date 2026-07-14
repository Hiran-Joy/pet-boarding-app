import "./App.css";
import { BrowserRouter } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import AddPet from "./components/AddPet";
import ViewPet from "./components/ViewPet";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <AddPet />
      <ViewPet />
    </BrowserRouter>
  );
}

export default App;