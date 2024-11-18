const contatos = [
  {
    id: 1,
    nome: "Rodrigo",
    tipo: "Filho",
    telefone: "31 9 82310685",
  },
  {
    id: 2,
    nome: "Pedro",
    tipo: "Filho",
    telefone: "31 998877322",
  },
];

export function ListaContatosView() {
  return (
    <main>
      <h1>Lista de contatos</h1>
      <button>LISTAR</button>
      <button>ADICIONAR</button>

      {contatos.map((c) => (
        <div>
          <p>Tipo: {c.tipo}</p>
          <p>Nome: {c.nome}</p>
          <p>Telefone: {c.telefone}</p>
          <button>Excluir</button>
          <button>Editar</button>
        </div>
      ))}
    </main>
  );
}
