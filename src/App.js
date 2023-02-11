import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
