import React from 'react';
import './App.css';
import heath from './components/heath.jpg'; 
import image from './components/image.jpg'; 
import sony from './components/sony.jpg'; 

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Моя Любимая девочка Соня</h1>
                <p>
                    Соня, ты — как утро, в котором всегда светит солнце.
                </p>
                <p>
                    Как первый глоток кофе, согревающий до самых кончиков пальцев. Как та песня, которую хочется слушать бесконечно.
                </p>
                <p>
                    Ты смеёшься — и мир становится добрее. Ты берёшь меня за руку — и всё сразу обретает смысл. Даже в самой обычной минуте с тобой есть магия: будто мы в своём собственном фильме, где нет плохой погоды и грустных финалов.
                </p>
                <p>
                    Я бы хотел(а) запомнить каждую твою улыбку, каждую твою смешную гримасу, когда ты рассказываешь истории, каждый взгляд украдкой — и сложить это в огромное «спасибо» за то, что ты просто есть.
                </p>
                <p>
                    Ты — мой любимый человек, мой домашний котёнок, мой компас в этом мире. И я бесконечно благодарен(а) судьбе за наше «случайно»… которое, кажется, было написано где-то среди звёзд. ✨
                </p>
            </header>
            <footer>
              <div className="image-container">
    <img src={sony} alt="Соня" className="small-image" />
    <img src={image} alt="Описание изображения" className="center-image" />
    <img src={heath} alt="Хит" className="small-image" />
</div>

            </footer>
        </div>
    );
}

export default App;
