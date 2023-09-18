interface ExplicacaoQuarta {
  explAducao: boolean;
  setExplAducao: React.Dispatch<React.SetStateAction<boolean>>;
  explAbducaoMaquina: boolean;
  setExplAbducaoMaquina: React.Dispatch<React.SetStateAction<boolean>>;
  explLeg45: boolean;
  setExplLeg45: React.Dispatch<React.SetStateAction<boolean>>;
  explCadeiraExtensora: boolean;
  setExplCadeiraExtensora: React.Dispatch<React.SetStateAction<boolean>>;
  explCadeiraFlexora: boolean;
  setExplCadeiraFlexora: React.Dispatch<React.SetStateAction<boolean>>;
  explAgachamentoRack: boolean;
  setExplAgachamentoRack:React.Dispatch<React.SetStateAction<boolean>>;

  expLevantamentoTerra: boolean;
  setExpLevantamentoTerra:React.Dispatch<React.SetStateAction<boolean>>;

  explElevacaoPelvica: boolean;
  setExplElevacaoPelvica:React.Dispatch<React.SetStateAction<boolean>>;

  explPanturrilhaLeg: boolean;
  setExplPanturrilhaLeg:React.Dispatch<React.SetStateAction<boolean>>;

  explPanturrilhaAparelho: boolean;
  setExplPanturrilhaAparelho:React.Dispatch<React.SetStateAction<boolean>>;

  explPanturrilhaEscada: boolean;
  setExplPanturrilhaEscada:React.Dispatch<React.SetStateAction<boolean>>;
}

function ExplicacaoQuarta(props: ExplicacaoQuarta) {
  return (
    <>
      {props.explAducao && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Adução e Abdução de coxa</p>
            <button
              className="close-explication"
              onClick={() => props.setExplAducao(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explAbducaoMaquina && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Abdução na maquina</p>
            <button
              className="close-explication"
              onClick={() => props.setExplAbducaoMaquina(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explLeg45 && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Leg 45</p>
            <button
              className="close-explication"
              onClick={() => props.setExplLeg45(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explCadeiraExtensora && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Cadeira Extensora</p>
            <button
              className="close-explication"
              onClick={() => props.setExplCadeiraExtensora(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explCadeiraFlexora && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Cadeira Flexora</p>
            <button
              className="close-explication"
              onClick={() => props.setExplCadeiraFlexora(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explAgachamentoRack && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Agachamento no rack</p>
            <button
              className="close-explication"
              onClick={() => props.setExplAgachamentoRack(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.expLevantamentoTerra && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Levantamento terra</p>
            <button
              className="close-explication"
              onClick={() => props.setExpLevantamentoTerra(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explElevacaoPelvica && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Elevação Pelvica</p>
            <button
              className="close-explication"
              onClick={() => props.setExplElevacaoPelvica(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
            {props.explPanturrilhaLeg && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Panturrilha LEG</p>
            <button
              className="close-explication"
              onClick={() => props.setExplPanturrilhaLeg(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
            {props.explPanturrilhaAparelho && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Panturrilha Aparelho</p>
            <button
              className="close-explication"
              onClick={() => props.setExplPanturrilhaAparelho(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
            {props.explPanturrilhaEscada && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Panturrilha Escada</p>
            <button
              className="close-explication"
              onClick={() => props.setExplPanturrilhaEscada(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ExplicacaoQuarta;
