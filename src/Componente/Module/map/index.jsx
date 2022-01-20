import { MapContainer, TileLayer } from 'react-leaflet';
import LocateUser from '../../LocateUser';
import './style.css';

const data = require('../../../data.json');

const { artisans } = data;
export default function MapLeaflet() {
  console.log(artisans);
  return (
    <>
      <div className="container">
        <div className="flex">
          <h3>Besoin d&apos;un Pro ?</h3>
          <p>Localise toi pour trouver les plus proche.</p>
          <MapContainer center={[50.629, 2.987]} zoom={15} scrollWheelZoom>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocateUser />
          </MapContainer>
        </div>
      </div>
    </>
  );
}
