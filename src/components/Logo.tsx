export function Logo() {
  return (
    <div className="logo-fixed">
      <svg width="22" height="22" viewBox="0 0 24 24" className="text-cyan-300" aria-hidden="true">
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          d="M3 8V4h6M21 8V4h-6M3 16v4h6M21 16v4h-6"
        />
        <circle cx="12" cy="12" r="2.1" fill="#4DEEEA" />
      </svg>
      <span className="font-display font-semibold text-base">
        RA<span className="grad-text">labs</span>
      </span>
    </div>
  );
}
