import Link from "next/link";

export const Personagem = ({ personagem }) => {
  const id = personagem.url.split("/")[5];
  return (
    <li>
      <Link href={`/person/${id}`}>
        {personagem.name} ({personagem.birth_year})
      </Link>
    </li>
  );
};
