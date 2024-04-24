import { StatusBar } from "react-native";
import Home from "./src/screens/Home";

function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}

export default App;
