"use client";

import { useEffect, useState } from "react";
import { /*useSearchParams,*/ useParams } from "next/navigation";

export default function Page() {
  const [personagem, setPersonagem] = useState(null);
  const params = useParams();
  console.log("params", params);

  async function carregar() {
    try {
      const response = await fetch(`https://swapi.dev/api/people/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setPersonagem(data);
      } else {
        console.error("error status", response.status, response.statusText);
      }
    } catch (err) {
      console.error("err:", err);
    }
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div>
      <p>Personagem: {params.id}</p>
      {personagem != null && (
        <>
          Name: {personagem.name}
          <br />
          Height: {personagem.height}
          <br />
          Birth Year: {personagem.birth_year}
          <br />
        </>
      )}
    </div>
  );
}
