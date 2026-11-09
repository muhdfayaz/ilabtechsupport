export function Marquee({
  words,
  className = "",
  duration = 28,
  reverse = false,
}: {
  words: readonly string[];
  className?: string;
  duration?: number;
  reverse?: boolean;
}) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {words.map((w) => (
        <li key={w} className="flex items-center whitespace-nowrap">
          <span className="px-6 lg:px-10">{w}</span>
          <span aria-hidden className="text-[0.5em]">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`marquee overflow-hidden ${className}`}>
      <div
        className="animate-marquee flex w-max"
        style={{ ["--marquee-duration" as string]: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
