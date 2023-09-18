interface PropsExplicacaoQuinta {
  explElevacaoFrontal: boolean;
  setElevacaoFrontal: React.Dispatch<React.SetStateAction<boolean>>;
  explRemadaAlta: boolean;
  setRemadaAlta: React.Dispatch<React.SetStateAction<boolean>>;
  explElevacaoLateral: boolean;
  setElevacaoLateral: React.Dispatch<React.SetStateAction<boolean>>;
  explDesenvolvimentoHalter: boolean;
  setDesenvolvimentoHalter: React.Dispatch<React.SetStateAction<boolean>>;
}

function ExplicacaoQuinta(props: PropsExplicacaoQuinta) {
  return (
    <>
      {props.explElevacaoFrontal && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Elevação Frontal</p>
            <button
              className="close-explication"
              onClick={() => props.setElevacaoFrontal(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explRemadaAlta && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Remada alta</p>
            <button
              className="close-explication"
              onClick={() => props.setRemadaAlta(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explElevacaoLateral && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Elevação Lateral</p>
            <button
              className="close-explication"
              onClick={() => props.setElevacaoLateral(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explDesenvolvimentoHalter && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Desenvolvimento de ombro com Halter</p>
            <button
              className="close-explication"
              onClick={() => props.setDesenvolvimentoHalter(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ExplicacaoQuinta;
