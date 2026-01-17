interface ProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
}

export function ProgressRing({
  progress,
  size = 120,
  strokeWidth = 8,
  label,
  sublabel,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="transform -rotate-90"
          width={size}
          height={size}
        >
          {/* Background circle */}
          <circle
            className="text-secondary"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          {/* Progress circle */}
          <circle
            className="text-primary transition-all duration-500 ease-out"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-foreground">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
      {(label || sublabel) && (
        <div className="text-center">
          {label && <p className="text-sm font-medium text-foreground">{label}</p>}
          {sublabel && <p className="text-xs text-muted-foreground">{sublabel}</p>}
        </div>
      )}
    </div>
  );
}
