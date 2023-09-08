import { useState } from 'react'
import './dayInfo.css'
import barraFixa from '../../../public/costas-barra-fixa-pegada-aberta.webp'
import remadaMaquina from '../../../public/remada-na-maquina-de-cabos-sentado-e-com-pegada-aberta.webp'
import cavalinho from '../../../public/remada-em-pe-com-barra-T.webp'
import remadaSerrote from '../../../public/remada-unilateral-com-halter-serrote.webp'
import roscaUnilateral from '../../../public/rosca-concentrada-unilateral-com-halter.webp'
import bicepsInclinado from '../../../public/rosca-biceps-com-halteres-no-banco-inclinado.webp'
import roscaBarraW from '../../../public/rosca-biceps-no-banco-scott-com-barra-W.webp'
import martelo from '../../../public/rosca-biceps-martelo-com-halteres.webp'
import panturrilhaLeg from '../../../public/Panturrilha-no-leg-press.webp'
import panturrilhaAparelho from '../../../public/Panturrilha-em-pe-no-aparelho.webp'
import panturrilhaEscada from '../../../public/Elevacao-de-panturrilha-em-pe-escada.webp'
import crucifixo from '../../../public/crucifixo.webp'
import supinoRetoHalter from '../../../public/supino-reto-com-halteres.webp'
import supinoInclinadoHalter from '../../../public/supino-inclinado-com-halteres.webp'
import voadorInclinado from '../../../public/voador-cabo-banco-inclinado.webp'
import tricepsPulley from '../../../public/triceps-puxada-no-pulley.gif'
import tricepsPulleyCabeca from '../../../public/triceps-no-pulley-atras-ca-cabeca.webp'
import extencaoDeitado from '../../../public/extencao-triceps-deitado.webp'
import tricepsCoice from '../../../public/triceps-coice.gif'

 


interface TypeProps {
  onPressSegunda: () => void
  onPressTerca: () => void
  onPressQuarta: () => void
  onPressQuinta: () => void
  onPressSexta: () => void
  onPressSabado: () => void
  segunda: boolean
  terca: boolean
  quarta: boolean
  quinta: boolean
  sexta: boolean
  sabado: boolean
}

function DayInfo(props: TypeProps) {
  const [page, setPage] = useState(1);

  function closeSegunda() {
    props.onPressSegunda()
    setPage(1)
  }
  function closeTerca() {
    props.onPressTerca()
    setPage(1)
  }
  function closeQuarta() {
    props.onPressQuarta()
    setPage(1)
  }
  function closeQuinta() {
    props.onPressQuinta()
    setPage(1)
  }
  function closeSexta() {
    props.onPressSexta()
    setPage(1)
  }
  function closeSabado() {
    props.onPressSabado()
    setPage(1)
  }
  
  function nextExercise() {
    if(page < 3)setPage(page + 1)
  }
  function previousExercise() {
    if(page > 1) setPage(page - 1)
  }

  return (
    <>
      {props.segunda &&
        <div className='containerWorkDay'>
          <div className='headerWorkDay'>
            <p className='marginHeader'>Segunda</p>
            <p>Costas - Biceps - Panturrilha</p>
            <button className='btnClose' onClick={closeSegunda}>X</button>
          </div>
          <div className='container-exercises'>
            {page === 1 &&
            <div className='title-exercises'>
            <p style={{height: 40}}>Costas</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>Barra fixa com pegada aberta</p>
                  <img src={barraFixa} className='img-exercices'></img>
                </div>
                <div className='blocks'>
                  <p>Remada na máquina de cabos</p>
                  <img src={remadaMaquina} className='img-exercices'></img>
                </div>
              </div>
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
              </div>
              <div>
                <div className='blocks'>
                  <p>Remada em pé com a barra T (remada cavalinho)</p>
                  <img src={cavalinho} className='img-exercices'></img>
                </div>
                <div className='blocks'>
                  <p>Remada unilateral com halter (remada serrote)</p>
                  <img src={remadaSerrote} className='img-exercices'></img>
                </div>
              </div>
            </div>
          </div>}
          {page === 2 &&
            <div className='title-exercises'>
            <p style={{height: 40}}>Biceps</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>Rosca bíceps concentrada unilateral com halter</p>
                  <img src={roscaUnilateral} className='img-exercices'></img>
                </div>
                <div className='blocks'>
                  <p>Rosca bíceps com halteres no banco inclinado</p>
                  <img src={bicepsInclinado} className='img-exercices'></img>
                </div>
              </div>
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
              </div>
              <div className='prev' onClick={previousExercise}>
                <img src='../../../public/arrow.png' alt='Seta voltar'></img>
                </div>
              <div>
                <div className='blocks'>
                  <p>Rosca bíceps apoiado no banco Scott e com a barra EZ</p>
                  <img src={roscaBarraW} className='img-exercices'></img>
                </div>
                <div className='blocks'>
                  <p>Rosca bíceps martelo em pé com halteres</p>
                  <img src={martelo} className='img-exercices'></img>
                </div>
              </div>
            </div>
          </div>}
          {page === 3 && 
            <div className='title-exercises'>
            <p style={{height: 40}}>Panturrilha</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>Elevação de panturrilha em pé no aparelho</p>
                  <img src={panturrilhaAparelho} className='img-exercices'></img>
                </div>
                <div className='blocks'>
                  <p>Elevação de panturrilha no leg press</p>
                  <img src={panturrilhaLeg} className='img-exercices'></img>
                </div>
              </div>
              <div className='prev' onClick={previousExercise}>
                <img src='../../../public/arrow.png' alt='Seta voltar'></img>
                </div>
              <div>
                <div className='blocks'>
                  <p>Elevação de panturrilha em pé na escada</p>
                  <img src={panturrilhaEscada} className='img-exercices'></img>
                </div>
              </div>
            </div>
          </div>}
          </div>
        </div>}
      {props.terca &&
        <div className='containerWorkDay'>
          <div className='headerWorkDay'>
            <p className='marginHeader'>Terça</p>
            <p>Peito - Triceps - Abdomem</p>
            <button className='btnClose' onClick={closeTerca}>X</button>
          </div>
          <div className='container-exercises'>
            {page === 1 &&
            <div className='title-exercises'>
            <p style={{height: 40}}>Peito</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>Supino reto com halteres</p>
                  <img src={supinoRetoHalter} className='img-exercices'></img>
                </div>
                <div className='blocks'>
                  <p>Supino inclinado com halteres</p>
                  <img src={supinoInclinadoHalter} className='img-exercices'></img>
                </div>
              </div>
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
              </div>
              <div>
                <div className='blocks'>
                  <p>Crucifixo</p>
                  <img src={crucifixo} className='img-exercices'></img>
                </div>
                <div className='blocks'>
                  <p>Voador no cabo com banco inclinado</p>
                  <img src={voadorInclinado} className='img-exercices'></img>
                </div>
              </div>
            </div>
          </div>}
          {page === 2 &&
            <div className='title-exercises'>
            <p style={{height: 40}}>Triceps</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>Tríceps na polia alta com barra reta</p>
                  <img src={tricepsPulley} className='img-exercices'></img>
                </div>
                <div className='blocks'>
                  <p>Extensão de tríceps no cabo sob a cabeça com corda</p>
                  <img src={tricepsPulleyCabeca} className='img-exercices'></img>
                </div>
              </div>
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
              </div>
              <div className='prev' onClick={previousExercise}>
                <img src='../../../public/arrow.png' alt='Seta voltar'></img>
                </div>
              <div>
                <div className='blocks'>
                  <p>Extensão de tríceps deitado</p>
                  <img src={extencaoDeitado} className='img-exercices'></img>
                </div>
                <div className='blocks'>
                  <p>Triceps Coice</p>
                  <img src={tricepsCoice} className='img-exercices'></img>
                </div>
              </div>
            </div>
          </div>}
          {page === 3 &&
            <div className='title-exercises'>
            <p style={{height: 40}}>Abdomem</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>Abdomem1</p>
                </div>
                <div className='blocks'>
                  <p>Abdomem2</p>
                </div>
              </div>
              <div className='prev' onClick={previousExercise}>
                <img src='../../../public/arrow.png' alt='Seta voltar'></img>
                </div>
              <div>
                <div className='blocks'>
                  <p>Abdomem3</p>
                </div>
                <div className='blocks'>
                  <p>Abdomem4</p>
                </div>
              </div>
            </div>
          </div>}
          </div>
        </div>}
      {props.quarta &&
        <div className='containerWorkDay'>
          <div className='headerWorkDay'>
            <p className='marginHeader'>Quarta</p>
            <p>Coxa - Gluteo - Panturrilha</p>
            <button className='btnClose' onClick={closeQuarta}>X</button>
          </div>
          <div className='container-exercises'>
            {page === 1 &&
            <div className='title-exercises'>
            <p style={{height: 40}}>Coxa</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>Coxa1</p>
                </div>
                <div className='blocks'>
                  <p>Coxa2</p>
                </div>
              </div>
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
              </div>
              <div>
                <div className='blocks'>
                  <p>Coxa3</p>
                </div>
                <div className='blocks'>
                  <p>Coxa4</p>
                </div>
              </div>
            </div>
          </div>}
          {page === 2 &&
            <div className='title-exercises'>
            <p style={{height: 40}}>Gluteo</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>Gluteo1</p>
                </div>
                <div className='blocks'>
                  <p>Gluteo2</p>
                </div>
              </div>
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
              </div>
              <div className='prev' onClick={previousExercise}>
                <img src='../../../public/arrow.png' alt='Seta voltar'></img>
                </div>
              <div>
                <div className='blocks'>
                  <p>Gluteo3</p>
                </div>
                <div className='blocks'>
                  <p>Gluteo4</p>
                </div>
              </div>
            </div>
          </div>}
          {page === 3 &&
            <div className='title-exercises'>
            <p style={{height: 40}}>Panturrilha</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>Panturrilha1</p>
                </div>
                <div className='blocks'>
                  <p>Panturrilha2</p>
                </div>
              </div>
              <div className='prev' onClick={previousExercise}>
                <img src='../../../public/arrow.png' alt='Seta voltar'></img>
                </div>
              <div>
                <div className='blocks'>
                  <p>Panturrilha3</p>
                </div>
                <div className='blocks'>
                  <p>Panturrilha4</p>
                </div>
              </div>
            </div>
          </div>}
          </div>
        </div>}
        {props.quinta &&
        <div className='containerWorkDay'>
          <div className='headerWorkDay'>
            <p className='marginHeader'>Quinta</p>
            <p>Ombro - Antebraço - Abdomem</p>
            <button className='btnClose' onClick={closeQuinta}>X</button>
          </div>
          <div className='container-exercises'>
            {page === 1 &&
            <div className='title-exercises'>
            <p style={{height: 40}}>Ombro</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>Ombro1</p>
                </div>
                <div className='blocks'>
                  <p>Ombro2</p>
                </div>
              </div>
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
              </div>
              <div>
                <div className='blocks'>
                  <p>Ombro3</p>
                </div>
                <div className='blocks'>
                  <p>Ombro4</p>
                </div>
              </div>
            </div>
          </div>}
          {page === 2 &&
            <div className='title-exercises'>
            <p style={{height: 40}}>Antebraço</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>Antebraço1</p>
                </div>
                <div className='blocks'>
                  <p>Antebraço2</p>
                </div>
              </div>
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
              </div>
              <div className='prev' onClick={previousExercise}>
                <img src='../../../public/arrow.png' alt='Seta voltar'></img>
                </div>
              <div>
                <div className='blocks'>
                  <p>Antebraço3</p>
                </div>
                <div className='blocks'>
                  <p>Antebraço4</p>
                </div>
              </div>
            </div>
          </div>}
          {page === 3 &&
            <div className='title-exercises'>
            <p style={{height: 40}}>Abdomem</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>Abdomem1</p>
                </div>
                <div className='blocks'>
                  <p>Abdomem2</p>
                </div>
              </div>
              <div className='prev' onClick={previousExercise}>
                <img src='../../../public/arrow.png' alt='Seta voltar'></img>
                </div>
              <div>
                <div className='blocks'>
                  <p>Abdomem3</p>
                </div>
                <div className='blocks'>
                  <p>Abdomem4</p>
                </div>
              </div>
            </div>
          </div>}
          </div>
        </div>}
        {props.sexta &&
        <div className='containerWorkDay'>
          <div className='headerWorkDay'>
            <p className='marginHeader'>Sexta</p>
            <p>Peito - Triceps - n sei</p>
            <button className='btnClose' onClick={closeSexta}>X</button>
          </div>
          <div className='container-exercises'>
            {page === 1 &&
            <div className='title-exercises'>
            <p style={{height: 40}}>Peito</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>Peito1</p>
                </div>
                <div className='blocks'>
                  <p>Peito2</p>
                </div>
              </div>
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
              </div>
              <div>
                <div className='blocks'>
                  <p>Peito3</p>
                </div>
                <div className='blocks'>
                  <p>Peito4</p>
                </div>
              </div>
            </div>
          </div>}
          {page === 2 &&
            <div className='title-exercises'>
            <p style={{height: 40}}>Triceps</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>Triceps1</p>
                </div>
                <div className='blocks'>
                  <p>Triceps2</p>
                </div>
              </div>
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
              </div>
              <div className='prev' onClick={previousExercise}>
                <img src='../../../public/arrow.png' alt='Seta voltar'></img>
                </div>
              <div>
                <div className='blocks'>
                  <p>Triceps3</p>
                </div>
                <div className='blocks'>
                  <p>Triceps4</p>
                </div>
              </div>
            </div>
          </div>}
          {page === 3 &&
            <div className='title-exercises'>
            <p style={{height: 40}}>n sei</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>n sei</p>
                </div>
                <div className='blocks'>
                  <p>n sei</p>
                </div>
              </div>
              <div className='prev' onClick={previousExercise}>
                <img src='../../../public/arrow.png' alt='Seta voltar'></img>
                </div>
              <div>
                <div className='blocks'>
                  <p>n sei</p>
                </div>
                <div className='blocks'>
                  <p>n sei</p>
                </div>
              </div>
            </div>
          </div>}
          </div>
        </div>}
        {props.sabado &&
        <div className='containerWorkDay'>
          <div className='headerWorkDay'>
            <p className='marginHeader'>Sabado</p>
            <p>Coxa - Gluteo - Panturrilha</p>
            <button className='btnClose' onClick={closeSabado}>X</button>
          </div>
          <div className='container-exercises'>
            {page === 1 &&
            <div className='title-exercises'>
            <p style={{height: 40}}>Coxa</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>Coxa1</p>
                </div>
                <div className='blocks'>
                  <p>Coxa2</p>
                </div>
              </div>
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
              </div>
              <div>
                <div className='blocks'>
                  <p>Coxa3</p>
                </div>
                <div className='blocks'>
                  <p>Coxa4</p>
                </div>
              </div>
            </div>
          </div>}
          {page === 2 &&
            <div className='title-exercises'>
            <p style={{height: 40}}>Gluteo</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>Gluteo1</p>
                </div>
                <div className='blocks'>
                  <p>Gluteo2</p>
                </div>
              </div>
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
              </div>
              <div className='prev' onClick={previousExercise}>
                <img src='../../../public/arrow.png' alt='Seta voltar'></img>
                </div>
              <div>
                <div className='blocks'>
                  <p>Gluteo3</p>
                </div>
                <div className='blocks'>
                  <p>Gluteo4</p>
                </div>
              </div>
            </div>
          </div>}
          {page === 3 &&
            <div className='title-exercises'>
            <p style={{height: 40}}>Panturrilha</p>
            <div className='exercises'>
              <div>
                <div className='blocks'>
                  <p>Panturrilha1</p>
                </div>
                <div className='blocks'>
                  <p>Panturrilha2</p>
                </div>
              </div>
              <div className='prev' onClick={previousExercise}>
                <img src='../../../public/arrow.png' alt='Seta voltar'></img>
                </div>
              <div>
                <div className='blocks'>
                  <p>Panturrilha3</p>
                </div>
                <div className='blocks'>
                  <p>Panturrilha4</p>
                </div>
              </div>
            </div>
          </div>}
          </div>
        </div>}
    </>
  )
}

export default DayInfo