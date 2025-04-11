export const Personagem = ({ personagem }) => {
  return (
    <li>
      {personagem.name} ({personagem.birth_year})
    </li>
  );
};
