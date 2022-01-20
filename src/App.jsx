import CarrelagePage from 'Pages/CarrelagePage';
import DouchePage from 'Pages/DouchePage';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'style.css';

function App() {
  const [currUrl, setCurrUrl] = useState('');

  useEffect(() => {
    setCurrUrl(window.location.href.split('/')[3].toString());
  }, [currUrl]);

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
