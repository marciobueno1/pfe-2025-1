import Link from "next/link";

export default function Sobre() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Sobre</h1>
        <p>
          Este é um projeto de exemplo para utilizar o sistema de rotas do
          Next.JS
        </p>
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
          href="/"
        >
          Home
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/person"
        >
          Star Wars
        </Link>
      </footer>
    </div>
  );
}
