import { LayersControl, MapContainer, TileLayer } from "react-leaflet";
import { useMarkers } from "../hooks/UseMarkers";
import { useMarkerModal } from "../hooks/Usemarkermodal";
import { MapClickHandler } from "../hooks/Mapclickhandler";
import { MarkerLayer } from "../components/Markerlayer";
import { MarkerList } from "../components/Markerlist";
import { MarkerModal } from "../components/Markermodal";
import Header from "../components/Header";
import "leaflet/dist/leaflet.css";

const { BaseLayer } = LayersControl;

export const MapPage = () => {
  const { markers, addMarker, removeMarker, isLoading, error } = useMarkers();
  const { pendingMarker, markerName, isSaving, openModal, closeModal, setMarkerName, submitMarker } =
    useMarkerModal(markers.length);

  const handleMapClick = (latitude: number, longitude: number) => {
    openModal(latitude, longitude);
  };

  const handleModalSubmit = async () => {
    await submitMarker(async (marker, name) => {
      await addMarker(marker.latitude, marker.longitude, name);
    });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-200 via-slate-50 to-indigo-100">
      <Header />

      <MapContainer
        center={[40.4168, -3.7038]}
        zoom={13}
        className="h-full w-full"
      >
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </BaseLayer>

          <BaseLayer name="Satélite (Esri)">
            <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
          </BaseLayer>
        </LayersControl>

        <MapClickHandler onMapClick={handleMapClick} />
        <MarkerLayer markers={markers} />
      </MapContainer>

      <MarkerList markers={markers} onRemove={removeMarker} isLoading={isLoading} />

      <MarkerModal
        isOpen={!!pendingMarker}
        markerName={markerName}
        isSaving={isSaving}
        onNameChange={setMarkerName}
        onClose={closeModal}
        onSubmit={handleModalSubmit}
      />

      {error && (
        <div className="absolute bottom-4 left-4 right-4 z-[500] max-w-xl rounded-2xl border border-red-200 bg-red-50/95 px-4 py-3 text-sm font-medium text-red-700 shadow-xl shadow-red-900/10 backdrop-blur-sm">
          <p className="m-0 leading-6">{error}</p>
        </div>
      )}
    </div>
  );
};

export default MapPage;