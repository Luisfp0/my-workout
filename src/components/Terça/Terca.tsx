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
          description:
            "Deixar os cotovelos flexionarem muito limita a amplitude de movimento no exercício. Como resultado, a eficácia do crucifixo inclinado também diminui. Portanto, deixe os cotovelos levemente dobrados durante o voador inclinado. ",
        },
        {
          title: "Esticar os cotovelos",
          description:
            "Manter os cotovelos totalmente esticados não é recomendado, pois isso causa muito estresse nos ombros e pode contribuir para o surgimento de dores ou de uma lesão.",
        },
        {
          title: "Não controlar a velocidade do movimento",
          description:
            "A dificuldade em controlar o movimento pode ocorrer quando a carga é muito leve ou muito pesada.",
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
      texts: [
        "Prenda uma barra reta ou inclinada a uma polia alta e segure-a com as palmas das mãos voltadas para baixo e separadas em uma distância equivalente à largura dos ombros.",
        "Mantendo o corpo na posição reta, com uma leve inclinação do tronco para frente, aproxime os antebraços do corpo e deixe-os perpendiculares ao chão. Neste momento, os cotovelos estarão dobrados e os antebraços direcionados para a polia.",
        "Use o tríceps para empurrar a barra até a frente das coxas, deixando os braços totalmente estendidos, ao mesmo tempo em que exala o ar. Pause o movimento por um segundo nesta posição, e volte lentamente a barra ao seu posicionamento original enquanto inala o ar.",
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
      texts: [
        "Antes de mais nada, prenda a corda na polia baixa ou na altura da cintura, se a máquina permitir essa regulagem. Depois disso, selecione o peso adequado para o seu nível de condicionamento físico. Manter a postura correta também faz parte do exercício. Por isso, mantenha sua coluna reta, o abdômen contraído e os pés ligeiramente afastados entre si. ",
        "Agora, fique de costas para o equipamento, segure as alças da corda e deixe as palmas voltadas uma para a outra em uma pegada neutra. Em seguida, puxe a corda esticando o cabo para o alto até que seus cotovelos fiquem dobrados em um ângulo de 90 graus. A parte superior do braço fica reta apontando para cima e perpendicular ao chão, enquanto que seu antebraço fica paralelo ao solo. ",
        "Então, inicie o exercício esticando os braços para o alto até estender os cotovelos. Faça uma breve pausa e retorne à posição inicial com os cotovelos flexionados. Volte bem devagar para não soltar o peso de uma vez e se lesionar.",
      ],
      errors: [
        {
          title: "Forçar os pulsos",
          description:
            "Mesmo sendo pouco intuitivo segurar as alças de uma corda atrás da cabeça, tente manter os pulsos o mais estáveis e confortáveis possível.",
        },
        {
          title: "Afastar os cotovelos do tronco",
          description:
            "Ao cometer esse erro, a tensão muscular deixa o tríceps e acaba sobrecarregando peito e ombros. Desta forma, se concentre para travar os cotovelos ao lado do corpo e movimente as articulações do cotovelo apenas para cima e para baixo. ",
        },
        {
          title: "Não completar o movimento",
          description:
            "Certamente, a baixa amplitude de movimento prejudica os seus resultados pois não ativa o tríceps como deveria. É muito importante que você estenda totalmente os cotovelos e flexione de volta em um ângulo de 90 graus, pois só assim o exercício será eficiente de verdade. ",
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
      texts: [
        "Segure um halter em cada mão de modo que as palmas das mãos fiquem viradas uma para a outra. Em seguida, estenda os braços para cima levantando o peso. Considere esta a posição inicial do exercício. Então, flexione os cotovelos para trás levando os halteres em direção ao topo da cabeça. Estique os braços para voltar à posição inicial e repita esses movimentos até completar a sua série.",
        "Mantenha os braços imóveis e dobre apenas os cotovelos. Além disso, tente manter os cotovelos na mesma linha dos ombros.",
        "O peso nunca deve tocar a parte de trás da cabeça quando estiver na posição mais baixa. Por isso, faça um movimento lento e controlado.",
      ],
      errors: [
        {
          title: "Travar os cotovelos",
          description:
            "Apesar de ser bom manter os cotovelos alinhados com os ombros, você nunca deve travar totalmente os cotovelos durante o movimento, esticando completamente os braços.",
        },
        {
          title: "Errar a posição das mãos",
          description:
            "Tente manter as mãos afastadas entre si na mesma largura dos ombros. Isso ajuda a diminuir o estresse nas articulações dos cotovelos durante o exercício.",
        },
        {
          title: "Deixar o halter escorregar",
          description:
            "É muito importante manter os halteres bem firmes nas mãos. Lembre-se que o peso passa muito perto da sua cabeça. Caso um dos halteres escorregue e escape das suas mãos, você pode sofrer um ferimento grave no rosto ou na cabeça.",
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
      texts: [
        "Em uma polia sem nada, ajuste a altura para mais ou menos a altura da sua cintura.",
        "O braço deve permanecer perto do torso;",
        "Mantenha o braço direito, e mova apenas o antebraço para trás. Estique o braço completamente e segure;",
        "Mova o braço calmamente de volta para a posição inicial;",
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
