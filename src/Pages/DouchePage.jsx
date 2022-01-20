import MapLeaflet from 'Componente/Module/map';
import douche from '../Componente/asset/douche.png';
import footer from '../Componente/asset/test3.png';

export default function CarrelagePage() {
  return (
    <>
      <div>
        <img src={douche} alt="" />
      </div>
      <MapLeaflet />
      <div>
        <img src={footer} alt="" />
      </div>
    </>
  );
}
