import { useState } from "react";

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  console.log("renderizando TeaGathering...");
  const [flag, setFlag] = useState(false);
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return (
    <>
      <button onClick={() => setFlag(!flag)}>Renderizar Novamente</button>
      <hr />
      {cups}
    </>
  );
}
