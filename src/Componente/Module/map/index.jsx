import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import './style.css';

export default function MapLeaflet() {
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
            <Marker position={[50.629, 2.987]} />
          </MapContainer>
        </div>
      </div>
    </>
  );
}
