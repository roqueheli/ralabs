import { forwardRef } from "react";

export const ProgressTrace = forwardRef<HTMLDivElement>(function ProgressTrace(_props, ref) {
  return (
    <div className="trace-track" aria-hidden="true">
      <div ref={ref} className="trace-fill" style={{ height: "0%" }} />
    </div>
  );
});
