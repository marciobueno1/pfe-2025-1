"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Personagem } from "@/components/Personagem";
import { useStore } from "@/zustand";
import useSWR from "swr";
import { getTarefas } from "@/api";
import { Tarefa } from "@/components/Tarefa";

export default function Home() {
  const { data, error, isLoading } = useSWR(`tarefas`, getTarefas);

  console.log("Home - data", data);
  console.log("Home - error", error);
  console.log("Home - isLoading", isLoading);
  console.log("------------------------------------------------------");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Tarefas</h1>
        {!!error && <p>ERROR: {JSON.stringify(error)}</p>}
        {isLoading ? (
          <p>Carregando...</p>
        ) : (
          <ul>
            {data.results.map((tarefa) => (
              <Tarefa key={tarefa.objectId} tarefa={tarefa} />
            ))}
          </ul>
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
          href="/person"
        >
          Star Wars
        </Link>
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
