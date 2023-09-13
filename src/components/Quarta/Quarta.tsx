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

interface PropsQuarta {
  onPressQuarta: () => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  previousExercise: () => void;
  nextExercise: () => void;
}

function Quarta(props: PropsQuarta) {
  function closeQuarta() {
    props.onPressQuarta();
    props.setPage(1);
  }

  return (
    <div className="containerWorkDay">
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
                <div className="blocks">
                  <p>Adução e abdução de pernas</p>
                  <img src={aducao} className="img-exercices"></img>
                </div>
                <div className="blocks">
                  <p>Abdução na maquina</p>
                  <img src={abducaoMaquina} className="img-exercices"></img>
                </div>
              </div>
              <div className="next" onClick={props.nextExercise}>
                <img src="../../../public/arrow.png" alt="Seta avançar"></img>
              </div>
              <div>
                <div className="blocks">
                  <p>Agachamento no rack</p>
                  <img src={agachamentoRack} className="img-exercices"></img>
                </div>
                <div className="blocks">
                  <p>Leg45</p>
                  <img src={leg45} className="img-exercices"></img>
                </div>
              </div>
              <div>
                <div className="blocks">
                  <p>Cadeira extensora</p>
                  <img src={cadeiraExtensora} className="img-exercices"></img>
                </div>
                <div className="blocks">
                  <p>Cadeira Flexora</p>
                  <img src={cadeiraFlexora} className="img-exercices"></img>
                </div>
              </div>
            </div>
          </div>
        )}
        {props.page === 2 && (
          <div className="title-exercises">
            <p style={{ height: 40 }}>Gluteo</p>
            <div className="exercises">
              <div>
                <div className="blocks">
                  <p>Levantamento terra com barra</p>
                  <img src={levantamentoTerra} className="img-exercices"></img>
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
                  <p>Elevação pelvica</p>
                  <img src={elevacaoPelvica} className="img-exercices"></img>
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
                  <img
                    src={panturrilhaAparelho}
                    className="img-exercices"
                  ></img>
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
  );
}

export default Quarta;
