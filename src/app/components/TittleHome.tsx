function TittleHome() {
  return (
    <div className="flex-col justify-center items-center gap-6 flex">
      <h1 className="text-blackHeadLine font-bold text-5xl text-center font-['DM Sans'] leading-[72px]">
        Seja Bem-vido à SampaioForce
      </h1>
      <h5 className="text-center text-black text-lg font-normal font-['DM Sans'] leading-[27px]">
        Somos uma Startup dedicada a oferecer soluções inovadoras. Nossa missão
        é proporcionar excelência e resultados excepcionais para nossos
        clientes.
      </h5>
      <button className="w-40 h-12 rounded-lg bg-brandGreenLight hover:bg-brandGreenHover">
        Saiba Mais
      </button>
    </div>
  );
}

export default TittleHome;
