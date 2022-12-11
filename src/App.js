
import './App.scss';
import CardEspiralUsuarioDark from './components/cardDark';

function App() {
  return (
    <div className="pagina-dos-cards">
      <div className='cla'>
      <CardEspiralUsuarioDark espiral='01' classe='aprovadoMaisUm' infos='Aborda conceitos sobre variáveis, tipagem, inferência, conversão e outras coisas.'/>
      <CardEspiralUsuarioDark espiral='02' classe='ajustes' infos='Aborda conceitos sobre variáveis, tipagem, inferência, conversão e outras coisas.'/>
      <CardEspiralUsuarioDark espiral='03' classe='bloqueada' infos='Aborda conceitos sobre variáveis, tipagem, inferência, conversão e outras coisas.'/>
      </div>
      <div className='cla'>
      <CardEspiralUsuarioDark espiral='04' classe='aprovadoMaisUm' infos='Aborda conceitos sobre variáveis, tipagem, inferência, conversão e outras coisas.'/>
      <CardEspiralUsuarioDark espiral='05' classe='ajustes' infos='Aborda conceitos sobre variáveis, tipagem, inferência, conversão e outras coisas.'/>
      <CardEspiralUsuarioDark espiral='06' classe='bloqueada' infos='Aborda conceitos sobre variáveis, tipagem, inferência, conversão e outras coisas.'/>
      </div>
      <div className='cla'>
      <CardEspiralUsuarioDark espiral='07' classe='aprovadoMaisUm' infos='Aborda conceitos sobre variáveis, tipagem, inferência, conversão e outras coisas.'/>
      <CardEspiralUsuarioDark espiral='08' classe='ajustes' infos='Aborda conceitos sobre variáveis, tipagem, inferência, conversão e outras coisas.'/>
      <CardEspiralUsuarioDark espiral='09' classe='bloqueada' infos='Aborda conceitos sobre variáveis, tipagem, inferência, conversão e outras coisas.'/>
      </div>
    </div>
  );
}

export default App;
