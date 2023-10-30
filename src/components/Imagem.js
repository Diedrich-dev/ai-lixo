function Imagem({background, titulo, numero, urlImg, alt}) {
  return (
    <div className={`${background} w-60 h-60 rounded-2xl p-4 flex flex-col justify-around max-md:w-40 max-md:h-40`}>
      <div className="flex text-white font-semibold justify-around w-full h-1/3">
        <div className="w-16 flex justify-start items-center text-6xl mr-3 max-md:text-4xl">
          <h2>{numero}</h2>
        </div>
        <div className="w-full h-full flex justify-center items-center text-base font-bold max-md:text-xs">
          <h2 className="uppercase">{titulo}</h2>
        </div>
      </div>
      <div className="h-2/3 flex items-center justify-center p-4">
        <img className="h-full" src={urlImg} alt={alt}/>
      </div>
    </div>
  );
}

export default Imagem;