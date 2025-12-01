export default function Investor() {
  return (
    <section id="investor" className="px-6 py-24 bg-void">
      <div className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold">Strategic & Investor Narrative</h2>
        <div className="grid md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-4 p-6 rounded-xl bg-surface/70 border border-zinc-800">
            <h3 className="text-fuel-400 font-semibold">Market Timing</h3>
            <p className="text-text-secondary">Modular execution, intent-based architectures, and UTXO resurgence converge. Fuel's performance unlocks strategy classes previously uneconomical under EVM fee + latency constraints.</p>
            <p className="text-text-secondary">Web3Weave amplifies this shift by removing build friction—capturing demand from traders & analysts seeking edge tooling at micro-latency.</p>
          </div>
          <div className="space-y-4 p-6 rounded-xl bg-surface/70 border border-zinc-800">
            <h3 className="text-fuel-400 font-semibold">Defensible Moat</h3>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li>Fine-tuned NL→Sway model + static validation layer</li>
              <li>Parallelism simulator & contention avoidance dataset</li>
              <li>Strategy telemetry corpus → optimization loop</li>
              <li>Enterprise onboarding + private branch orchestration</li>
            </ul>
          </div>
        </div>
        <div className="rounded-2xl bg-surface/60 border border-zinc-800 p-8 text-text-secondary text-sm space-y-3">
          <h3 className="fuel-gradient-text text-2xl font-semibold">Expansion Roadmap</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>Testnet MVP adoption & telemetry foundation</li>
            <li>Mainnet optimization + EigenDA data feeds</li>
            <li>Template marketplace + strategy sharing flywheel</li>
            <li>Multi-layer intent routing (Fuel L3 vision)</li>
            <li>AI auto-optimizer targeting 20K TPS strategies</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
