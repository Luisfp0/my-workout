import { useState } from 'react'
import './dayInfo.css'

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
    console.log('página',page)
  }
  function previousExercise() {
    if(page > 1) setPage(page - 1)
    console.log('página',page)
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
                  <p>Costas1</p>
                </div>
                <div className='blocks'>
                  <p>Costas2</p>
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
                  <p>Costas3</p>
                </div>
                <div className='blocks'>
                  <p>Costas4</p>
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
                  <p>Biceps1</p>
                </div>
                <div className='blocks'>
                  <p>Biceps2</p>
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
                  <p>Biceps3</p>
                </div>
                <div className='blocks'>
                  <p>Biceps4</p>
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
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
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
                  <p>Peito1</p>
                </div>
                <div className='blocks'>
                  <p>Peito2</p>
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
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
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
              <div className='prev' onClick={previousExercise}>
                <img src='../../../public/arrow.png' alt='Seta voltar'></img>
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
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
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
              <div className='prev' onClick={previousExercise}>
                <img src='../../../public/arrow.png' alt='Seta voltar'></img>
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
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
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
              <div className='prev' onClick={previousExercise}>
                <img src='../../../public/arrow.png' alt='Seta voltar'></img>
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
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
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
              <div className='prev' onClick={previousExercise}>
                <img src='../../../public/arrow.png' alt='Seta voltar'></img>
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
              <div className='next' onClick={nextExercise}>
                <img src='../../../public/arrow.png' alt='Seta avançar'></img>
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