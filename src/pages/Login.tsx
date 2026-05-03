import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/AuthServices';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      navigate('/map', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await authService.login({ email, password });
      navigate('/map', { replace: true });
    } catch (error) {
      console.error(error);
      setError('Email o contraseña incorrectos');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(30,41,59,0.18),_transparent_32%),linear-gradient(135deg,_#e2e8f0_0%,_#f8fafc_44%,_#eef2ff_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black_55%,transparent_100%)]" />

      <div className="relative z-10 grid min-h-[calc(100vh-4rem)] place-items-center">
        <div className="w-full max-w-md rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:p-8">
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/20">
              <span className="text-lg font-bold">L</span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Iniciar sesión
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              user: test@gmail.com | pass: test123
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-slate-500 focus:bg-white focus:ring-4 focus:ring-slate-200 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
                placeholder="tu@email.com"
                required
                disabled={isLoading}
                autoComplete="email"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-slate-500 focus:bg-white focus:ring-4 focus:ring-slate-200 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
                placeholder="••••••••"
                required
                disabled={isLoading}
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-600 text-[11px] font-bold leading-none text-white">
                  !
                </span>
                <p className="m-0">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-950 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-950/25 focus:outline-none focus:ring-4 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Cargando...
                </>
              ) : (
                'Iniciar sesión'
              )}
            </button>
          </form>

          <div className="mt-7 border-t border-slate-200/80 pt-5 text-center text-sm leading-6 text-slate-500">
            Usa las credenciales de prueba mostradas arriba para entrar.
          </div>
        </div>
      </div>
    </div>
  );
}