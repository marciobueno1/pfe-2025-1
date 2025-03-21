"use client";

import { useState } from "react";
import styles from "./page.module.css";

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
    <div className={styles.page}>
      <main className={styles.main}>
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
              <li key={personagem.url}>
                {personagem.name} ({personagem.birth_year})
              </li>
            ))}
          </ol>
        )}
      </main>
      <footer className={styles.footer}>Programação Front-End - UNICAP</footer>
    </div>
  );
}
