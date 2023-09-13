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

interface PropsSegunda {
  onPressSegunda: () => void
  nextExercise: () => void
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  previousExercise: () => void
}

function Segunda(props: PropsSegunda) {

  function closeSegunda() {
    props.onPressSegunda();
    props.setPage(1);
  }

  return (
  <div className="containerWorkDay">
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
          <p style={{ height: 40 }}>Costas</p>
          <div className="exercises">
            <div>
              <div className="blocks">
                <p>Barra fixa com pegada aberta</p>
                <img src={barraFixa} className="img-exercices"></img>
              </div>
              <div className="blocks">
                <p>Remada na máquina de cabos</p>
                <img src={remadaMaquina} className="img-exercices"></img>
              </div>
            </div>
            <div className="next" onClick={props.nextExercise}>
              <img src="../../../public/arrow.png" alt="Seta avançar"></img>
            </div>
            <div>
              <div className="blocks">
                <p>Remada em pé com a barra T</p>
                <img src={cavalinho} className="img-exercices"></img>
              </div>
              <div className="blocks">
                <p>Remada unilateral com halter</p>
                <img src={remadaSerrote} className="img-exercices"></img>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.page === 2 && (
        <div className="title-exercises">
          <p style={{ height: 40 }}>Biceps</p>
          <div className="exercises">
            <div>
              <div className="blocks">
                <p>Rosca bíceps concentrada unilateral com halter</p>
                <img src={roscaUnilateral} className="img-exercices"></img>
              </div>
              <div className="blocks">
                <p>Rosca bíceps com halteres no banco inclinado</p>
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
              <div className="blocks">
                <p>Rosca bíceps apoiado no banco Scott e com a barra EZ</p>
                <img src={roscaBarraW} className="img-exercices"></img>
              </div>
              <div className="blocks">
                <p>Rosca bíceps martelo em pé com halteres</p>
                <img src={martelo} className="img-exercices"></img>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.page === 3 && (
        <div className="title-exercises">
          <p style={{ height: 40 }}>Panturrilha</p>
          <div className="exercises">
            <div>
              <div className="blocks">
                <p>Elevação de panturrilha no aparelho</p>
                <img src={panturrilhaAparelho} className="img-exercices"></img>
              </div>
              <div className="blocks">
                <p>Elevação de panturrilha no leg press</p>
                <img src={panturrilhaLeg} className="img-exercices"></img>
              </div>
            </div>
            <div className="prev" onClick={props.previousExercise}>
              <img src="../../../public/arrow.png" alt="Seta voltar"></img>
            </div>
            <div>
              <div className="blocks">
                <p>Elevação de panturrilha em pé na escada</p>
                <img src={panturrilhaEscada} className="img-exercices"></img>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  )
}

export default Segunda;