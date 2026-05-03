import React from "react";

interface MarkerModalProps {
  isOpen: boolean;
  markerName: string;
  isSaving: boolean;
  onNameChange: (name: string) => void;
  onClose: () => void;
  onSubmit: (event: React.FormEvent) => Promise<void>;
}

export const MarkerModal = ({
  isOpen,
  markerName,
  isSaving,
  onNameChange,
  onClose,
  onSubmit,
}: MarkerModalProps) => {
  if (!isOpen) return null;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onSubmit(event);
  };

  return (
    <div className="fixed inset-0 z-[1500] grid place-items-center bg-slate-950/45 p-4 backdrop-blur-sm" role="presentation" onClick={onClose}>
      <form
        className="w-full max-w-[440px] rounded-[24px] border border-white/80 bg-white/95 p-6 text-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.2)] sm:p-7"
        onSubmit={handleSubmit}
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className="m-0 text-[22px] font-extrabold tracking-tight text-slate-950">Nuevo marcador</h3>
        <p className="mb-5 mt-2 text-sm leading-6 text-slate-500">Escribe un nombre para guardar este punto.</p>

        <label htmlFor="marker-name" className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-600">
          Nombre
        </label>
        <input
          id="marker-name"
          type="text"
          value={markerName}
          onChange={(event) => onNameChange(event.target.value)}
          placeholder="Marcador 1"
          autoComplete="off"
          maxLength={60}
          autoFocus
          disabled={isSaving}
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:bg-white focus:ring-4 focus:ring-slate-200 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
        />

        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-300 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={onClose}
            disabled={isSaving}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-950/20 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSaving}
          >
            {isSaving ? "Guardando..." : "Guardar marcador"}
          </button>
        </div>
      </form>
    </div>
  );
};