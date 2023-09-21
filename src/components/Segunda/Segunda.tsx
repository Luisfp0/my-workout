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
  const [explBarraFixa, setExplBarraFixa] = useState(false);
  const [explRemadaCabos, setExplRemadaCabos] = useState(false);
  const [explCavalinho, setExplCavalinho] = useState(false);
  const [explRemadaUnilateral, setExplRemadaUnilateral] = useState(false);
  const [explRoscaUnilateral, setExplRoscaUnilateral] = useState(false);
  const [explRoscaInclinado, setExplRoscaInclinado] = useState(false);
  const [explRoscaBanco, setExplRoscaBanco] = useState(false);
  const [explMartelo, setExplMartelo] = useState(false);
  const [explPanturrilhaAparelho, setExplPanturrilhaAparelho] = useState(false);
  const [explPanturrilhaLegPress, setExplPanturrilhaLegPress] = useState(false);
  const [explPanturrilhaEscada, setExplPanturrilhaEscada] = useState(false);

  function closeSegunda() {
    props.onPressSegunda();
    props.setPage(1);
  }
  const explicacoesData = [
    {
      tittleApresentation: "Barra Fixa Pull Up",
      title: "0",
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
      onClose: () => setExplicacaoAberta(null),    },
    {
      tittleApresentation: "Remada na máquina de cabos",
      title: "1",
      texts: [
        "Texto 1",
        "Texto 2",
        "Texto 3",
      ],
      errors: [
        {
          title: "Erro 1",
          description:
            "Descrição erro 1",
        },
        {
          title: "Erro 1",
          description:
            "Descrição erro 1",
        },
        {
          title: "Erro 2",
          description:
            "Descrição erro 2",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Remada na testes de cabos",
      title: "2",
      texts: [
        "Texto 1",
        "Texto 2",
        "Texto 3",
      ],
      errors: [
        {
          title: "Erro 1",
          description:
            "Descrição erro 1",
        },
        {
          title: "Erro 1",
          description:
            "Descrição erro 1",
        },
        {
          title: "Erro 2",
          description:
            "Descrição erro 2",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
    {
      tittleApresentation: "Remada na testes de cabos",
      title: "3",
      texts: [
        "Texto 1",
        "Texto 2",
        "Texto 3",
      ],
      errors: [
        {
          title: "Erro 1",
          description:
            "Descrição erro 1",
        },
        {
          title: "Erro 1",
          description:
            "Descrição erro 1",
        },
        {
          title: "Erro 2",
          description:
            "Descrição erro 2",
        },
      ],
      onClose: () => setExplicacaoAberta(null),
    },
  ];

  const [explicacaoAberta, setExplicacaoAberta] = useState(null);

  function abrirExplicacao(index: any) {
    setExplicacaoAberta(index);
  }

  function fecharExplicacao() {
    setExplicacaoAberta(null);
  }

  return (
    <>
      <div className="containerWorkDay">
        {explicacaoAberta !== null && (
          <Explicacao
            {...explicacoesData[explicacaoAberta]}
            onClose={fecharExplicacao}
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
                <div className="arrumar">
                  {explicacoesData.slice(0, 4).map((explicacao, index) => (
                    <div
                      key={index}
                      className="blocks"
                      onClick={() => abrirExplicacao(index)}
                    >
                      <p className="tittle">{explicacao.tittleApresentation}</p>
                      <img
                        src={barraFixa}
                        className="img-exercices"
                        alt={explicacao.title}
                      />
                    </div>
                  ))}
                </div>
                <div className="next" onClick={props.nextExercise}>
                  <img src="../../../public/arrow.png" alt="Seta avançar"></img>
                </div>
                {/* <div>
                  <div
                    className="blocks"
                    onClick={() => setExplCavalinho(true)}
                  >
                    <p className="tittle">Remada em pé com a barra T</p>
                    <img src={cavalinho} className="img-exercices"></img>
                  </div>
                  <div
                    className="blocks"
                    onClick={() => setExplRemadaUnilateral(true)}
                  >
                    <p className="tittle">Remada unilateral com halter</p>
                    <img src={remadaSerrote} className="img-exercices"></img>
                  </div>
                </div> */}
              </div>
            </div>
          )}
          {props.page === 2 && (
            <div className="title-exercises">
              <p>Biceps</p>
              <div className="exercises">
                <div>
                  <div
                    className="blocks"
                    onClick={() => setExplRoscaUnilateral(true)}
                  >
                    <p className="tittle">Rosca bíceps unilateral com halter</p>
                    <img src={roscaUnilateral} className="img-exercices"></img>
                  </div>
                  <div
                    className="blocks"
                    onClick={() => setExplRoscaInclinado(true)}
                  >
                    <p className="tittle">Rosca bíceps no banco inclinado</p>
                    <img src={bicepsInclinado} className="img-exercices"></img>
                  </div>
                </div>
                <div className="next" onClick={props.nextExercise}>
                  <img src="../../../public/arrow.png" alt="Seta avançar"></img>
                </div>
                <div className="prev" onClick={props.previousExercise}>
                  <img src="../../../public/arrow.png" alt="Seta voltar"></img>
                </div>
                <div>
                  <div
                    className="blocks"
                    onClick={() => setExplRoscaBanco(true)}
                  >
                    <p className="tittle">Rosca bíceps no banco Scott</p>
                    <img src={roscaBarraW} className="img-exercices"></img>
                  </div>
                  <div className="blocks" onClick={() => setExplMartelo(true)}>
                    <p className="tittle">Rosca bíceps martelo com halteres</p>
                    <img src={martelo} className="img-exercices"></img>
                  </div>
                </div>
              </div>
            </div>
          )}
          {props.page === 3 && (
            <div className="title-exercises">
              <p>Panturrilha</p>
              <div className="exercises">
                <div>
                  <div
                    className="blocks"
                    onClick={() => setExplPanturrilhaAparelho(true)}
                  >
                    <p className="tittle">Elevação de panturrilha aparelho</p>
                    <img
                      src={panturrilhaAparelho}
                      className="img-exercices"
                    ></img>
                  </div>
                  <div
                    className="blocks"
                    onClick={() => setExplPanturrilhaLegPress(true)}
                  >
                    <p className="tittle">Elevação de panturrilha no leg</p>
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
                    <p className="tittle">Elevação de panturrilha na escada</p>
                    <img
                      src={panturrilhaEscada}
                      className="img-exercices"
                    ></img>
                  </div>
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
