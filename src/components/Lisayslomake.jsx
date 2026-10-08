import { useState } from "react";

function Lisayslomake() {
  const [fin, setFin] = useState("");
  const [eng, setEng] = useState("");
  const [viesti, setViesti] = useState("");

  // Send a new word to the API
  const lisaaSana = async () => {
    try {
      const uusiSana = {
        fin: fin,
        eng: eng,
      };

      const response = await fetch("http://localhost:3000/sanakirja", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(uusiSana),
      });

      if (response.ok) {
        setViesti("Sana lisätty!");
        setFin("");
        setEng("");
      }
    } catch (error) {
      console.log(error);
      setViesti("Sanan lisääminen epäonnistui.");
    }
  };

  return (
    <div>
      <h2>Lisää sana</h2>

      <input
        type="text"
        placeholder="Suomenkielinen sana"
        value={fin}
        onChange={(e) => setFin(e.target.value)}
      />

      <input
        type="text"
        placeholder="Englanninkielinen sana"
        value={eng}
        onChange={(e) => setEng(e.target.value)}
      />

      <button onClick={lisaaSana}>Lisää</button>

      <p>{viesti}</p>
    </div>
  );
}

export default Lisayslomake;
