function NavBar() {
  return (
    <header className="h-[88px] bg-black shadow-inner flex-col justify-center flex">
      <div className="self-stretch justify-between items-center inline-flex px-16">
        <div className="flex items-center flex-shrink-0 text-white mr-6 hover:cursor-pointer">
          <img
            className="w-20 h-auto rounded-full"
            src="/logo-sf.jpeg"
            alt="logo"
          />
        </div>
        <nav className="justify-center flex gap-16">
          <ul className="items-center flex text-gray6 font-normal md:flex-row gap-16 hover:cursor-pointer list-item:h-12">
            <li>Início</li>
            <li>Sobre nós</li>
            <li>Serviços</li>
            <li>Projetos</li>
            <li>Blog</li>
          </ul>
          <button className="w-40 h-12 rounded-lg bg-gray6">
            Fale conosco
          </button>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
