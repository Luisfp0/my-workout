import aducao from "../../../public/pernas-aducao-de-pernas-na-maquina.webp";
import explAducaoEAbducao from "../../../public/expl-adutores-e-abdutores-web4.webp";

import abducaoMaquina from "../../../public/abducao-de-pernas-na-maquina-com-cabos.webp";
import agachamentoRack from "../../../public/agachamento-no-rack.webp";
import leg45 from "../../../public/pernas-leg-press-45-tradicional.webp";
import cadeiraExtensora from "../../../public/cadeira-extensora-extensora.gif";
import cadeiraFlexora from "../../../public/cadeira-flexora.gif";
import levantamentoTerra from "../../../public/levantamento-terra-com-barra.webp";
import elevacaoPelvica from "../../../public/elevacao-pelvica.gif";
import panturrilhaLeg from "../../../public/Panturrilha-no-leg-press.webp";
import panturrilhaAparelho from "../../../public/Panturrilha-em-pe-no-aparelho.webp";
import panturrilhaEscada from "../../../public/Elevacao-de-panturrilha-em-pe-escada.webp";
import { useState } from "react";
import Explicacao from "../Explicação/Explicacao";

interface PropsQuarta {
  onPressQuarta: () => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  previousExercise: () => void;
  nextExercise: () => void;
}

function Quarta(props: PropsQuarta) {
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

  function closeQuarta() {
    props.onPressQuarta();
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
          title:
            "Estender os joelhos na fase concêntrica do exercício",
          description: "Na fase concêntrica, isto é, no momento de subir para a posição inicial, evite esticar os joelhos. Ao estender os joelhos, você acaba dando tempo para os membros inferiores descansarem, reduzindo a eficiência do exercício. ",
        },
        {
          title: "Não encaixar os ombros",
          description: "Os ombros precisam estar encaixados abaixo do apoio o tempo todo. Além disso, abra bem o peito e puxe os ombros para trás antes de começar o exercício..",
        },
        {
          title: "Posicionar os pés incorretamente",
          description: "Para praticar o agachamento no hack de forma segura, é importante posicionar os pés na mesma largura dos ombros e deixá-los centralizados na plataforma. Os pés podem ficar um pouco à frente do corpo, mas não coloque-os na parte superior da plataforma para não sobrecarregar os quadríceps.",
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
      tittleApresentation: "Cadeira extensora",
      imageApresentation: cadeiraExtensora,
      title: "Cadeira extensora",
      imageJpg: cadeiraExtensora,
      weight: 0,
      addWeight: () => addWeight(4),
      removeWeight: () => removeWeight(4),
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
      tittleApresentation: "Cadeira flexora",
      imageApresentation: cadeiraFlexora,
      title: "Cadeira flexora",
      imageJpg: cadeiraFlexora,
      weight: 0,
      addWeight: () => addWeight(5),
      removeWeight: () => removeWeight(5),
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
      tittleApresentation: "Levantamento terra com barra",
      imageApresentation: levantamentoTerra,
      title: "Levantamento terra com barra",
      imageJpg: levantamentoTerra,
      weight: 0,
      addWeight: () => addWeight(6),
      removeWeight: () => removeWeight(6),
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
      tittleApresentation: "Elevação pelvica",
      imageApresentation: elevacaoPelvica,
      title: "Elevação pelvica",
      imageJpg: elevacaoPelvica,
      weight: 0,
      addWeight: () => addWeight(7),
      removeWeight: () => removeWeight(7),
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
      imageJpg: panturrilhaLeg,
      weight: 0,
      addWeight: () => addWeight(9),
      removeWeight: () => removeWeight(9),
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
      tittleApresentation: "Elevação de panturrilha em pé na escada",
      imageApresentation: panturrilhaEscada,
      title: "Elevação de panturrilha em pé na escada",
      imageJpg: panturrilhaEscada,
      weight: 0,
      addWeight: () => addWeight(10),
      removeWeight: () => removeWeight(10),
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
  ]);

  return (
    <div className="containerWorkDay">
      {explicacaoAberta !== null && (
        <Explicacao {...explicacoesData[explicacaoAberta]} />
      )}
      <div className="headerWorkDay">
        <p className="marginHeader">Quarta</p>
        <p>Coxa - Gluteo - Panturrilha</p>
        <button className="btnClose" onClick={closeQuarta}>
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
                  <div
                    key={index}
                    className="blocks"
                    onClick={() => setExplicacaoAberta(index + 8)}
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
              <div className="prev" onClick={props.previousExercise}>
                <img src="../../../public/arrow.png" alt="Seta voltar"></img>
              </div>
              <div>
                {explicacoesData.slice(10, 11).map((explicacao, index) => (
                  <div
                    key={index}
                    className="blocks"
                    onClick={() => setExplicacaoAberta(index + 10)}
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
      </div>
    </div>
  );
}

export default Quarta;
