import CarrelagePage from 'Pages/CarrelagePage';
import 'style.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/carrelage" element={<CarrelagePage />} />
      </Routes>
    </>
  );
}

export default App;
