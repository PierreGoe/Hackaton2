import CarrelagePage from 'Pages/CarrelagePage';
import DouchePage from 'Pages/DouchePage';

import 'style.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/carrelage" element={<CarrelagePage />} />
        <Route path="/douche" element={<DouchePage />} />
      </Routes>
    </>
  );
}

export default App;
