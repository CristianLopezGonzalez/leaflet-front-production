import { useNavigate } from "react-router-dom";
import authService from "../services/AuthServices";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authService.logout();
    } finally {
      navigate("/login", { replace: true });
    }
  };

  return (
    <header className="absolute left-4 right-4 top-4 z-[1000] flex flex-col gap-3 rounded-3xl border border-white/70 bg-white/85 px-4 py-4 shadow-[0_18px_48px_rgba(15,23,42,0.14)] backdrop-blur-xl md:left-4 md:right-auto md:w-[460px] md:flex-row md:items-center md:justify-between">
      <div>
        <p className="m-0 text-xs font-extrabold uppercase tracking-[0.18em] text-slate-900">Leaflet front</p>
        <p className="m-0 mt-1 text-sm font-medium text-slate-500">Mapa y marcadores</p>
      </div>

      <button
        type="button"
        className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-950/20 active:translate-y-0"
        onClick={handleLogout}
      >
        Cerrar sesión
      </button>
    </header>
  );
}