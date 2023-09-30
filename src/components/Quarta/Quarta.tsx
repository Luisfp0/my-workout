import aducao from "../../../public/pernas-aducao-de-pernas-na-maquina.webp";
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
      imageJpg: aducao,
      weight: 0,
      addWeight: () => addWeight(0),
      removeWeight: () => removeWeight(0),
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
      tittleApresentation: "Abdução na maquina",
      imageApresentation: abducaoMaquina,
      title: "Abdução na maquina",
      imageJpg: abducaoMaquina,
      weight: 0,
      addWeight: () => addWeight(1),
      removeWeight: () => removeWeight(1),
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
      tittleApresentation: "Agachamento no rack",
      imageApresentation: agachamentoRack,
      title: "Agachamento no rack",
      imageJpg: agachamentoRack,
      weight: 0,
      addWeight: () => addWeight(2),
      removeWeight: () => removeWeight(2),
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
                <div
                  className="blocks"
                  onClick={() => setExplPanturrilhaAparelho(true)}
                >
                  <p className="tittle">Elevação de panturrilha no aparelho</p>
                  <img
                    src={panturrilhaAparelho}
                    className="img-exercices"
                  ></img>
                </div>
                <div
                  className="blocks"
                  onClick={() => setExplPanturrilhaLeg(true)}
                >
                  <p className="tittle">Elevação de panturrilha no leg press</p>
                  <img src={panturrilhaLeg} className="img-exercices"></img>
                </div>
              </div>
              <div className="prev" onClick={props.previousExercise}>
                <img src="../../../public/arrow.png" alt="Seta voltar"></img>
              </div>
              <div>
                <div
                  className="blocks"
                  onClick={() => setExplPanturrilhaEscada(true)}
                >
                  <p className="tittle">
                    Elevação de panturrilha em pé na escada
                  </p>
                  <img src={panturrilhaEscada} className="img-exercices"></img>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quarta;
