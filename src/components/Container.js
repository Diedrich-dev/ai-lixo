import Divisao from "./Divisao";
import Paragrafo from "./Paragrafo";
import Titulo from "./Titulo";
import Map from "./Map";
import CardOds from "./CardOds";

function Container() {
  return (
    <div
      className="h-full p-8 flex flex-col gap-y-6 bg-no-repeat bg-cover bg-fixed"
      style={{ backgroundImage: "url(https://i.imgur.com/wXsxreG.png)" }}
    >
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
        msg="O projeto de reciclagem de resíduos eletrônicos pode contribuir
          para a erradicação da pobreza, proporcionando oportunidades de
          emprego em diferentes etapas do processo de reciclagem. Além disso,
          a revenda de peças e componentes eletrônicos recuperados pode gerar
          renda para pessoas que vivem em condições de pobreza."
      />
      <CardOds
        flexDirection="flex-row-reverse"
        background="bg-[#C5192D]"
        numero="4"
        titulo="Educação de Qualidade"
        urlImg="https://i.imgur.com/uRpUhIC.png"
        alt="Educação"
        msg="O projeto pode desempenhar um papel fundamental
          na educação da população sobre a importância da reciclagem
          de resíduos eletrônicos. Por meio do site e de programas de conscientização,
          as pessoas podem aprender sobre o que é o e-lixo, como reciclá-lo de maneira
          adequada e quais são os benefícios ambientais e sociais associados a essa prática.
          Isso promove a educação de qualidade e a conscientização ambiental."
      />
      <CardOds
        background="bg-[#A21942]"
        numero="8"
        titulo="Trabalho decente e crescimente econômico"
        urlImg="https://i.imgur.com/HiUdx0d.png"
        alt="Trabalho"
        msg="Ao criar empregos na coleta, desmontagem,
          reciclagem e recondicionamento de resíduos eletrônicos,
          o projeto contribui para a promoção de trabalho decente 
          e o crescimento econômico. Além disso, ao recuperar materiais
          valiosos dos resíduos eletrônicos, o projeto pode gerar receita, impulsionando a economia local."
      />
      <CardOds
        flexDirection="flex-row-reverse"
        background="bg-[#FD6925]"
        numero="9"
        titulo="Indústria, inovação e infraestrutura"
        urlImg="https://i.imgur.com/N7fLdBG.png"
        alt="Educação"
        msg="O projeto promove a inovação na gestão de resíduos
          eletrônicos, incentivando a criação de soluções tecnológicas
          para o tratamento e a reciclagem desses materiais. Também 
          estimula a infraestrutura necessária para a coleta, o processamento
          e o recondicionamento dos resíduos eletrônicos."
      />
      <CardOds
        background="bg-[#FD9D24]"
        numero="11"
        titulo="Cidades e comunidades sustentáveis"
        urlImg="https://i.imgur.com/PP2gIyi.png"
        alt="Cidades"
        msg="A reciclagem de resíduos eletrônicos contribui
          para a criação de cidades e comunidades sustentáveis,
          reduzindo a quantidade de resíduos eletrônicos descartados
          em aterros sanitários. Isso diminui os impactos ambientais
          e melhora a qualidade de vida nas comunidades locais, reduzindo
          a exposição a substâncias tóxicas presentes em eletrônicos obsoletos."
      />
      <CardOds
        flexDirection="flex-row-reverse"
        background="bg-[#BF8B2E]"
        numero="12"
        titulo="Consumo e produção responsáveis"
        urlImg="https://i.imgur.com/CBrOkCg.png"
        alt="Consumo"
        msg="Promover a reciclagem de resíduos eletrônicos incentiva
          o consumo e a produção responsáveis. As pessoas são incentivadas
          a prolongar a vida útil de seus dispositivos eletrônicos, reutilizando
          e reciclando-os, em vez de descartá-los prematuramente. Isso reduz a
          demanda por novos produtos eletrônicos e minimiza o desperdício."
      />
      <CardOds
        background="bg-[#19486A]"
        numero="17"
        titulo="Parcerias e meios de implementação"
        urlImg="https://i.imgur.com/yujWc5c.png"
        alt="Parcerias"
        msg="O projeto de reciclagem de resíduos eletrônicos
          pode estabelecer parcerias com organizações governamentais,
          empresas privadas, organizações não governamentais e comunidades
          locais. Essas parcerias podem viabilizar a implementação bem-sucedida 
          do projeto, reunindo recursos, conhecimento e esforços para alcançar os
          objetivos dos ODS relacionados."
      />
    </div>
  );
}

export default Container;
