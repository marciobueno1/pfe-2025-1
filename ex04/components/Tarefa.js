export const Tarefa = ({ tarefa }) => {
  return (
    <li>
      {tarefa.descricao} - {tarefa.concluida ? "✅" : "❌"}
    </li>
  );
};
