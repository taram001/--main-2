import './App.css';
import './style.css';
import logo from './ФОТОЧКИ/лого_круг.png';
function App() {
  return (
    <div className="Header">
      <p>О нас</p>
      <p>Контакты</p>     
      <div className='Logo'>
        <img src={logo} alt='Кофе_сердце' />
        <p className='Name_kafe'>Любовь в ритме кофе</p> 
      </div>
      <p>Меню</p>
      <p>Сезонные предложения</p>
    </div>

  );
}

export default App;
