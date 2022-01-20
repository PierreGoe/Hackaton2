import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { useState } from 'react';
import pinCarreleur from 'Componente/asset/pinCarreleur.png';
import pinPlombier from 'Componente/asset/pinPlombier.png';
import LocateUser from '../../LocateUser';
import './style.css';

const data = require('../../../data.json');

const { artisans } = data;

const Carreleur = new L.Icon({
  iconUrl: pinCarreleur,
  iconSize: [40, 40],
});
const Plombier = new L.Icon({
  iconUrl: pinPlombier,
  iconSize: [40, 40],
});

export default function MapLeaflet() {
  const [artisansData] = useState(artisans);
  return (
    <>
      <div className="container">
        <div className="flex">
          <h3>Besoin d&apos;un Pro ?</h3>
          <p>Localise toi pour trouver les plus proche.</p>

          <MapContainer center={[50.629, 2.987]} zoom={13} scrollWheelZoom>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            ;
            {artisansData.map((artisan) => {
              return (
                <Marker
                  position={[artisan.lat, artisan.long]}
                  icon={artisan.type === 'plombier' ? Plombier : Carreleur}
                >
                  <Popup>
                    <p>
                      Nom: <span>{[artisan.name]}</span>
                    </p>

                    <p>
                      Adresse: <span>{[artisan.address]}</span>
                    </p>
                    <p>
                      Pressionnel: <span>{[artisan.type]}</span>
                    </p>
                  </Popup>
                </Marker>
              );
            })}
            <LocateUser />
          </MapContainer>
        </div>
      </div>
    </>
  );
}
