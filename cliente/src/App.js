import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contenido from './componentes/Contenido';

function App() {
  return (
    <div className="App">

<BrowserRouter>
        <Routes>
          <Route path='/' element={<Contenido/>} />        

        </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
