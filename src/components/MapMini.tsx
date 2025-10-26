// ---- MapMini.tsx ----
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

interface MapMiniProps {
  lat: number;
  lng: number;
  label: string;
}

const MapController = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap();
  
  useEffect(() => {
    if (map) {
      map.setView([lat, lng], 15);
      // Force map to recalculate its size
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    }
  }, [map, lat, lng]);
  
  return null;
};

const MapMini = ({ lat, lng, label }: MapMiniProps) => {
  const mapRef = useRef(null);

  return (
    <div style={{ width: '100%', height: '140px', minHeight: '140px', borderRadius: '12px', overflow: 'hidden' }}>
      <MapContainer
        key={`${lat}-${lng}`} // Force re-render when coordinates change
        ref={mapRef}
        style={{ height: "140px", width: "100%", minHeight: '140px' }}>
        <MapController lat={lat} lng={lng} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>{label}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapMini;