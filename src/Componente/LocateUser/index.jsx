import { useState, useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';

export default function LocateUser() {
  const [position, setPosition] = useState(null);

  const map = useMap();

  useEffect(() => {
    map.locate().on('locationfound', function (e) {
      setPosition(e.latlng);
      map.setView([e.latlng.lat, e.latlng.lng], 14);
    });
  }, []);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
