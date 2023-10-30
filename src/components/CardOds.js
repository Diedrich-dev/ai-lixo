import Paragrafo from "./Paragrafo";
import Imagem from "./Imagem";

function CardOds({flexDirection, background, numero, titulo, urlImg, alt, msg}) {
  return (
    <div className={`${flexDirection} ${background} flex p-4 gap-x-4 rounded-2xl bg-opacity-20 max-md:flex-col max-md:gap-y-4`}>
        <Imagem
          background={background}
          numero={numero}
          titulo={titulo}
          urlImg={urlImg}
          alt={alt}
        />
        <Paragrafo msg={msg}/>
      </div>
  );
}

export default CardOds;