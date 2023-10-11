import desenHalter from "../../../public/desenvolvimento-para-ombros-com-halteres.webp";
import elevacaoLateral from "../../../public/ombros-elevacao-lateral-de-ombros-com-halteres.webp";
import remadaAlta from "../../../public/ombros-remada-alta-em-pe-com-halteres.webp";
import explRemadaAlta from "../../../public/expl-remada-alta-musculos-envolvidos.jpg";
import elevacaoFrontal from "../../../public/Elevacao-Frontal-com-Barra-na-Polia.gif";
import explRoscaDePunho from "../../../public/expl-rosca-de-punho.jpg";
import explDocinho from "../../../public/explDocinho.jpg";
import explRoscaInvertida from "../../../public/expl-rosca-invertida.jpg";

import { useState } from "react";
import Explicacao from "../Explicação/Explicacao";

interface PropsQuinta {
  onPressQuinta: () => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  previousExercise: () => void;
  nextExercise: () => void;
}

function Quinta(props: PropsQuinta) {
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
  const [explicacoesData, setExplicacoesData] = useState([
    {
      tittleApresentation: "Desenvolvimento com halter",
      imageApresentation: desenHalter,
      title: "Desenvolvimento com halter",
      imageJpg: desenHalter,
      weight: 0,
      addWeight: () => addWeight(0),
      removeWeight: () => removeWeight(0),
      texts: [
        "Para fazer o exercício na posição sentada, sente-se em um banco apoiando as costas no encosto. ",
        "Segure um halter em cada mão na posição horizontal e mantenha as palmas das mãos voltadas para a frente (pegada pronada).",
        "Em seguida, arrume sua postura mantendo o peito aberto, os cotovelos para os lados dobrados em um ângulo de 90 graus, o core firme e o olhar para a frente.",
        "Então, com cuidado para não inclinar o corpo, expire o ar enquanto estica os cotovelos para cima para levantar os pesos até os braços ficarem retos. Depois disso, volte lentamente à posição inicial inspirando o ar.",
        "Ao fazer o desenvolvimento para ombros nesta posição sentada, é possível levantar mais peso já que os músculos estabilizadores que sustentam o tronco não precisam trabalhar tanto.",
      ],
      errors: [
        {
          title: "Arquear as costas",
          description:
            "Cuidado para não curvar a parte inferior das costas no momento de levantar os halteres. O ideal é contrair o abdômen e se concentrar para usar a força dos ombros. Se ainda assim for difícil manter a postura, diminua o peso.",
        },
        {
          title: "Não aquecer antes do exercício",
          description:
            "De fato, a articulação dos ombros é uma das mais complexas e com maior mobilidade do corpo. Por isso, pular o aquecimento pode deixar os ombros mais sujeitos a lesões.",
        },
        {
          title: "Travar os cotovelos junto ao corpo",
          description:
            "É importante não colocar muita tensão nos cotovelos, pois isso transfere a tensão dos deltóides para os tríceps, prejudicando o desenvolvimento dos ombros.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Elevação lateral",
      imageApresentation: elevacaoLateral,
      title: "Elevação lateral",
      imageJpg: elevacaoLateral,
      weight: 0,
      addWeight: () => addWeight(1),
      removeWeight: () => removeWeight(1),
      texts: [
        "Para fazer esse exercício, você não precisa de muito mais do que um par de halteres e de espaço para conseguir levantar os braços para as laterais.",
        "Antes de qualquer coisa, adote a postura correta para realizar os movimentos. Assim, fique em pé com o corpo ereto e os pés afastados entre si na largura dos quadris. Agora, flexione um pouco os joelhos, apenas para não gerar muita tensão no local. ",
        "Então, pegue um par de halteres e segure um em cada mão ao lado do corpo, deixando as palmas das mãos voltadas para o seu corpo. Olhe para a frente, puxe os ombros para trás e mantenha os cotovelos relaxados. Esta é a posição inicial.",
        "Inicie o exercício elevando os braços lateralmente até as mãos ficarem na mesma altura dos ombros, formando um “T” com a parte superior do corpo. Faça isso contraindo o abdômen e mantendo o corpo firme. Após uma breve pausa, retorne à posição inicial descendo os braços para as laterais do corpo.",
        "Lembre-se de inspirar enquanto levanta os halteres e de expirar ao voltar lentamente para a posição inicial. Saiba também que é comum sentir uma queimação nos deltóides durante a execução da elevação lateral.",
      ],
      errors: [
        {
          title: "Inclinar o tronco e usar o impulso",
          description:
            "Esse erro é comum, principalmente quando você usa um par de halteres muito pesado. Em casos assim, os músculos cansam na metade da série e as repetições finais ficam por conta do impulso e não da força muscular.",
        },
        {
          title: "Abaixar a cabeça durante o movimento",
          description:
            "Esse erro costuma acontecer ao fim das séries, quando os ombros já estão fatigados, ou quando a carga usada é muito alta.",
        },
        {
          title: "Subir o peso além dos ombros",
          description:
            "É importante subir os braços sem ultrapassar o limite da linha dos ombros. Algumas pessoas têm a sensação de que quanto mais os braços subirem, melhor. Mas não é bem assim.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Remada alta",
      imageApresentation: remadaAlta,
      title: "Remada alta",
      imageJpg: explRemadaAlta,
      weight: 0,
      addWeight: () => addWeight(2),
      removeWeight: () => removeWeight(2),
      texts: [
        "Fique em pé com o corpo reto e afaste os pés na largura dos ombros. ",
        "Em seguida, segure um halter em cada mão, à frente do seu corpo, mais ou menos na altura dos quadris. Os halteres devem ficar bem próximos um do outro. Mantenha braços esticados e as palmas das mãos voltadas para o seu corpo. Esta é a posição inicial da remada alta.",
        "Então, eleve os pesos até a altura do peito flexionando os cotovelos. Vale destacar que os cotovelos e a parte superior dos braços vão ficar paralelos ao chão, na mesma linha dos ombros, enquanto os punhos devem ficar na altura do peitoral. Isso é importante para proteger as articulações. ",
        "Por fim, volte lentamente à posição inicial esticando os braços para baixo. Repita quantas vezes for necessário para terminar a sua série.",
      ],
      errors: [
        {
          title: "Pular o aquecimento",
          description:
            "Aquecer é muito importante para fazer o sangue circular antes do exercício de força. Quem deixa de fazer um bom aquecimento antes da musculação não prepara o corpo para a atividade e isso aumenta o risco de lesão.",
        },
        {
          title: "Subir demais os braços",
          description:
            "De fato, ultrapassar a linha dos ombros com o cotovelos gera muita tensão nas articulações dos ombros. Esse desgaste articular pode causar uma lesão. ",
        },
        {
          title: "Manter uma má postura",
          description:
            "É indispensável adotar uma boa postura e posicionar os halteres perto do corpo. Do contrário, o exercício pode sobrecarregar as articulações dos ombros e a região lombar, causando dores após o treino",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Elevação frontal",
      imageApresentation: elevacaoFrontal,
      title: "Elevação frontal",
      imageJpg: elevacaoFrontal,
      weight: 0,
      addWeight: () => addWeight(3),
      removeWeight: () => removeWeight(3),
      texts: [
        "O movimento do exercício elevação frontal é bastante simples. Ele pode ser feito com barra, halteres, anilhas e até na polia baixa no cross.",
        "Basicamente, do ponto de vista de movimento articular, temos uma flexão de ombro. Veja no vídeo, como deve ser a execução correta:",
        "1° Basicamente, você deve estar com o corpo ereto, seja em pé ou em um banco e os braços paralelos ao corpo.",
        "2° Eleve os halteres até aproximadamente a linha do ombro, formando uma angulação de 90°. Retorne a posição inicial.",
        "De forma simplificada, esta é a execução básica da elevação frontal.",
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Rosca de Punho",
      imageApresentation: explRoscaDePunho,
      title: "Rosca de Punho",
      imageJpg: explRoscaDePunho,
      weight: 0,
      addWeight: () => addWeight(4),
      removeWeight: () => removeWeight(4),
      texts: [
        "Sente-se sobre um banco e pegue a barra com uma pegada supinada (dorso da mão voltado para baixo e palma da mão voltada para cima);",
        "Afaste as mãos na barra até que fiquem paralelas aos ombros",
        "Repouse o dorso do antebraço sobre as coxas",
        "Dobre os punhos para baixo abaixando a barra",
        "Faça o movimento de rosca com os punhos e erga novamente a barra (tente realizar o exercício com repetições prolongadas).",
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Rolo de Pulso ou Rosca de Punho",
      imageApresentation: explDocinho,
      title: "Rolo de Pulso ou Rosca de Punho",
      imageJpg: explDocinho,
      weight: 0,
      addWeight: () => addWeight(5),
      removeWeight: () => removeWeight(5),
      texts: [
        "Fique ereto com os pés paralelos aos ombros, braços esticados na altura dos ombros;",
        "Você pode iniciar o movimento com a corda esticada, enrole a corda com um movimento rodando a barra, uma mão após a outra, repetindo até o peso encostar na barra.",
        "Em seguida, retorne o peso de para baixo, girando os punhos na direção oposta.",
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Rosca Direta Invertida com Halteres",
      imageApresentation: explRoscaInvertida,
      title: "Rosca Direta Invertida com Halteres",
      imageJpg: explRoscaInvertida,
      weight: 0,
      addWeight: () => addWeight(6),
      removeWeight: () => removeWeight(6),
      texts: [
        "Posicione-se em pé, segure a barra do halter com pegada pronada;",
        "Afaste as mãos na largura dos ombros e segure a barra com os braços estendidos;",
        "O exercício consiste em elevar a barra até os ombros flexionando os cotovelos. Por fim abaixe a barra deixando os braços estendidos novamente.",
      ],
      onClose: () => setExplicacaoAberta(null),
    },
  ]);

  function closeQuinta() {
    props.onPressQuinta();
    props.setPage(1);
  }

  return (
    <div className="containerWorkDay">
      {explicacaoAberta !== null && (
        <Explicacao {...explicacoesData[explicacaoAberta]} />
      )}
      <div className="headerWorkDay">
        <p className="marginHeader">Quinta</p>
        <p>Ombro - Antebraço - Abdomem</p>
        <button className="btnClose" onClick={closeQuinta}>
          X
        </button>
      </div>
      <div className="container-exercises">
        {props.page === 1 && (
          <div className="title-exercises">
            <p>Ombro</p>
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
            </div>
          </div>
        )}
        {props.page === 2 && (
          <div className="title-exercises">
            <p>Antebraço</p>
            <div className="exercises">
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
              <div className="prev" onClick={props.previousExercise}>
                <img src="../../../public/arrow.png" alt="Seta voltar"></img>
              </div>
              <div>
                {explicacoesData.slice(6, 7).map((explicacao, index) => (
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quinta;
