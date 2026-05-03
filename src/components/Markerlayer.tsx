import { Marker, Popup } from "react-leaflet";
import type { Marker as MarkerData } from "../services/MarkerService";

interface MarkerLayerProps {
  markers: MarkerData[];
}

export const MarkerLayer = ({ markers }: MarkerLayerProps) => {
  return (
    <>
      {markers.map((marker) => (
        <Marker key={marker.id} position={[marker.lat, marker.lng]}>
          <Popup>
            <div className="min-w-[180px]">
              <p className="m-0 text-sm font-semibold text-slate-950">
                {marker.label || "Marcador"}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {marker.lat.toFixed(4)}, {marker.lng.toFixed(4)}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};