import './App.css';
import './launding_page.css';
import logo from './ФОТОЧКИ/лого_круг.png';
function App()
 {	
  return (
    <div className="Header">
      <p className='TextWithUnderline' >О нас</p>
      <p className='TextWithUnderline'>Контакты</p>     
      <div className='Logo'>
        <img src={logo} alt='Кофе_сердце' />
        <p className='Name_kafe'>Любовь в ритме кофе</p> 
      </div>
      <p className='TextWithUnderline'>Меню</p>
      <p className='TextWithUnderline'>Сезонные предложения</p>
    </div>

  );
}

export default App;
