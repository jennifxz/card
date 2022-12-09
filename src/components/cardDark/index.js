import './index.scss'

export default function CardEspiralUsuarioDark(props) {
  return (
    <main className='card-espiral-usuario-dark' >
      <div className='espiral-icones'>
        <h2>Espiral {props.espiral}</h2>
        <div className={props.classe}>
          <img className='fire' src='/assets/images/fire.svg' alt='' />
          <img className='tool' src='/assets/images/tool.svg'  alt='' />
          <img className='check' src='/assets/images/check.svg' alt='' />
          <img className='lock' src='/assets/images/lock.svg'   alt='' />
        </div>
      </div>
      <div className='espiral-infos'>
        <p>{props.infos}</p>
      </div>
      <div className='espiral-acesso'>
        <p>Acessar</p>
      </div>

    </main>
  )
}