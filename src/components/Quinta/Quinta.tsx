import desenHalter from "../../../public/desenvolvimento-para-ombros-com-halteres.webp";
import elevacaoLateral from "../../../public/ombros-elevacao-lateral-de-ombros-com-halteres.webp";
import remadaAlta from "../../../public/ombros-remada-alta-em-pe-com-halteres.webp";
import elevacaoFrontal from "../../../public/Elevacao-Frontal-com-Barra-na-Polia.gif";


interface PropsQuinta {
  onPressQuinta: () => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  previousExercise: () => void;
  nextExercise: () => void;
}

function Quinta(props: PropsQuinta) {
  
  function closeQuinta() {
    props.onPressQuinta();
    props.setPage(1);
  }

  return (
    <div className="containerWorkDay">
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
            <p style={{ height: 40 }}>Ombro</p>
            <div className="exercises">
              <div>
                <div className="blocks">
                  <p>Desenvolvimento com halter</p>
                  <img src={desenHalter} className="img-exercices"></img>
                </div>
                <div className="blocks">
                  <p>Elevação lateral</p>
                  <img src={elevacaoLateral} className="img-exercices"></img>
                </div>
              </div>
              <div className="next" onClick={props.nextExercise}>
                <img src="../../../public/arrow.png" alt="Seta avançar"></img>
              </div>
              <div>
                <div className="blocks">
                  <p>Remada alta</p>
                  <img src={remadaAlta} className="img-exercices"></img>
                </div>
                <div className="blocks">
                  <p>Elevação frontal</p>
                  <img src={elevacaoFrontal} className="img-exercices"></img>
                </div>
              </div>
            </div>
          </div>
        )}
        {props.page === 2 && (
          <div className="title-exercises">
            <p style={{ height: 40 }}>Antebraço</p>
            <div className="exercises">
              <div>
                <div className="blocks">
                  <p>Antebraço1</p>
                </div>
                <div className="blocks">
                  <p>Antebraço2</p>
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
                  <p>Antebraço3</p>
                </div>
                <div className="blocks">
                  <p>Antebraço4</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {props.page === 3 && (
          <div className="title-exercises">
            <p style={{ height: 40 }}>Abdomem</p>
            <div className="exercises">
              <div>
                <div className="blocks">
                  <p>Abdomem1</p>
                </div>
                <div className="blocks">
                  <p>Abdomem2</p>
                </div>
              </div>
              <div className="prev" onClick={props.previousExercise}>
                <img src="../../../public/arrow.png" alt="Seta voltar"></img>
              </div>
              <div>
                <div className="blocks">
                  <p>Abdomem3</p>
                </div>
                <div className="blocks">
                  <p>Abdomem4</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quinta;
