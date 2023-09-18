interface PropsExplicacaoSexta {
  explSupinoHalter: boolean;
  setExplSupinoAlter: React.Dispatch<React.SetStateAction<boolean>>;
  explSupinoInclinado: boolean;
  setExplSupinoInclinado: React.Dispatch<React.SetStateAction<boolean>>;
  explVoadorNoCabo: boolean;
  setExplVoadorNoCabo: React.Dispatch<React.SetStateAction<boolean>>;
  explCrucifixo: boolean;
  setExplCrucifixo: React.Dispatch<React.SetStateAction<boolean>>;
  explTricepsPulley: boolean;
  setExplTricepsPulley: React.Dispatch<React.SetStateAction<boolean>>;
  explTricepsPulleyCabeca: boolean;
  setExplTricepsPulleyCabeca: React.Dispatch<React.SetStateAction<boolean>>;
  explTricepsTesta: boolean;
  setExplTricepsTesta: React.Dispatch<React.SetStateAction<boolean>>;
  explTricepsCoice: boolean;
  setExplTricepsCoice: React.Dispatch<React.SetStateAction<boolean>>;
}

function ExplicacaoSexta(props: PropsExplicacaoSexta) {
  return (
    <>
      {props.explSupinoHalter && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Supino com halter</p>
            <button
              className="close-explication"
              onClick={() => props.setExplSupinoAlter(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explSupinoInclinado && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Supino inclinado com halter</p>
            <button
              className="close-explication"
              onClick={() => props.setExplSupinoInclinado(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explCrucifixo && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Crucifixo</p>
            <button
              className="close-explication"
              onClick={() => props.setExplCrucifixo(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explVoadorNoCabo && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Voador no cabo</p>
            <button
              className="close-explication"
              onClick={() => props.setExplVoadorNoCabo(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explTricepsPulley && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Triceps Pulley</p>
            <button
              className="close-explication"
              onClick={() => props.setExplTricepsPulley(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explTricepsPulleyCabeca && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Triceps Pulley Sobre a cabeça</p>
            <button
              className="close-explication"
              onClick={() => props.setExplTricepsPulleyCabeca(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explTricepsTesta && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Triceps Testa</p>
            <button
              className="close-explication"
              onClick={() => props.setExplTricepsTesta(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explTricepsCoice && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Sinuquinha</p>
            <button
              className="close-explication"
              onClick={() => props.setExplTricepsCoice(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ExplicacaoSexta;
