import supinoRetoHalter from "../../../public/supino-reto-com-halteres.webp";
import explSupinoRetoHalter from "../../../public/expl- supino-reto-com-halter.jpg";
import supinoInclinadoHalter from "../../../public/supino-inclinado-com-halteres.webp";
import explSupinoInclinadoHalter from "../../../public/expl-supino-inclinado-halter.webp";
import voadorInclinado from "../../../public/voador-cabo-banco-inclinado.webp";
import tricepsPulley from "../../../public/triceps-puxada-no-pulley.gif";
import tricepsPulleyCabeca from "../../../public/triceps-no-pulley-atras-ca-cabeca.webp";
import extencaoDeitado from "../../../public/extencao-triceps-deitado.webp";
import tricepsCoice from "../../../public/triceps-coice.gif";
import crucifixo from "../../../public/crucifixo.webp";
import explCrucifixo from "../../../public/expl-músculos-envolvidos-peck-deck.webp";

import { useState } from "react";
import Explicacao from "../Explicação/Explicacao";

interface PropsTerca {
  onPressTerca: () => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  previousExercise: () => void;
  nextExercise: () => void;
}

function Terca(props: PropsTerca) {
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
      tittleApresentation: "Supino com Halter",
      imageApresentation: supinoRetoHalter,
      title: "Supino com Halter",
      imageJpg: explSupinoRetoHalter,
      weight: 0,
      addWeight: () => addWeight(0),
      removeWeight: () => removeWeight(0),
      texts: [
        "Deite-se de barriga para cima e levante os braços segurando os halteres, que devem ficar alinhados com o seu peitoral. Deixe os pés apoiados no chão e mantenha cabeça, tronco e quadris sobre o banco. Considere esta a posição inicial.",
        "Em seguida, desça os pesos enquanto dobra os braços em um ângulo de aproximadamente 90 graus. Se conseguir, você pode flexionar um pouco mais os braços para aumentar a amplitude de movimento. Mas só faça isso se não sentir dor.",
        "Por fim, volte à posição inicial e repita até finalizar a sua série.",
      ],
      errors: [
        {
          title: "Elevar os ombros",
          description:
            "Você não deve retirar os ombros do banco em nenhum momento. Fazer isso pode te dar um impulso para levantar os halteres, mas também pode te causar uma lesão. Além disso, elevar os ombros diminui a eficácia do exercício. ",
        },
        {
          title: "Encostar os halteres no peito",
          description:
            "Mesmo que seja breve, ao encostar os halteres no seu corpo durante as repetições, você acaba descansando os músculos. E isso pode prejudicar o seu ganho de massa muscular.",
        },
        {
          title: "Fazer o exercício muito rápido",
          description:
            "Não faça o supino reto com halteres com pressa para terminar a série. Além de aumentar as chances de sofrer uma lesão, essa prática não gera tensão suficiente nos músculos para construir massa muscular.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Supino inclinado com halteres",
      imageApresentation: supinoInclinadoHalter,
      title: "Supino inclinado com halteres",
      imageJpg: explSupinoInclinadoHalter,
      weight: 0,
      addWeight: () => addWeight(1),
      removeWeight: () => removeWeight(1),
      texts: [
        "Use um banco ajustável e deixe a inclinação em torno de 30 a 45 graus. Vale ressaltar que quanto maior o ângulo de inclinação, maior é o envolvimento dos ombros no exercício. Quanto menor o ângulo, maior é a ênfase na parte superior do peitoral.",
        "Em seguida, sente-se no banco e segure um halter em cada mão. Comece com as mãos próximas aos seus ombros e com os cotovelos dobrados e apontando para baixo. Mantenha os pés no chão e os quadris e costas apoiados no banco inclinado. Essa é a posição inicial do exercício.",
        "Então, estique os braços levando os halteres para cima alinhados com o seu peitoral, sem entortar os pulsos. Faça uma breve pausa no topo assim que os halteres quase se tocarem e seus braços estiverem perpendiculares ao solo.",
        "Em seguida, abaixe os halteres lentamente até o seu peito enquanto dobra os cotovelos novamente.",
      ],
      errors: [
        {
          title: "Usar muito peso",
          description:
            "É recomendado usar halteres mais leves do que os que você usaria em um supino reto ou em um supino inclinado com barra.",
        },
        {
          title: "Entortar os pulsos",
          description:
            "Algumas pessoas inclinam os pulsos para trás na hora de levantar os halteres e isso gera uma tensão desnecessária nas articulações dos pulsos, que pode causar uma lesão.",
        },
        {
          title: "Ajustar o ângulo errado",
          description:
            "A inclinação do banco precisa estar entre 30 e 45 graus para que o exercício gere o efeito desejado. Pois só respeitando essa inclinação, a porção superior do peito será trabalhada de forma satisfatória.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Crucifixo",
      imageApresentation: crucifixo,
      title: "Crucifixo",
      imageJpg: explCrucifixo,
      weight: 0,
      addWeight: () => addWeight(2),
      removeWeight: () => removeWeight(2),
      texts: [
        "Antes de mais nada, ajuste a altura do banco de acordo com as suas necessidades e também a carga que você vai usar no aparelho peck deck. Além disso, o apoio de colocar as mãos deve ficar no mesmo nível que o seu peitoral.",
        "Sente-se no banco de modo que seus pés toquem o chão e suas costas fiquem apoiadas. As pernas devem ficar abertas em uma distância um pouco maior do que a largura dos quadris.",
        "Então, apoie seus antebraços no local designado ou segure nas alças da máquina com as palmas das mãos voltadas para dentro e os braços abertos. Essa é a posição inicial do exercício. Comece o movimento puxando as alças para a frente até que as mãos se encontrem. Faça isso com os cotovelos levemente flexionados.",
      ],
      errors: [
        {
          title: "Usar a força das mãos para empurrar",
          description:
            "O peck deck geralmente tem um apoio almofadado para os antebraços para que você não sobrecarregue as suas mãos. De fato, empurrar o peso da máquina com as mãos parece ser mais fácil, mas isso diminui a amplitude de movimento dos ombros e reduz o trabalho do peitoral no exercício.",
        },
        {
          title: "Fazer o exercício rápido",
          description:
            "É importante fazer uma pausa de pelo menos 2 segundos antes de retornar à posição inicial. Isso aumenta a tensão muscular e torna seu treino mais produtivo.",
        },
        {
          title: "Curvar as costas",
          description:
            "Algumas pessoas arqueiam as costas com o intuito de facilitar o exercício. Mas isso aumenta o risco de lesões, prejudica a postura e ainda reduz a eficácia do voador peck deck.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Voador no cabo com banco inclinado",
      imageApresentation: voadorInclinado,
      title: "Voador no cabo com banco inclinado",
      imageJpg: voadorInclinado,
      weight: 0,
      addWeight: () => addWeight(3),
      removeWeight: () => removeWeight(3),
      texts: [
        "Para fazer esse exercício, você pode levar o banco ajustável para o centro do crossover e usar as polias baixas.",
        "Depois de determinar a carga que você vai usar, incline o banco em um ângulo entre 30 e 45 graus. Em seguida, sente-se no banco e apoie os dois pés no chão.",
        "Segure as alças do crossover com os braços abertos na altura do peito e deixe os cotovelos um pouco flexionados e apontados para fora. Então, puxe as alças em direção ao seu corpo esticando os braços para o alto até que as alças quase se toquem.",
      ],
      errors: [
        {
          title: "Dobrar muito os cotovelos",
          description: "Deixar os cotovelos flexionarem muito limita a amplitude de movimento no exercício. Como resultado, a eficácia do crucifixo inclinado também diminui. Portanto, deixe os cotovelos levemente dobrados durante o voador inclinado. ",
        },
        {
          title: "Esticar os cotovelos",
          description: "Manter os cotovelos totalmente esticados não é recomendado, pois isso causa muito estresse nos ombros e pode contribuir para o surgimento de dores ou de uma lesão.",
        },
        {
          title: "Não controlar a velocidade do movimento",
          description: "A dificuldade em controlar o movimento pode ocorrer quando a carga é muito leve ou muito pesada.",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Tríceps na polia alta com barra reta",
      imageApresentation: tricepsPulley,
      title: "Tríceps na polia alta com barra reta",
      imageJpg: tricepsPulley,
      weight: 0,
      addWeight: () => addWeight(4),
      removeWeight: () => removeWeight(4),
      texts: ["Text1", "Text2", "Text3."],
      errors: [
        {
          title: "Error1",
          description: "DescriptionError1",
        },
        {
          title: "Error2",
          description: "DescriptionError2",
        },
        {
          title: "Error3",
          description: "DescriptionError2",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Extensão de tríceps no cabo sob a cabeça com corda",
      imageApresentation: tricepsPulleyCabeca,
      title: "Extensão de tríceps no cabo sob a cabeça com corda",
      imageJpg: tricepsPulleyCabeca,
      weight: 0,
      addWeight: () => addWeight(5),
      removeWeight: () => removeWeight(5),
      texts: ["Text1", "Text2", "Text3."],
      errors: [
        {
          title: "Error1",
          description: "DescriptionError1",
        },
        {
          title: "Error2",
          description: "DescriptionError2",
        },
        {
          title: "Error3",
          description: "DescriptionError2",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Extensão de tríceps deitado",
      imageApresentation: extencaoDeitado,
      title: "Extensão de tríceps deitado",
      imageJpg: extencaoDeitado,
      weight: 0,
      addWeight: () => addWeight(6),
      removeWeight: () => removeWeight(6),
      texts: ["Text1", "Text2", "Text3."],
      errors: [
        {
          title: "Error1",
          description: "DescriptionError1",
        },
        {
          title: "Error2",
          description: "DescriptionError2",
        },
        {
          title: "Error3",
          description: "DescriptionError2",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Triceps Coice",
      imageApresentation: tricepsCoice,
      title: "Triceps Coice",
      imageJpg: tricepsCoice,
      weight: 0,
      addWeight: () => addWeight(7),
      removeWeight: () => removeWeight(7),
      texts: ["Text1", "Text2", "Text3."],
      errors: [
        {
          title: "Error1",
          description: "DescriptionError1",
        },
        {
          title: "Error2",
          description: "DescriptionError2",
        },
        {
          title: "Error3",
          description: "DescriptionError2",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
  ]);

  function closeTerca() {
    props.onPressTerca();
    props.setPage(1);
  }
  return (
    <div className="containerWorkDay">
      {explicacaoAberta !== null && (
        <Explicacao {...explicacoesData[explicacaoAberta]} />
      )}
      <div className="headerWorkDay">
        <p className="marginHeader">Terça</p>
        <p>Peito - Triceps - Abdomem</p>
        <button className="btnClose" onClick={closeTerca}>
          X
        </button>
      </div>
      <div className="container-exercises">
        {props.page === 1 && (
          <div className="title-exercises">
            <p>Peito</p>
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
            <p>Triceps</p>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Terca;
