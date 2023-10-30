import Divisao from "./Divisao";
import Paragrafo from "./Paragrafo";
import Titulo from "./Titulo";
import Map from "./Map";
import CardOds from "./CardOds";

function Container() {
  return (
    <div className="h-full p-8 flex flex-col gap-y-6 bg-no-repeat bg-cover bg-fixed" style={{backgroundImage: 'url(https://i.imgur.com/wXsxreG.png)'}}>
      <main className="flex flex-col gap-y-6">
        <Titulo titulo="Objetivos de Desenvolvimento Sustentável" />
        <Paragrafo
          msg="Os Objetivos de Desenvolvimento Sustentável são um apelo global
      à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir
      que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade.
      Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de
      que possamos atingir a Agenda 2030 no Brasil."
        />
      </main>
      <Divisao />
      <Titulo titulo="Onde Estamos?" />
      <div className="w-full h-[400px]">
        <Map />
      </div>
      <Titulo titulo="Objetivos Envolvidos no Ai Lixo:" />
      <CardOds
        background="bg-[#E5243B]"
        numero="1"
        titulo="Erradicação da pobreza"
        urlImg="https://i.imgur.com/6ErjJKo.png"
        alt="Erradicação"
        msg="Reduzir pelo menos à metade a proporção de homens,
         mulheres e crianças, de todas as idades, que vivem na pobreza, 
         em todas as suas dimensões, de acordo com as definições nacionais."
      />
      <CardOds
        flexDirection="flex-row-reverse"
        background="bg-[#C5192D]"
        numero="4"
        titulo="Educação de Qualidade"
        urlImg="https://i.imgur.com/uRpUhIC.png"
        alt="Educação"
        msg="Garantir o acesso à educação inclusiva, de qualidade e equitativa,
         e promover oportunidades de aprendizagem ao longo da vida para todos"
      />
      <CardOds
        background="bg-[#A21942]"
        numero="8"
        titulo="Trabalho decente e crescimente econômico"
        urlImg="https://i.imgur.com/HiUdx0d.png"
        alt="Trabalho"
        msg="Promover o crescimento econômico inclusivo e sustentável, 
        o emprego pleno e produtivo e o trabalho digno para todos"
      />
      <CardOds
        flexDirection="flex-row-reverse"
        background="bg-[#FD6925]"
        numero="9"
        titulo="Indústria, inovação e infraestrutura"
        urlImg="https://i.imgur.com/N7fLdBG.png"
        alt="Educação"
        msg="Construir infraestruturas resilientes,
         promover a industrialização inclusiva e sustentável e fomentar a inovação"
      />
      <CardOds
        background="bg-[#FD9D24]"
        numero="11"
        titulo="Cidades e comunidades sustentáveis"
        urlImg="https://i.imgur.com/PP2gIyi.png"
        alt="Cidades"
        msg="Tornar as cidades e comunidades mais inclusivas, seguras, resilientes e sustentáveis"
      />
      <CardOds
        flexDirection="flex-row-reverse"
        background="bg-[#BF8B2E]"
        numero="12"
        titulo="Consumo e produção responsáveis"
        urlImg="https://i.imgur.com/CBrOkCg.png"
        alt="Consumo"
        msg="Garantir padrões de consumo e de produção sustentáveis"
      />
      <CardOds
        background="bg-[#19486A]"
        numero="17"
        titulo="Parcerias e meios de implementação"
        urlImg="https://i.imgur.com/yujWc5c.png"
        alt="Parcerias"
        msg="Reforçar os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável"
      />
    </div>
  );
}

export default Container;
