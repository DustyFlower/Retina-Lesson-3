import './App.css';
import cat from './assets/images/cat.jpg';
import cat2x from './assets/images/cat@2x.png';
import cat3x from './assets/images/cat@3x.png';

function App() {
    return (
        <div className="App">
            <p>Hello, Retina &#128075;</p>
{/*             <div className={'bg'}></div>*/}
             <img src={cat} srcSet={`${cat2x} 2x, ${cat3x} 3x` } alt="cat"/>

            <picture>
                <source srcSet={` ${cat3x} 3x, ${cat2x} 2x, ${cat}`}/>
                <img src={cat} alt="cat"/>
            </picture>

            <figure>
                <img src={cat} srcSet={`${cat2x} 2x, ${cat3x} 3x`} alt="cat"/>
                <figcaption>Super cat</figcaption>
            </figure>
        </div>
    );
}

export default App;



