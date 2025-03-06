import Home from "./Home";
import "./App.css";
import { XProvider } from "@ant-design/x";

function App() {
  return (
    <XProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
      <Home />
    </XProvider>
  );
}

export default App;
