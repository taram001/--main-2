import './App.css';
import './style.css';
import logo from './ФОТОЧКИ/лого_круг.png';
function App() {
  return (
    <div className="Header">
      <p>О нас</p>
      <p>Контакты</p>     
      <p>Меню</p>
      <p>Сезонные предложения</p>
      <div className='Logo'>
        <img src={logo} alt='Кофе_сердце' />
      </div>
    </div>

  );
}

export default App;
