import "./style.css";

export function Login() {
  return (
    <section className="flex items-center h-[90vh] bg-slate-300">
      <div className="areaInform flex ml-10 justify-center items-center h-[90vh] w-[30vw]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVW71FBQyt1Um7_1DBPcFJN1qiYcyDaiDHkw&s"
          alt="" 
        />
      </div>{" "}
      <form className="pl-40">
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-base font-semibold leading-7 text-gray-900">
              Faça Login
            </h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div class="sm:col-span-4">
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        
        <div class="sm:col-span-4">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6">
   <a href="src\componentes\areaCadastro\index.jsx"> <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Ainda não tem uma conta?</button></a>
    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Logar</button>
  </div>
      </form>
    </section>
  );
}
