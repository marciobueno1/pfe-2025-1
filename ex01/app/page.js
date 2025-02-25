"use client";

import { useState } from "react";

function Texto1() {
  return <p>Um outro parágrafo de texto!</p>;
}

export default function Home() {
  const [hide, setHide] = useState(false);
  const aula = 2;
  return (
    <div>
      <h1>Olá Turma!!!!</h1>
      <p>Essa é a nossa {aula}ª aula de React!</p>
      <hr />
      <button onClick={() => setHide(!hide)}>{hide ? "Show" : "Hide"}</button>
      <hr />
      {!hide && (
        <>
          <Texto1 />
          <Texto1 />
        </>
      )}
    </div>
  );
}
