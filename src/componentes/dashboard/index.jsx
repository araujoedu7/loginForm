export function Dashboard() {
  return (
    <section class="flex justify-center h-[100vh] w-[100vw] bg-slate-300">
     <table class="table-fixed w-[90vw] h-[40vh] mt-10 border border-slate-950">
  <thead class="bg-slate-900 text-white">
    <tr>
      <th class="text-left px-4 py-2">ID</th>
      <th class="text-left px-4 py-2">Nome</th>
      <th class="text-left px-4 py-2">Email</th>
      <th class="text-left px-4 py-2">Config</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-100 even:bg-gray-200">
      <td class="border px-4 py-2">1</td>
      <td class="border px-4 py-2">Eduardo</td>
      <td class="border px-4 py-2">aluno@email.com</td>
      <td class="border px-4 py-2">
        <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded mr-2">Deletar</button>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded mr-2">Atualizar</button>
        <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded mt-4">Visualizar</button>
      </td>
    </tr>
  </tbody>
</table>

    </section>
  );
}
