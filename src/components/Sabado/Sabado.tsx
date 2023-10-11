import aducao from "../../../public/pernas-aducao-de-pernas-na-maquina.webp";
import explAducaoEAbducao from "../../../public/expl-adutores-e-abdutores-web4.webp";

import abducaoMaquina from "../../../public/abducao-de-pernas-na-maquina-com-cabos.webp";
import agachamentoRack from "../../../public/agachamento-no-rack.webp";
import leg45 from "../../../public/pernas-leg-press-45-tradicional.webp";
import cadeiraExtensora from "../../../public/cadeira-extensora-extensora.gif";
import explCadeiraExtensora from "../../../public/expl-quadriceps-lowres.webp";

import cadeiraFlexora from "../../../public/cadeira-flexora.gif";
import explCadeiraFlexora from "../../../public/expl-Isquiotibiais.jpg";

import levantamentoTerra from "../../../public/levantamento-terra-com-barra.webp";
import elevacaoPelvica from "../../../public/elevacao-pelvica.gif";
import panturrilhaLeg from "../../../public/Panturrilha-no-leg-press.webp";
import panturrilhaAparelho from "../../../public/Panturrilha-em-pe-no-aparelho.webp";
import panturrilhaEscada from "../../../public/Elevacao-de-panturrilha-em-pe-escada.webp";
import { useState } from "react";
import Explicacao from "../Explicação/Explicacao";

interface PropsSabado {
  onPressSabado: () => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  previousExercise: () => void;
  nextExercise: () => void;
}

function Sabado(props: PropsSabado) {
  const [explicacaoAberta, setExplicacaoAberta] = useState<number | null>(null);

  function addWeight(index: number) {
    const updatedExplicacoesData = [...explicacoesData];
    updatedExplicacoesData[index].weight += 1;
    setExplicacoesData(updatedExplicacoesData);
  }

  function removeWeight(index: number) {
    if (explicacoesData[index].weight === 0) {
      return;
    }
    const updatedExplicacoesData = [...explicacoesData];
    updatedExplicacoesData[index].weight -= 1;
    setExplicacoesData(updatedExplicacoesData);
  }

  function closeSabado() {
    props.onPressSabado();
    props.setPage(1);
  }

  const [explicacoesData, setExplicacoesData] = useState([
    {
      tittleApresentation: "Adução e abdução de coxa",
      imageApresentation: aducao,
      title: "Adução e abdução de coxa",
      imageJpg: explAducaoEAbducao,
      weight: 0,
      addWeight: () => addWeight(0),
      removeWeight: () => removeWeight(0),
      texts: [
        "Sente-se no banco da máquina e apoie bem as costas. Em seguida, posicione as pernas no equipamento com as partes externas das coxas encostadas nas almofadas.",
        "Apoie as mãos ao lado do corpo e comece o exercício empurrando as almofadas para fora. Para isso, você deve abrir as pernas fazendo força para fora. Retorne à posição inicial fechando as pernas em um movimento lento e controlado.",
        "Você pode fazer 3 séries de 8 a 12 repetições ou seguir a orientação de um professor de educação física.",
      ],
      errors: [
        {
          title: "Exagerar na amplitude de movimento",
          description:
            "A facilidade no uso da máquina pode te levar a exagerar na amplitude. Apesar de ser bom para o músculo, o exagero pode causar dores na coluna ou nos quadris e ate mesmo lesões.",
        },
        {
          title: "Usar muito peso",
          description:
            "Colocar carga demais pode sobrecarregar os abdutores, que são músculos pequenos e sensíveis. Portanto, evite exageros na hora do treino na cadeira abdutora. .",
        },
        {
          title: "Terminar as séries muito rápido",
          description:
            "Abrir e fechar as pernas muito rapidamente prejudica o seu rendimento no exercício além de aumentar o risco de lesões. Assim, prefira fazer movimentos controlados e lentos para ter um treino satisfatório e seguro.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Abdução na maquina",
      imageApresentation: abducaoMaquina,
      title: "Abdução na maquina",
      imageJpg: explAducaoEAbducao,
      weight: 0,
      addWeight: () => addWeight(1),
      removeWeight: () => removeWeight(1),
      texts: [
        "Antes de mais nada, fique em pé ao lado da máquina com cabos e prenda o tornozelo direito no equipamento com um acessório específico para isso. Em seguida, apoie sua mão esquerda na estrutura mantendo o braço estendido. A mão direita pode ficar ao lado do corpo ou apoiada na cintura.",
        "Então, levante a perna direita lateralmente o mais alto que conseguir. Volte o pé para a posição inicial em um movimento lento e controlado para não soltar o peso todo de uma vez. Além disso, mantenha a perna esquerda no solo o tempo todo e tente não encostar o pé direito no chão durante a execução do exercício.",
        "Assim que completar a sua série com a perna direita, troque de lado e faça o mesmo com a outra perna.",
      ],
      errors: [
        {
          title: "Perder o equilíbrio",
          description:
            "A abdução de pernas na máquina com cabos exige uma boa dose de equilíbrio. Para facilitar o movimento e prevenir acidentes, posicione a perna de apoio um pouco à frente da outra, pois isso vai te dar mais estabilidade.",
        },
        {
          title: "Puxar e soltar o peso rapidamente ",
          description:
            "Fazer movimentos suaves e controlados é fundamental para ativar os músculos. Além disso, retornar à posição inicial lentamente é importante para não soltar o peso de uma vez.",
        },
        {
          title: "Inclinar o corpo para a frente",
          description:
            "O ideal é manter seu corpo reto e uma boa postura durante todo o exercício. Inclinar seu tronco para a frente pode te ajudar no equilíbrio, mas vai prejudicar a qualidade do movimento. ",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Agachamento no hack",
      imageApresentation: agachamentoRack,
      title: "Agachamento no hack",
      imageJpg: agachamentoRack,
      weight: 0,
      addWeight: () => addWeight(2),
      removeWeight: () => removeWeight(2),
      texts: [
        "Primeiramente, veja se o hack está travado e posicione seu corpo na máquina. Suba na plataforma e encaixe os ombros abaixo do apoio almofadado. Coloque suas mãos nas alças laterais e afaste seus pés aproximadamente na mesma distância entre seus ombros.",
        "Alinhe os joelhos de modo que ao flexioná-los eles não ultrapassem os dedos dos pés. Os pés devem ficar um pouco à frente do corpo. Não esqueça de apoiar as costas e a cabeça no hack. Por fim, olhe para a frente, coloque seus ombros para trás e estufe o peitoral. ",
        "Estique as pernas e suba o peso para destravar o aparelho. Em seguida, agache dobrando os joelhos em um ângulo de 90 graus. Retorne à posição inicial contraindo o quadríceps e repita o movimento até terminar a série. Você pode fazer 3 séries de 10 a 15 repetições. ",
      ],
      errors: [
        {
          title: "Estender os joelhos na fase concêntrica do exercício",
          description:
            "Na fase concêntrica, isto é, no momento de subir para a posição inicial, evite esticar os joelhos. Ao estender os joelhos, você acaba dando tempo para os membros inferiores descansarem, reduzindo a eficiência do exercício. ",
        },
        {
          title: "Não encaixar os ombros",
          description:
            "Os ombros precisam estar encaixados abaixo do apoio o tempo todo. Além disso, abra bem o peito e puxe os ombros para trás antes de começar o exercício..",
        },
        {
          title: "Posicionar os pés incorretamente",
          description:
            "Para praticar o agachamento no hack de forma segura, é importante posicionar os pés na mesma largura dos ombros e deixá-los centralizados na plataforma. Os pés podem ficar um pouco à frente do corpo, mas não coloque-os na parte superior da plataforma para não sobrecarregar os quadríceps.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Leg45",
      imageApresentation: leg45,
      title: "Leg45",
      imageJpg: leg45,
      weight: 0,
      addWeight: () => addWeight(3),
      removeWeight: () => removeWeight(3),
      texts: [
        "A maneira correta de fazer o leg press 45 graus tradicional começa com o posicionamento adequado das costas, glúteos e braços no banco inclinado. Você deve sentar-se no banco, de forma que as suas costas fiquem bem apoiadas no encosto, assim como os glúteos. Os braços devem ficar ao lado do corpo. ",
        "Então, apoie os pés na plataforma afastados entre si na largura dos quadris. Dessa forma, os quadríceps serão os músculos mais trabalhados durante o exercício. Também é importante deixar os pés levemente voltados para fora, para evitar que os joelhos avancem para a linha média do corpo.",
        "Em seguida, empurre a plataforma com os pés até quase esticar os joelhos. Mantenha essa posição enquanto solta a trava e se prepara para começar o exercício. ",
        "Flexione os joelhos sem encostá-los no peito enquanto deixa a plataforma descer lentamente. Logo depois, empurre a plataforma para cima mais uma vez. Repita o movimento até completar a sua série.",
      ],
      errors: [
        {
          title: "Não apoiar as costas no encosto",
          description:
            "É preciso manter as costas apoiadas no encosto o tempo todo. Aliás, contrair o abdômen para preservar a curvatura natural da coluna e deixá-la bem apoiada ajuda a evitar lesões e dores na lombar e mantém o foco nos músculos das pernas e nos glúteos.",
        },
        {
          title: "Levantar os calcanhares",
          description:
            "No leg press tradicional não é indicado ficar apenas com as pontas dos pés na plataforma. De fato, é essencial manter todo o pé apoiado para não sobrecarregar os joelhos.",
        },
        {
          title: "Esticar totalmente o joelho",
          description:
            "Não estique totalmente os joelhos ao empurrar a plataforma do leg press, pois isso aumenta o risco de lesões. Além disso, manter os joelhos levemente flexionados faz com que a tensão muscular se concentre nos quadríceps.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Cadeira extensora",
      imageApresentation: cadeiraExtensora,
      title: "Cadeira extensora",
      imageJpg: explCadeiraExtensora,
      weight: 0,
      addWeight: () => addWeight(4),
      removeWeight: () => removeWeight(4),
      texts: [
        "Para garantir o ajuste correto, certifique-se de que a barra acolchoada esteja logo acima dos seus tornozelos em uma posição confortável. Além disso, seus joelhos devem ficar em um ângulo de 90 graus.",
        "Então, apoie a lombar no encosto do banco e deixe as mãos ao lado do corpo. Os pés devem ficar levemente afastados entre si e os dedos apontando para a frente. ",
        "Por fim, verifique se o ajuste permite que você estenda suas pernas sem afetar a postura. ",
        "Para iniciar o exercício, ative o abdômen e levante a barra acolchoada sobre os tornozelos até estender as pernas, mas sem travar os joelhos. Faça uma pequena pausa no topo e retorne lentamente à posição inicial.",
        "A respiração também ajuda a ativar os músculos corretamente. Dessa forma, expire o ar enquanto levanta a barra e inspire enquanto baixa as pernas. Não esqueça de focar o exercício nos membros inferiores, sem retirar a parte superior do corpo do banco durante a execução. ",
      ],
      errors: [
        {
          title: "Travar os joelhos",
          description:
            "No momento de fazer a extensão de pernas na máquina, evite estender totalmente as pernas. Fazer isso pode colocar muita tensão nos joelhos e esticar as articulações locais, causando dores e aumentando o risco de lesões. ",
        },
        {
          title: "Levantar mais peso do que aguenta",
          description:
            "Colocar muita carga na máquina pode aumentar o risco de lesão. De fato, exagerar no peso eleva o risco de distensão dos ligamentos dos joelhos. Além disso, o excesso de carga pode prejudicar a saúde das articulações dos tornozelos..",
        },
        {
          title: "Movimentar as pernas rapidamente",
          description:
            "Realizar o movimento muito rapidamente diminui o tempo que o músculo fica sob tensão. Isso faz com que a musculatura não seja ativada corretamente durante o exercício.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Cadeira flexora",
      imageApresentation: cadeiraFlexora,
      title: "Cadeira flexora",
      imageJpg: explCadeiraFlexora,
      weight: 0,
      addWeight: () => addWeight(5),
      removeWeight: () => removeWeight(5),
      texts: [
        "omece ajustando a máquina de acordo com a sua altura. Para isso, deite-se de bruços na mesa flexora e veja se seus tornozelos alcançam a barra acolchoada. Ajuste de modo que a almofada fique entre os calcanhares e as panturrilhas.",
        "Então, arrume seu posicionamento para iniciar o exercício. Deixe os pés separados entre si por alguns centímetros, deite de barriga para baixo apoiando o tronco na parte de cima do banco e as coxas na parte inferior, que é mais inclinada. Coloque as mãos nos apoios laterais e, enfim, ajuste a carga desejada.",
        "Solte o ar enquanto levanta a barra com as pernas em direção aos glúteos. Faça uma pausa no topo. Inspire o ar voltando lentamente para a posição inicial.",
      ],
      errors: [
        {
          title: "Retirar o tronco ou os quadris do banco",
          description:
            "Os quadris e a parte superior do corpo devem ficar imóveis durante todo o exercício, pois só assim é possível ter certeza de que os isquiotibiais estão sendo estimulados. ",
        },
        {
          title: "Arquear as costas",
          description:
            "É importante que as costas fiquem retas, pois apesar de curvar as costas parecer facilitar o movimento, fazer isso o torna ineficaz e ainda aumenta o risco de lesões. .",
        },
        {
          title: "Levantar a cabeça",
          description:
            "Você deve permanecer o tempo todo com o pescoço alinhado com o resto da coluna e com o olhar para baixo. Ao levantar a cabeça e olhar para a frente, você coloca uma tensão desnecessária na cervical.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Levantamento terra com barra",
      imageApresentation: levantamentoTerra,
      title: "Levantamento terra com barra",
      imageJpg: levantamentoTerra,
      weight: 0,
      addWeight: () => addWeight(6),
      removeWeight: () => removeWeight(6),
      texts: [
        "É essencial que você mantenha a postura ereta e, se possível, olhando para a frente. Assim, comece ajustando a sua postura. Primeiramente, afaste as pernas mantendo-as na largura dos ombros. Em seguida, flexione levemente os joelhos e mantenha as costas retas, com quadris, ombros e cabeça alinhados. ",
        "Então, faça um agachamento para tirar a barra do chão, suba estendendo os joelhos e trazendo a barra bem próxima ao corpo.",
        "Agora, agache novamente deslizando a barra rente ao corpo e movimentando o bumbum para trás, como se fosse sentar em uma cadeira. O tronco deve ficar levemente inclinado para a frente com as costas retas e paralelas ao chão. Além disso, os joelhos devem continuar flexionados sem ultrapassar as pontas dos pés.",
        "Sem colocar a barra de volta no chão, repita o movimento até completar a sua série.",
        "Outra dica interessante é contrair o abdômen, pois isso estabiliza e protege a sua coluna durante o levantamento terra.",
      ],
      errors: [
        {
          title: "Curvar a coluna",
          description:
            "A coluna deve se manter ereta durante todo o movimento. Ao curvar a coluna, você leva os ombros para a frente, prejudicando assim a postura e o equilíbrio durante a execução.",
        },
        {
          title: "Manter a barra muito longe do corpo",
          description:
            "Se você afastar a barra do seu corpo, o exercício se torna menos eficaz. Além disso, perde-se o alinhamento natural da coluna, o que provoca desequilíbrio e sobrecarga da região lombar..",
        },
        {
          title: "Não deslocar os quadris para trás",
          description:
            "Durante o agachamento, é fundamental movimentar os quadris para trás, para não exigir demais das articulações do joelho. Isso também ajuda no equilíbrio e na ativação dos glúteos e isquiotibiais, envolvidos no levantamento terra.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Elevação pelvica",
      imageApresentation: elevacaoPelvica,
      title: "Elevação pelvica",
      imageJpg: elevacaoPelvica,
      weight: 0,
      addWeight: () => addWeight(7),
      removeWeight: () => removeWeight(7),
      texts: [
        "Você pode utilizar um colchonete para o seu conforto.",
        "Anilhas, caneleiras e halteres podem ser posicionados sobre sua pelve, dessa forma os treinos podem se tornar mais intensos e os resultados mais rápidos.",
        "Deite-se sobre o solo e alinhe os braços ao lado do corpo.",
        "Flexione levemente as pernas sem interromper o contato das solas dos pés com o chão.",
        "Inspire e eleve a pelve até a coluna perder o contato com o solo. Eleve a pelve o máximo que conseguir e contraia os glúteos. Mantenha-se nessa posição por 5-10 segundos",
        "Retorne à posição inicial e repita os movimentos.",
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Elevação de panturrilha no aparelho",
      imageApresentation: panturrilhaAparelho,
      title: "Elevação de panturrilha no aparelho",
      imageJpg: panturrilhaAparelho,
      weight: 0,
      addWeight: () => addWeight(8),
      removeWeight: () => removeWeight(8),
      texts: ["Text1", "Text2", "Text3"],
      errors: [
        {
          title: "error1",
          description: "error1",
        },
        {
          title: "error1",
          description: "error1.",
        },
        {
          title: "error1",
          description: "error1",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Elevação de panturrilha no leg press",
      imageApresentation: panturrilhaLeg,
      title: "Elevação de panturrilha no leg press",
      weight: 0,
      texts: ["Text1", "Text2", "Text3"],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Elevação de panturrilha em pé na escada",
      imageApresentation: panturrilhaEscada,
      title: "Elevação de panturrilha em pé na escada",
      weight: 0,
      texts: ["Text1", "Text2", "Text3"],
      onClose: () => setExplicacaoAberta(null),
    },
  ]);

  return (
    <div className="containerWorkDay">
      {explicacaoAberta !== null && (
        <Explicacao {...explicacoesData[explicacaoAberta]} />
      )}
      <div className="headerWorkDay">
        <p className="marginHeader">Quarta</p>
        <p>Coxa - Gluteo - Panturrilha</p>
        <button className="btnClose" onClick={closeSabado}>
          X
        </button>
      </div>
      <div className="container-exercises">
        {props.page === 1 && (
          <div className="title-exercises">
            <p style={{ height: 40 }}>Coxa</p>
            <div className="exercises">
              <div>
                {explicacoesData.slice(0, 2).map((explicacao, index) => (
                  <div
                    key={index}
                    className="blocks"
                    onClick={() => setExplicacaoAberta(index)}
                  >
                    <p className="tittle">{explicacao.tittleApresentation}</p>
                    <img
                      src={explicacao.imageApresentation}
                      className="img-exercices"
                      alt={explicacao.title}
                    />
                  </div>
                ))}
              </div>
              <div className="next" onClick={props.nextExercise}>
                <img src="../../../public/arrow.png" alt="Seta avançar"></img>
              </div>
              <div>
                {explicacoesData.slice(2, 4).map((explicacao, index) => (
                  <div
                    key={index}
                    className="blocks"
                    onClick={() => setExplicacaoAberta(index + 2)}
                  >
                    <p className="tittle">{explicacao.tittleApresentation}</p>
                    <img
                      src={explicacao.imageApresentation}
                      className="img-exercices"
                      alt={explicacao.title}
                    />
                  </div>
                ))}
              </div>
              <div>
                {explicacoesData.slice(4, 6).map((explicacao, index) => (
                  <div
                    key={index}
                    className="blocks"
                    onClick={() => setExplicacaoAberta(index + 4)}
                  >
                    <p className="tittle">{explicacao.tittleApresentation}</p>
                    <img
                      src={explicacao.imageApresentation}
                      className="img-exercices"
                      alt={explicacao.title}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {props.page === 2 && (
          <div className="title-exercises">
            <p style={{ height: 40 }}>Gluteo</p>
            <div className="exercises">
              <div>
                {explicacoesData.slice(6, 8).map((explicacao, index) => (
                  <div
                    key={index}
                    className="blocks"
                    onClick={() => setExplicacaoAberta(index + 6)}
                  >
                    <p className="tittle">{explicacao.tittleApresentation}</p>
                    <img
                      src={explicacao.imageApresentation}
                      className="img-exercices"
                      alt={explicacao.title}
                    />
                  </div>
                ))}
              </div>
              <div className="next" onClick={props.nextExercise}>
                <img src="../../../public/arrow.png" alt="Seta avançar"></img>
              </div>
              <div className="prev" onClick={props.previousExercise}>
                <img src="../../../public/arrow.png" alt="Seta voltar"></img>
              </div>
            </div>
          </div>
        )}
        {props.page === 3 && (
          <div className="title-exercises">
            <p style={{ height: 40 }}>Panturrilha</p>
            <div className="exercises">
              <div>
                {explicacoesData.slice(8, 10).map((explicacao, index) => (
                  <div key={index} className="blocks">
                    <p className="tittle">{explicacao.tittleApresentation}</p>
                    <img
                      src={explicacao.imageApresentation}
                      className="img-exercices"
                      alt={explicacao.title}
                    />
                  </div>
                ))}
              </div>
              <div className="prev" onClick={props.previousExercise}>
                <img src="../../../public/arrow.png" alt="Seta voltar"></img>
              </div>
              <div>
                {explicacoesData.slice(10, 11).map((explicacao, index) => (
                  <div key={index} className="blocks">
                    <p className="tittle">{explicacao.tittleApresentation}</p>
                    <img
                      src={explicacao.imageApresentation}
                      className="img-exercices"
                      alt={explicacao.title}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sabado;
