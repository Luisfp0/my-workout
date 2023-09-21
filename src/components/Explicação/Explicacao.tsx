import explMuscleBarraFixa from '../../../public/expl-barra-fixa.webp'
import './explicacao.css'


function Explicacao(props: any) {
  console.log(props)
  return (
    <div className="explication">
      <div className="header-explication">
        <p className="tittle-explication">{props.title}</p>
        <button className="close-explication" onClick={props.onClose}>
          X
        </button>
      </div>
      <div className="body-explanation">
        <div className="texts">
          {props.texts.map((text:any, index:any) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        <div className="image-container">
          <img className="image-muscle" src={explMuscleBarraFixa} alt={props.title} />
        </div>
      </div>
      <div className="footer-container">
        <div className="errors">
          <div>
            <p>Erros comuns</p>
          </div>
          {props.errors.map((error:any, index:any) => (
            <div key={index}>
              <p className="tittle-error">{error.title}</p>
              <p className="description-error">{error.description}</p>
            </div>
          ))}
        </div>
        <div className="weight">
          <div>
            <p>Peso que consegue pegar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explicacao;