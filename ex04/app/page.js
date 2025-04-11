"use client";

import { useState } from "react";
import Link from "next/link";
import { Personagem } from "@/components/Personagem";

const urlInicial = "https://swapi.dev/api/people/?page=1";

export default function Home() {
  const [list, setList] = useState([]);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);

  async function handleBtCarregarClick(newURL) {
    try {
      const response = await fetch(newURL);
      if (response.ok) {
        const data = await response.json();
        setList(data.results);
        setPrevious(data.previous);
        setNext(data.next);
      } else {
        console.error("error status", response.status, response.statusText);
      }
    } catch (err) {
      console.error("err:", err);
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Personagens de Star Wars</h1>
        <p>
          <button
            onClick={() => handleBtCarregarClick(previous)}
            disabled={previous == null}
          >
            Anterior
          </button>
          <button onClick={() => handleBtCarregarClick(urlInicial)}>
            Carregar
          </button>
          <button
            onClick={() => handleBtCarregarClick(next)}
            disabled={next == null}
          >
            Próxima
          </button>
        </p>
        <hr />
        {list.length > 0 && (
          <ol>
            {list.map((personagem) => (
              <Personagem key={personagem.url} personagem={personagem} />
            ))}
          </ol>
        )}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://marciobueno.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ©Marcio Bueno (2025)
        </a>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/sobre"
        >
          Sobre
        </Link>
      </footer>
    </div>
  );
}
