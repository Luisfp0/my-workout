import "./explicacao.css";

interface ExplicacaoProps {
  title: string;
  onClose: () => void;
  texts: string[];
  errors?: { title: string; description: string }[];
  removeWeight?: () => void;
  addWeight?: () => void;
  weight?: number;
  imageJpg?: any;
}

function Explicacao(props: ExplicacaoProps) {
  return (
    <div className="explication">
      <div className="header-explication">
        <p className="tittle-explication">{props.title}</p>
        <div className="close-box">
          <button className="close-explication" onClick={props.onClose}>
            X
          </button>
        </div>
      </div>
      <div className="body-explanation">
        <div className="texts">
          {props.texts.map((text: any, index: any) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <div className="image-container">
          <img
            className="image-muscle"
            src={props.imageJpg}
            alt={props.title}
          />
        </div>
      </div>
      <div className="footer-container">
        {props.errors && (
          <div className="errors">
            <div>
              <p>Erros comuns</p>
            </div>
            {props.errors.map((error: any, index: any) => (
              <div key={index}>
                <p className="tittle-error">{error.title}</p>
                <p className="description-error">{error.description}</p>
              </div>
            ))}
          </div>
        )}
        {props.addWeight && (
          <div className="container-weight">
            <p>Peso que consegue pegar</p>
            <div className="weight">
              <button onClick={props.removeWeight}>-</button>
              <p>{props.weight} KG</p>
              <button onClick={props.addWeight}>+</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Explicacao;
