import barraFixa from "../../../public/costas-barra-fixa-pegada-aberta.webp";
import remadaMaquina from "../../../public/remada-na-maquina-de-cabos-sentado-e-com-pegada-aberta.webp";
import cavalinho from "../../../public/remada-em-pe-com-barra-T.webp";
import remadaSerrote from "../../../public/remada-unilateral-com-halter-serrote.webp";
import roscaUnilateral from "../../../public/rosca-concentrada-unilateral-com-halter.webp";
import bicepsInclinado from "../../../public/rosca-biceps-com-halteres-no-banco-inclinado.webp";
import roscaBarraW from "../../../public/rosca-biceps-no-banco-scott-com-barra-W.webp";
import martelo from "../../../public/rosca-biceps-martelo-com-halteres.webp";
import panturrilhaLeg from "../../../public/Panturrilha-no-leg-press.webp";
import panturrilhaAparelho from "../../../public/Panturrilha-em-pe-no-aparelho.webp";
import panturrilhaEscada from "../../../public/Elevacao-de-panturrilha-em-pe-escada.webp";
import explRemadaMaquina from "../../../public/expl-remada-maquina.jpg";
import explMuscleBarraFixa from "../../../public/expl-barra-fixa.webp";
import explCavalinho from "../../../public/expl-cavalinho.webp";
import explRemadaUnilateral from "../../../public/expl-remada-unilateral.jpg";


import { useState } from "react";
import Explicacao from "../Explicação/Explicacao";

interface PropsSegunda {
  onPressSegunda: () => void;
  nextExercise: () => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  previousExercise: () => void;
}

function Segunda(props: PropsSegunda) {
  const [explicacaoAberta, setExplicacaoAberta] = useState(null);

  function closeSegunda() {
    props.onPressSegunda();
    props.setPage(1);
  }

  function abrirExplicacao(index: any) {
    setExplicacaoAberta(index);
  }

  function fecharExplicacao() {
    setExplicacaoAberta(null);
  }

  function addWeight(index: number) {
    console.log(index);
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

  const [explicacoesData, setExplicacoesData] = useState([
    {
      tittleApresentation: "Barra Fixa Pull Up",
      imageApresentation: barraFixa,
      title: "Barra fixa pull up",
      imageJpg: explMuscleBarraFixa,
      weight: 0,
      addWeight: () => addWeight(0),
      removeWeight: () => removeWeight(0),
      texts: [
        "Para realizar o movimento corretamente, é importante segurar a barra com a pegada aberta pronada. Primeiramente, se pendure na barra com os braços esticados e as mãos afastadas na mesma largura dos ombros.",
        "Em seguida, flexione os joelhos e cruze os tornozelos. Então, contraia os glúteos e as escápulas dos ombros e faça força para levantar o corpo para o alto até que seus ombros fiquem abaixo da barra e seus braços fiquem em um ângulo de 90 graus.",
        "Mantenha-se no alto por alguns segundos e desça em um movimento controlado até seus braços ficarem esticados novamente.",
      ],
      errors: [
        {
          title: "Abrir muito os cotovelos durante a subida",
          description:
            "Para ativar os músculos corretamente, é importante manter os cotovelos próximos do tronco durante o pull up. ",
        },
        {
          title: "Balançar durante o movimento",
          description:
            "Embora isso reduza a fadiga muscular e ajude a completar a série, balançar o corpo exige menos dos músculos e isso pode tornar o pull up menos eficiente para o ganho de massa muscular.",
        },
        {
          title: "Não manter abdômen contraído",
          description:
            "Contrair o abdômen é indispensável para proteger a coluna durante qualquer exercício na barra fixa. ",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Remada na máquina de cabos",
      imageApresentation: remadaMaquina,
      title: "Remada na máquina de cabos",
      imageJpg: explRemadaMaquina,
      weight: 0,
      addWeight: () => addWeight(1),
      removeWeight: () => removeWeight(1),
      texts: [
        "Segure a barra com a pegada aberta com as mãos próximas das extremidades do acessório. Fique com os braços esticados e inclinados para baixo, e se prepare para começar o movimento.",
        "Puxe a barra em direção ao peito flexionando os cotovelos para trás enquanto solta a respiração e inclina levemente o tronco para trás. Faça uma breve pausa, puxe o ar e volte para a posição inicial com cuidado para não bater os pesos.",
        "Vale lembrar que o tipo de pegada na barra faz toda a diferença, uma vez que a pegada aberta faz você recrutar mais os músculos das costas enquanto que a pegada fechada exige um trabalho maior do bíceps. ",
      ],
      errors: [
        {
          title: "Se inclinar para a frente",
          description:
            "Tenha cautela para não curvar as costas para a frente, pois isso diminui a tensão nos músculos e aumenta o risco de lesão. O ideal é manter uma postura neutra com as costas retas. ",
        },
        {
          title: "Movimentar o tronco",
          description:
            "É muito importante não usar o impulso para completar o movimento. Portanto, se concentre em mexer apenas os braços, mantendo o tronco estático.",
        },
        {
          title: "Encolher os ombros",
          description:
            "Mantenha seus ombros para trás e encaixados. Além de prejudicar a postura, relaxar os ombros e deixá-los caídos para a frente pode causar dores depois do exercício e colocar tensão excessiva no trapézio.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Remada em pé com a barra T",
      imageApresentation: cavalinho,
      title: "Cavalinho",
      imageJpg: explCavalinho,
      weight: 0,
      addWeight: () => addWeight(2),
      removeWeight: () => removeWeight(2),
      texts: [
        "Quanto à postura, fique em pé ao lado do centro da barra. Então, coloque as pernas em volta da barra mantendo os pés afastados na mesma largura dos quadris. Flexione os joelhos e empine o bumbum para trás. O tronco deve ficar inclinado para a frente com as costas retas e a cabeça alinhada com a coluna.",
        "Então, segure a barra com as duas mãos logo abaixo da anilha, retirando-a do chão de modo que seus braços fiquem esticados. ",
        "Agora, levante um pouco mais a barra como se estivesse remando em direção ao peito. Faça isso contraindo os músculos das costas e do abdômen, flexionando os cotovelos e mantendo o corpo estável durante todo o movimento. ",
      ],
      errors: [
        {
          title: "Encolher os ombros",
          description:
            "É importante contrair as omoplatas na parte superior do movimento para ativar os músculos corretamente. Além disso, isso ajuda a prevenir a tensão nos ombros e as possíveis dores depois do exercício. ",
        },
        {
          title: "Curvar as costas",
          description:
            "Esse erro pode causar dor, desconforto ou até lesões. Por isso, mantenha a curvatura natural da coluna durante todo o exercício para proteger a sua lombar de sobrecargas.",
        },
        {
          title: "Projetar a cabeça para a frente",
          description:
            "Não deixe a cabeça se projetar para a frente durante a elevação da barra, pois isso pode aumentar o estresse sobre o pescoço e causar desconfortos depois do treino.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Remada unilateral com halter",
      imageApresentation: remadaSerrote,
      title: "Remada unilateral com halter",
      imageJpg: explRemadaUnilateral,
      weight: 0,
      addWeight: () => addWeight(3),
      removeWeight: () => removeWeight(3),
      texts: [
        "Pegue um halter e segure-o com a mão esquerda. Em seguida, fique ao lado de um banco reto e apoie o joelho direito flexionado sobre ele. Apoie também a palma da mão direita no banco e incline o corpo para a frente de modo que o tronco fique paralelo ao chão. ",
        "Enquanto isso, a perna esquerda se mantém esticada com o pé apoiado no chão ao lado do banco reto. Então, contraia o abdômen e abaixe o halter em direção ao chão até a extensão completa do cotovelo. Logo depois, puxe o halter em direção ao ombro esquerdo mantendo o core estável sem arquear a coluna durante a excução. Faça isso flexionando o cotovelo e elevando levemente o tronco.",
        "No topo do movimento, o halter deve estar na linha do peitoral e o cotovelo apontado para o teto. Por último, volte para a posição inicial.",
      ],
      errors: [
        {
          title: "Deixar os ombros caídos",
          description:
            "É importante fazer a remada com as escápulas retraídas. Para isso, basta puxar os ombros para trás e para baixo antes de começar sua série. ",
        },
        {
          title: "Respirar errado",
          description:
            "Expire ao levantar o halter e inspire ao voltar para a posição inicial. Adotar esse padrão de respiração ajuda a manter a concentração e também a ativar os músculos durante a remada.",
        },
        {
          title: "Arredondar as costas",
          description:
            "Você deve manter as costas retas e nunca curvadas durante todo o exercício. Além de prejudicar a execução, arredondar as costas durante a remada serrote pode causar dor e lesão devido à tensão sobre a região lombar.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Rosca bíceps unilateral com halter",
      imageApresentation: roscaUnilateral,
      title: "4",
      weight: 0,
      addWeight: () => addWeight(4),
      removeWeight: () => removeWeight(4),
      texts: ["Texto 1", "Texto 2", "Texto 3"],
      errors: [
        {
          title: "Erro 1",
          description: "Descrição erro 1",
        },
        {
          title: "Erro 1",
          description: "Descrição erro 1",
        },
        {
          title: "Erro 2",
          description: "Descrição erro 2",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Rosca bíceps no banco inclinado",
      imageApresentation: bicepsInclinado,
      title: "5",
      weight: 0,
      addWeight: () => addWeight(5),
      removeWeight: () => removeWeight(5),
      texts: ["Texto 1", "Texto 2", "Texto 3"],
      errors: [
        {
          title: "Erro 1",
          description: "Descrição erro 1",
        },
        {
          title: "Erro 1",
          description: "Descrição erro 1",
        },
        {
          title: "Erro 2",
          description: "Descrição erro 2",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Rosca bíceps no banco Scott",
      imageApresentation: roscaBarraW,
      title: "6",
      weight: 0,
      addWeight: () => addWeight(6),
      removeWeight: () => removeWeight(6),
      texts: ["Texto 1", "Texto 2", "Texto 3"],
      errors: [
        {
          title: "Erro 1",
          description: "Descrição erro 1",
        },
        {
          title: "Erro 1",
          description: "Descrição erro 1",
        },
        {
          title: "Erro 2",
          description: "Descrição erro 2",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Rosca bíceps martelo com halteres",
      imageApresentation: martelo,
      title: "7",
      weight: 0,
      addWeight: () => addWeight(7),
      removeWeight: () => removeWeight(7),
      texts: ["Texto 1", "Texto 2", "Texto 3"],
      errors: [
        {
          title: "Erro 1",
          description: "Descrição erro 1",
        },
        {
          title: "Erro 1",
          description: "Descrição erro 1",
        },
        {
          title: "Erro 2",
          description: "Descrição erro 2",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Elevação de panturrilha na escada",
      imageApresentation: panturrilhaEscada,
      title: "8",
      weight: 0,
      addWeight: () => addWeight(8),
      removeWeight: () => removeWeight(8),
      texts: ["Texto 1", "Texto 2", "Texto 3"],
      errors: [
        {
          title: "Erro 1",
          description: "Descrição erro 1",
        },
        {
          title: "Erro 1",
          description: "Descrição erro 1",
        },
        {
          title: "Erro 2",
          description: "Descrição erro 2",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Elevação de panturrilha aparelho",
      imageApresentation: panturrilhaAparelho,
      title: "9",
      weight: 0,
      addWeight: () => addWeight(9),
      removeWeight: () => removeWeight(9),
      texts: ["Texto 1", "Texto 2", "Texto 3"],
      errors: [
        {
          title: "Erro 1",
          description: "Descrição erro 1",
        },
        {
          title: "Erro 1",
          description: "Descrição erro 1",
        },
        {
          title: "Erro 2",
          description: "Descrição erro 2",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Elevação de panturrilha no leg",
      imageApresentation: panturrilhaLeg,
      title: "10",
      weight: 0,
      addWeight: () => addWeight(10),
      removeWeight: () => removeWeight(10),
      texts: ["Texto 1", "Texto 2", "Texto 3"],
      errors: [
        {
          title: "Erro 1",
          description: "Descrição erro 1",
        },
        {
          title: "Erro 1",
          description: "Descrição erro 1",
        },
        {
          title: "Erro 2",
          description: "Descrição erro 2",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
  ]);

  return (
    <>
      <div className="containerWorkDay">
        {explicacaoAberta !== null && (
          <Explicacao
            {...explicacoesData[explicacaoAberta]}
            onClose={fecharExplicacao}
            texts={explicacoesData[explicacaoAberta].texts}
            errors={explicacoesData[explicacaoAberta].errors}
          />
        )}
        <div className="headerWorkDay">
          <p className="marginHeader">Segunda</p>
          <p>Costas - Biceps - Panturrilha</p>
          <button className="btnClose" onClick={closeSegunda}>
            X
          </button>
        </div>
        <div className="container-exercises">
          {props.page === 1 && (
            <div className="title-exercises">
              <p>Costas</p>
              <div className="exercises">
                <div>
                  {explicacoesData.slice(0, 2).map((explicacao, index) => (
                    <div
                      key={index}
                      className="blocks"
                      onClick={() => abrirExplicacao(index)}
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
                  {explicacoesData.slice(2, 4).map((explicacao, index) => (
                    <div
                      key={index}
                      className="blocks"
                      onClick={() => abrirExplicacao(index + 2)}
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
              </div>
            </div>
          )}
          {props.page === 2 && (
            <div className="title-exercises">
              <p>Biceps</p>
              <div className="exercises">
                <div>
                  {explicacoesData.slice(4, 6).map((explicacao, index) => (
                    <div
                      key={index}
                      className="blocks"
                      onClick={() => abrirExplicacao(index + 4)}
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
                  {explicacoesData.slice(6, 8).map((explicacao, index) => (
                    <div
                      key={index}
                      className="blocks"
                      onClick={() => abrirExplicacao(index + 6)}
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
              <p>Panturrilha</p>
              <div className="exercises">
                <div className="arrumar">
                  {explicacoesData.slice(8, 11).map((explicacao, index) => (
                    <div
                      key={index}
                      className="blocks"
                      onClick={() => abrirExplicacao(index + 8)}
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
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Segunda;
