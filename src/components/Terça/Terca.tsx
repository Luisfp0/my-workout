import supinoRetoHalter from "../../../public/supino-reto-com-halteres.webp";
import supinoInclinadoHalter from "../../../public/supino-inclinado-com-halteres.webp";
import voadorInclinado from "../../../public/voador-cabo-banco-inclinado.webp";
import tricepsPulley from "../../../public/triceps-puxada-no-pulley.gif";
import tricepsPulleyCabeca from "../../../public/triceps-no-pulley-atras-ca-cabeca.webp";
import extencaoDeitado from "../../../public/extencao-triceps-deitado.webp";
import tricepsCoice from "../../../public/triceps-coice.gif";
import crucifixo from "../../../public/crucifixo.webp";
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
  const [explicacaoAberta, setExplicacaoAberta] = useState(null);

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

  function abrirExplicacao(index: any) {
    setExplicacaoAberta(index);
  }

  function fecharExplicacao() {
    setExplicacaoAberta(null);
  }

  const [explicacoesData, setExplicacoesData] = useState([
    {
      tittleApresentation: "Supino com Halter",
      imageApresentation: supinoRetoHalter,
      title: "Supino com Halter",
      imageJpg: supinoRetoHalter,
      weight: 0,
      addWeight: () => addWeight(0),
      removeWeight: () => removeWeight(0),
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
      tittleApresentation: "Supino inclinado com halteres",
      imageApresentation: supinoInclinadoHalter,
      title: "Supino inclinado com halteres",
      imageJpg: supinoInclinadoHalter,
      weight: 0,
      addWeight: () => addWeight(1),
      removeWeight: () => removeWeight(1),
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
      tittleApresentation: "Crucifixo",
      imageApresentation: crucifixo,
      title: "Crucifixo",
      imageJpg: crucifixo,
      weight: 0,
      addWeight: () => addWeight(2),
      removeWeight: () => removeWeight(2),
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
      tittleApresentation: "Voador no cabo com banco inclinado",
      imageApresentation: voadorInclinado,
      title: "Voador no cabo com banco inclinado",
      imageJpg: voadorInclinado,
      weight: 0,
      addWeight: () => addWeight(3),
      removeWeight: () => removeWeight(3),
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
        <Explicacao
          {...explicacoesData[explicacaoAberta]}
          onClose={fecharExplicacao}
          texts={explicacoesData[explicacaoAberta].texts}
          errors={explicacoesData[explicacaoAberta].errors}
        />
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
              <div className="next" onClick={props.nextExercise}>
                <img src="../../../public/arrow.png" alt="Seta avançar"></img>
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
              <div className="prev" onClick={props.previousExercise}>
                <img src="../../../public/arrow.png" alt="Seta voltar"></img>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Terca;
