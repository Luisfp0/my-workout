import crucifixo from "../../../public/crucifixo.webp";
import supinoRetoHalter from "../../../public/supino-reto-com-halteres.webp";
import supinoInclinadoHalter from "../../../public/supino-inclinado-com-halteres.webp";
import voadorInclinado from "../../../public/voador-cabo-banco-inclinado.webp";
import tricepsPulley from "../../../public/triceps-puxada-no-pulley.gif";
import tricepsPulleyCabeca from "../../../public/triceps-no-pulley-atras-ca-cabeca.webp";
import extencaoDeitado from "../../../public/extencao-triceps-deitado.webp";
import tricepsCoice from "../../../public/triceps-coice.gif";

interface PropsSexta {
  onPressSexta: () => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  previousExercise: () => void;
  nextExercise: () => void;
}

function Sexta(props: PropsSexta) {
  function closeSexta() {
    props.onPressSexta();
    props.setPage(1);
  }

  return (
    <div className="containerWorkDay">
      <div className="headerWorkDay">
        <p className="marginHeader">Sexta</p>
        <p>Peito - Triceps - Abdomem</p>
        <button className="btnClose" onClick={closeSexta}>
          X
        </button>
      </div>
      <div className="container-exercises">
        {props.page === 1 && (
          <div className="title-exercises">
            <p style={{ height: 40 }}>Peito</p>
            <div className="exercises">
              <div>
                <div className="blocks">
                  <p>Supino reto com halteres</p>
                  <img src={supinoRetoHalter} className="img-exercices"></img>
                </div>
                <div className="blocks">
                  <p>Supino inclinado com halteres</p>
                  <img
                    src={supinoInclinadoHalter}
                    className="img-exercices"
                  ></img>
                </div>
              </div>
              <div className="next" onClick={props.nextExercise}>
                <img src="../../../public/arrow.png" alt="Seta avançar"></img>
              </div>
              <div>
                <div className="blocks">
                  <p>Crucifixo</p>
                  <img src={crucifixo} className="img-exercices"></img>
                </div>
                <div className="blocks">
                  <p>Voador no cabo com banco inclinado</p>
                  <img src={voadorInclinado} className="img-exercices"></img>
                </div>
              </div>
            </div>
          </div>
        )}
        {props.page === 2 && (
          <div className="title-exercises">
            <p style={{ height: 40 }}>Triceps</p>
            <div className="exercises">
              <div>
                <div className="blocks">
                  <p>Tríceps na polia alta com barra reta</p>
                  <img src={tricepsPulley} className="img-exercices"></img>
                </div>
                <div className="blocks">
                  <p>Extensão de tríceps no cabo sob a cabeça com corda</p>
                  <img
                    src={tricepsPulleyCabeca}
                    className="img-exercices"
                  ></img>
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
                  <p>Extensão de tríceps deitado</p>
                  <img src={extencaoDeitado} className="img-exercices"></img>
                </div>
                <div className="blocks">
                  <p>Triceps Coice</p>
                  <img src={tricepsCoice} className="img-exercices"></img>
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

export default Sexta;
