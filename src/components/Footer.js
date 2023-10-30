import Titulo from "../components/Titulo";
import ListItem from "./ListItem";

function Footer() {
  return (
    <footer className="h-52 w-full z-10 items-center flex justify-center bg-[#0CD761] bg-opacity-20">
      <div className="max-w-[10rem] absolute left-0 max-lg:hidden">
        <img src="https://i.imgur.com/o2yxJH6.png" alt="Icon Ai Lixo" />
      </div>
      <div className="justify-center flex flex-col gap-y-2">
        <Titulo titulo="Tecnologia em Análise e Desenvolvimento de Sistemas" />
        <Titulo titulo="Extensão: Institucional" />
        <ul className="grid grid-cols-2 gap-x-8 gap-y-2 w-96 pl-4 max-md:gap-y-0">
          <ListItem item="Alessandra Buffon" />
          <ListItem item="Eliane Konrad" />
          <ListItem item="Guilherme Rocha" />
          <ListItem item="Leonardo Jung" />
          <ListItem item="Luiz Gregini" />
          <ListItem item="Matheus Silva" />
          <ListItem item="Pedro Diedrich" />
          <ListItem item="Rafael Lamberty" />
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
