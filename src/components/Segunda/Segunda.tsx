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
import explRoscaUnilateral from "../../../public/expl-rosca-concentrada-.webp";
import explRoscaInclinado from "../../../public/expl-rosca-inclinado.jpg";
import explRoscaBancoScoot from "../../../public/expl-rosca-banco-scoot.webp";
import explBicepsMartelo from "../../../public/expl-biceps-martelo.webp";
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
      title: "Rosca bíceps unilateral com halter",
      imageJpg: explRoscaUnilateral,
      weight: 0,
      addWeight: () => addWeight(4),
      removeWeight: () => removeWeight(4),
      texts: [
        "Sente-se na extremidade de um banco reto com os pés no chão e as pernas afastadas entre si em uma distância maior do que a largura dos ombros.",
        "Ative o abdômen e incline o tronco para a frente mantendo a coluna em sua curvatura natural. Mantenha o pescoço e as costas relaxados, o peito erguido e olhe para a frente. ",
        "Agora, segure um halter com a pegada supinada (palmas das mãos voltadas para cima) e apoie o cotovelo na parte interna da coxa. Então, estique o braço para baixo e considere esta a posição inicial.",
        "Flexione o braço com o cuidado de não hiperestender o cotovelo enquanto levanta o halter em direção ao peitoral. Não esqueça de contrair o bíceps durante a elevação. Retorne lentamente à posição inicial e repita quantas vezes forem necessárias para completar sua série. Inspire ao baixar o halter e expire ao levantar o peso.",
      ],
      errors: [
        {
          title: "Deixar a coluna torta",
          description:
            "Mantenha a coluna em uma posição neutra, pois isso diminui o risco de sentir dor ou sofrer uma lesão por conta da má postura. ",
        },
        {
          title: "Apoiar o cotovelo em cima da coxa",
          description:
            "O cotovelo deve ficar apoiado na lateral interna da coxa e não em cima. De fato, a posição errada pode mudar o foco do exercício e diminuir o uso do bíceps.",
        },
        {
          title: "Movimentar o punho",
          description:
            "É muito importante manter o punho em uma posição neutra, sem nenhum tipo de flexão para evitar desconfortos durante e após o treino.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Rosca bíceps no banco inclinado",
      imageApresentation: bicepsInclinado,
      title: "Rosca bíceps no banco inclinado",
      imageJpg: explRoscaInclinado,
      weight: 0,
      addWeight: () => addWeight(5),
      removeWeight: () => removeWeight(5),
      texts: [
        "Primeiramente, escolha um par de halteres para fazer o exercício. Então, sente-se com as costas apoiadas no banco e as pernas afastadas em volta do banco. Os pés devem ficar firmes no chão e os braços esticados ao lado do corpo enquanto você segura os halteres com uma pegada neutra. ",
        "Mantenha o pescoço em uma posição neutra e alinhado com as costas. Agora, gire os ombros para trás e para baixo, contraia o abdômen e comece o exercício.",
        "Comece contraindo o bíceps e dobrando os cotovelos. Ao flexionar os cotovelos, gire os punhos para mudar de uma pegada neutra para uma pegada supinada com as palmas das mãos voltadas para cima.",
        "Pare no topo do movimento assim que os halteres chegarem perto dos ombros. Então, desça lentamente até voltar para a posição inicial.",
      ],
      errors: [
        {
          title: "Esticar os braços",
          description:
            "É importante estender os braços durante a rosca bíceps, mas você não precisa ir até o limite, pois isso pode sobrecarregar as articulações dos cotovelos e causar dores. ",
        },
        {
          title: "Descer os braços muito rapidamente",
          description:
            "Controle o movimento, principalmente na hora da descida. Ao descer os halteres rápido demais, você reduz a tensão muscular no bíceps e corre o risco de deixá-los escapar das mãos.",
        },
        {
          title: "Balançar os braços para a frente",
          description:
            "Mantenha os braços pendurados atrás do tronco em uma posição estável, sem nenhum tipo de balanço. Se você notar que seus braços estão balançando para a frente no momento de erguer os halteres, faça uma pausa e corrija o movimento, pois isso diminui o alongamento e a tensão muscular.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Rosca bíceps no banco Scott",
      imageApresentation: roscaBarraW,
      title: "Rosca bíceps no banco Scott",
      imageJpg: explRoscaBancoScoot,
      weight: 0,
      addWeight: () => addWeight(6),
      removeWeight: () => removeWeight(6),
      texts: [
        "Mantenha as pernas afastadas entre si em uma distância maior do que a largura dos ombros. Os pés devem ficar levemente apontados para fora. O tronco pode ficar um pouco inclinado para a frente, mas as costas e a cabeça devem estar retas e alinhadas.",
        "Então, apoie a parte posterior dos braços no apoio almofadado, desde as axilas até os cotovelos.",
        "Agora, segure a barra W com a pegada supinada (palmas das mãos voltadas para cima) e deixe os braços esticados para baixo em um ângulo de cerca de 45 graus em relação ao tronco. Esta é a posição inicial da rosca Scott com a barra W.",
      ],
      errors: [
        {
          title: "Esticar totalmente o cotovelo",
          description:
            "Pare o movimento de extensão de cotovelos antes que seus braços “travem” na parte inferior. Caso contrário, você pode colocar muito estresse nos cotovelos e causar dor ou lesão.",
        },
        {
          title: "Encostar a barra nos ombros",
          description:
            "Tente subir a barra W ao máximo, mas sem que para isso você encoste a barra nos ombros. O fato é que esse toque aparentemente inofensivo pode fazer o seu corpo relaxar e descansar.",
        },
        {
          title: "Ajustar o banco Scott incorretamente",
          description:
            "Preste atenção no ajuste do banco Scott. Pois ele não deve ficar muito alto nem muito baixo, já que isso afeta a postura corporal e pode tornar mais difícil manter os braços apoiados no suporte.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Rosca bíceps martelo com halteres",
      imageApresentation: martelo,
      title: "Rosca bíceps martelo com halteres",
      imageJpg: explBicepsMartelo,
      weight: 0,
      addWeight: () => addWeight(7),
      removeWeight: () => removeWeight(7),
      texts: [
        "Fique em pé com os pés afastados entre si na largura dos ombros e os joelhos levemente dobrados. Segure um halter em cada mão com os pesos ao lado da parte externa da coxa, deixando as palmas das mãos viradas para as laterais das coxas. Arrume sua postura deixando o corpo reto e os cotovelos relaxados. ",
        "Agora, eleve os halteres em direção ao ombro enquanto flexiona os cotovelos. As palmas das mãos continuam viradas uma para a outra preservando a pegada neutra.",
        "Deixe o core firme e estável e contraia também os músculos abdominais para proteger as suas costas e evitar movimentos involuntários na hora de levantar e abaixar os halteres. Mantenha também o bíceps contraído para uma melhor ativação muscular.",
        "Os pulsos ficam alinhados com os antebraços e os únicos movimentos feitos são a flexão e extensão de cotovelos. Por fim, volte para a posição inicial devagar e repita até terminar sua série.",
      ],
      errors: [
        {
          title: "Usar o impulso",
          description:
            "O erro campeão é usar o impulso para completar o movimento com os halteres. Porém, usar o balanço do corpo para realizar a rosca martelo aumenta o risco de lesão e ainda diminui a ativação do bíceps.",
        },
        {
          title: "Subir e descer os halteres muito rapidamente",
          description:
            "A amplitude de movimento neste exercício não é muito grande. Por isso, é preciso reduzir a velocidade de execução para manter o músculo tensionado por mais tempo.",
        },
        {
          title: "Fazer movimentos incompletos",
          description:
            "É importante esticar totalmente os braços na parte inferior do movimento para alongar os músculos antes de elevar os halteres novamente. Isso também garante uma maior amplitude de movimento e mais tempo de tensão muscular que vai gerar a hipertrofia dos músculos envolvidos na rosca martelo.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Elevação de panturrilha na escada",
      imageApresentation: panturrilhaEscada,
      title: "Elevação de panturrilha na escada",
      imageJpg: panturrilhaEscada,
      weight: 0,
      texts: [
        "Para começar, fique em pé em cima de um caixote ou bloco e posicione somente as pontas dos pés no objeto. Deixe as pernas paralelas aos ombros. Em seguida, certifique-se de que as metades dos pés e os calcanhares não estão apoiadas no objeto, de modo que seja possível sentir a panturrilha sendo alongada.",
        "É aconselhável segurar um bastão ou apoiar-se próximo a uma parede durante a execução desse exercício para ter equilíbrio.",
        "Então, pressione as pontas dos pés em cima do caixote ou bloco, erguendo os calcanhares.",
        "Depois, retorne à posição inicial, sem se esquecer de alongar a panturrilha;",
        "Opcionalmente pode-se usar halteres para aumentar o nível de dificuldade.",
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Elevação de panturrilha aparelho",
      imageApresentation: panturrilhaAparelho,
      title: "Elevação de panturrilha aparelho",
      imageJpg: panturrilhaAparelho,
      weight: 0,
      addWeight: () => addWeight(9),
      removeWeight: () => removeWeight(9),
      texts: [
        "Primeiro, fique em pé na máquina, com os dedos dos pés em cima da plataforma e os ombros embaixo das almofadas;",
        "Em seguida, deixe as costas retas e abaixe os calcanhares o máximo que conseguir para alongar completamente.",
        "Depois, levante os calcanhares o mais alto que puder;",
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Elevação de panturrilha no leg",
      imageApresentation: panturrilhaLeg,
      title: "Elevação de panturrilha no leg",
      imageJpg: panturrilhaLeg,
      weight: 0,
      addWeight: () => addWeight(10),
      removeWeight: () => removeWeight(10),
      texts: [
        "Para começar, ajuste o banco da máquina de modo que as pernas fiquem ligeiramente dobradas na posição inicial. As pontas dos pés devem estar firmemente apoiadas na plataforma;",
        "Em seguida, selecione um peso adequado com ajuda do treinador; Depois, levante o peso estendendo os joelhos;",
        "Então, mantenha os joelhos esticados e empurre os calcanhares para alongar a panturrilha. Faça o número de repetições determinado; Em seguida, retorne à posição inicial.",
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
