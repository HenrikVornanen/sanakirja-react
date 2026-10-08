import { useState } from "react";

function Hakulomake() {
  const [hakuehto, setHakuehto] = useState("");
  const [vastaus, setVastaus] = useState("");
  // Get the English word from the API
  const haeSana = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/sanakirja/${hakuehto}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const vastaus = await response.json();

      if (typeof vastaus === "string") {
        setVastaus(vastaus);
      } else {
        setVastaus(vastaus.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Hae sana</h2>

      <input
        type="text"
        placeholder="Anna suomenkielinen sana"
        value={hakuehto}
        onChange={(e) => setHakuehto(e.target.value)}
      />

      <button onClick={haeSana}>Hae</button>

      <p>{vastaus}</p>
    </div>
  );
}

export default Hakulomake;
