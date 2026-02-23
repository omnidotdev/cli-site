/**
 * Animated background.
 */
const Background = () => (
  <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    {/* Gradient orbs */}
    <div className="absolute -top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
    <div className="absolute -right-1/4 -bottom-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />

    {/* Grid overlay */}
    <div
      className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  </div>
);

export default Background;
