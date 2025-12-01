export default function Architecture() {
  return (
    <section id="architecture" className="px-6 py-24 bg-graphite/50 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold">Fuel-Native Architecture</h2>
        <div className="grid lg:grid-cols-4 gap-6 text-sm">
          <div className="p-5 rounded-xl bg-surface/70 border border-zinc-800 space-y-2">
            <h3 className="text-fuel-400 font-semibold">AI Engine</h3>
            <p className="text-text-secondary">Prompt → Sway translator fine-tuned for UTXO safety & parallel branch generation.</p>
          </div>
          <div className="p-5 rounded-xl bg-surface/70 border border-zinc-800 space-y-2">
            <h3 className="text-fuel-400 font-semibold">FuelVM Layer</h3>
            <p className="text-text-secondary">Optimized Sway contracts leverage native assets, spending conditions & low-latency execution.</p>
          </div>
          <div className="p-5 rounded-xl bg-surface/70 border border-zinc-800 space-y-2">
            <h3 className="text-fuel-400 font-semibold">Parallel Simulator</h3>
            <p className="text-text-secondary">Determines non-conflicting UTXO sets before deployment; prevents contention.</p>
          </div>
          <div className="p-5 rounded-xl bg-surface/70 border border-zinc-800 space-y-2">
            <h3 className="text-fuel-400 font-semibold">Monitoring Core</h3>
            <p className="text-text-secondary">Real-time metrics: TPS, branch utilization, latency, profitability, error traces.</p>
          </div>
        </div>
        <div className="rounded-2xl bg-surface/60 border border-zinc-800 p-8">
          <h3 className="font-semibold mb-4 fuel-gradient-text text-2xl">Execution Differentiators</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-text-secondary text-sm list-disc list-inside">
            <li>UTXO asset-centric performance vs account-based bottlenecks</li>
            <li>Deterministic parallel branch orchestration</li>
            <li>Low-fee micro-strategy viability (sub-cent economics)</li>
            <li>Intent-driven primitives with spending conditions</li>
            <li>Instant iteration loops (testnet → mainnet parity)</li>
            <li>Static AI validation guards (loop bounds / safe patterns)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
