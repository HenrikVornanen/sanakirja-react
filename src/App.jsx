import { useState } from "react";
import Hakulomake from "./components/Hakulomake";
import Lisayslomake from "./components/Lisayslomake";

function App() {
  const [sivu, setSivu] = useState("haku");

  return (
    <div>
      <h1>Sanakirja</h1>

      <button onClick={() => setSivu("haku")}>Hae sana</button>
      <button onClick={() => setSivu("lisays")}>Lisää sana</button>

      {sivu === "haku" && <Hakulomake />}
      {sivu === "lisays" && <Lisayslomake />}
    </div>
  );
}

export default App;
