import './App.css';
 
import Four from './components/Four/Four';
import Home from './components/Home/Home';
import Second from './components/Second/Second';
import Third from './components/Third/Third';

function App() {
  return (
    <div className="App">
     <Home/>
     <Second/>
     <Third/>
     <Four/>
    
     <div class="noise"></div>
     <div class="container"></div>
    </div>
  );
}

export default App;
