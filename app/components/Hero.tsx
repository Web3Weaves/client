export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden flex flex-col items-center justify-center px-6 pt-28 pb-24 text-center bg-[radial-gradient(circle_at_20%_20%,rgba(255,106,0,0.35),transparent_70%)]">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="fuel-gradient-text">Natural Language</span> → <span className="text-fuel-500">Sway</span> → Live Parallel Web3 Apps
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
          Web3Weave turns market intent into high-performance Fuel dApps. Describe a trading bot, analyzer, or portfolio tracker in plain language—deploy optimized Sway contracts in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="bg-fuel-500 hover:bg-fuel-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-fuel-500/30 transition-all">
            Launch On Fuel
          </a>
          <a href="#how" className="border border-fuel-500/50 hover:border-fuel-500 text-fuel-500 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm bg-fuel-500/10 transition-all">
            See The Flow
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 text-sm text-text-secondary">
          <div className="glow-border rounded-lg p-4 bg-surface/60">600+ TPS</div>
          <div className="glow-border rounded-lg p-4 bg-surface/60">Sub-cent Fees</div>
          <div className="glow-border rounded-lg p-4 bg-surface/60">Parallel Execution</div>
          <div className="glow-border rounded-lg p-4 bg-surface/60">UTXO-Native Assets</div>
        </div>
      </div>
    </section>
  );
}
