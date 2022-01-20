import CarrelagePage from 'Pages/CarrelagePage';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'style.css';

function App() {
  const [currUrl, setCurrUrl] = useState('');
  const [urlParams, setUrlParams] = useState('');

  useEffect(() => {
    setCurrUrl(window.location.toString());
    setUrlParams(currUrl.split('/'));
    console.log(urlParams[3]);
  }, [currUrl]);

  return (
    <>
      <Routes>
        <Route path="/carrelage" element={<CarrelagePage />} />
      </Routes>
    </>
  );
}

export default App;
