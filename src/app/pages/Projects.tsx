function Projects() {
  return (
    <div className="w-full h-[4067px] px-16 py-40 bg-blackHeadLine flex-col justify-start items-center gap-20 inline-flex">
      <div className="h-[67px] flex-col justify-start items-center gap-6 flex">
        <div className="self-stretch text-center text-white text-[56px] font-dmsansbold leading-[67.20px]">
          Projetos em destaque
        </div>
      </div>
      <img className="w-auto h-[656px] rounded-2xl" src="/project1.jpg" />
      <img className="w-auto h-[656px] rounded-2xl" src="/project2.jpg" />
      <img className="w-auto h-[656px] rounded-2xl" src="/project3.jpg" />
      <img className="w-auto h-[656px] rounded-2xl" src="/project4.jpg" />
      <img className="w-auto h-[656px] rounded-2xl" src="/project5.jpg" />
    </div>
  );
}

export default Projects;
