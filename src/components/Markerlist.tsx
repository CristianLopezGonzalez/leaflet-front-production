import { useMarkerSearch } from "../hooks/Usemarkersearch";
import type { Marker } from "../services/MarkerService";

interface MarkerListProps {
  markers: Marker[];
  onRemove: (id: string) => Promise<void>;
  isLoading?: boolean;
}

export const MarkerList = ({
  markers,
  onRemove,
  isLoading,
}: MarkerListProps) => {
  const { searchTerm, setSearchTerm, filteredMarkers } =
    useMarkerSearch(markers);

  const handleDelete = async (id: string) => {
    try {
      await onRemove(id);
    } catch (error) {
      console.error("Error al eliminar marcador:", error);
    }
  };

  return (
    <div className="absolute right-4 top-1/2 z-[400] flex max-h-[72vh] w-[min(360px,calc(100vw-2rem))] -translate-y-1/2 flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/85 shadow-[0_22px_54px_rgba(15,23,42,0.14)] backdrop-blur-xl md:w-[min(320px,calc(100vw-2rem))] lg:w-[min(360px,calc(100vw-2rem))] max-md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:top-auto max-md:translate-y-0 max-md:rounded-t-3xl max-md:rounded-b-none max-md:max-h-[50vh]">
      <h3 className="m-0 border-b border-slate-200/80 px-4 py-4 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-900 md:px-5">
        Marcadores ({markers.length})
      </h3>

      <div className="relative border-b border-slate-200/80 bg-slate-50/90 px-4 py-4 md:px-5">
        <span className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 text-sm text-slate-400 md:left-9">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Buscar marcador..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-10 pr-12 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-4 focus:ring-slate-200 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
          disabled={isLoading || markers.length === 0}
        />
        {searchTerm && (
          <button
            type="button"
            className="absolute right-7 top-1/2 -translate-y-1/2 rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-300 hover:text-slate-950"
            onClick={() => setSearchTerm("")}
            title="Limpiar búsqueda"
            aria-label="Limpiar búsqueda"
          >
            Limpiar
          </button>
        )}
      </div>

      {markers.length === 0 ? (
        <p className="m-0 flex flex-1 items-center justify-center px-4 py-8 text-center text-sm leading-6 text-slate-500 md:px-5">
          Haz clic en el mapa para añadir marcadores
        </p>
      ) : filteredMarkers.length === 0 ? (
        <p className="m-0 flex flex-1 items-center justify-center px-4 py-8 text-center text-sm leading-6 text-slate-500 md:px-5">
          No hay marcadores que coincidan con "{searchTerm}"
        </p>
      ) : (
        <ul className="flex-1 overflow-y-auto overflow-x-hidden">
          {filteredMarkers.map((marker) => (
            <li
              key={marker.id}
              className="flex items-center justify-between gap-3 border-b border-slate-200/80 px-4 py-3 transition hover:bg-slate-50/90 active:bg-slate-100 md:px-5"
            >
              <div className="min-w-0 flex-1">
                <p className="m-0 truncate text-sm font-semibold text-slate-900">
                  {marker.label || "Marcador"}
                </p>
                <p className="m-0 mt-1 text-[11px] leading-4 font-medium text-slate-500">
                  {marker.latitude.toFixed(4)}, {marker.longitude.toFixed(4)}
                </p>
              </div>
              <button
                type="button"
                className="inline-flex h-9 shrink-0 items-center justify-center rounded-2xl bg-slate-950 px-3 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-950/20 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => handleDelete(marker.id)}
                disabled={isLoading}
                title="Eliminar marcador"
                aria-label={`Eliminar marcador ${marker.label}`}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};