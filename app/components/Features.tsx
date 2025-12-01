export default function Features() {
  const features = [
    { title: "Natural Language ↔ Sway", desc: "Prompt-driven contract generation removes engineering gatekeeping." },
    { title: "Visual Logic Editing", desc: "Drag-and-drop parallel branches & thresholds." },
    { title: "Parallel Signal Engine", desc: "RSI / MACD / volume processed concurrently to reduce reaction latency." },
    { title: "One-Click Deploy", desc: "Testnet to mainnet promotion with integrity checks." },
    { title: "Real-Time Metrics", desc: "Live P&L, branch hit ratio, execution latency, error stream." },
    { title: "Versioned Strategies", desc: "Safe rollback & iterative refinement without downtime." },
    { title: "Intent Primitives", desc: "Spending conditions + asset constraints for deterministic outcomes." },
    { title: "On-Chain Data Hooks", desc: "EigenDA feeds & native Fuel queries (future expansion)." },
  ];
  return (
    <section id="features" className="px-6 py-24 bg-void">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">MVP Feature Set</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(f => (
            <div key={f.title} className="p-5 rounded-xl bg-surface/70 border border-zinc-800 hover:border-fuel-500 transition-colors">
              <h3 className="text-sm font-semibold mb-2 text-fuel-400">{f.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
