export default function HowItWorks() {
  const steps = [
    { title: "Describe", body: "Enter a natural language prompt: 'Bot that buys ETH/USDC on RSI < 30 with parallel MACD confirmation.'" },
    { title: "Generate", body: "AI produces optimized Sway contracts & visual logic graph ensuring UTXO parallelism." },
    { title: "Simulate", body: "Preview execution branches, resource spend, latency profile, risk checks." },
    { title: "Deploy", body: "One-click deploy to Fuel testnet → mainnet. Assets + trackers initialized." },
    { title: "Monitor", body: "Dashboard streams TPS, P&L, branch hit rate, signal latencies." },
    { title: "Iterate", body: "Refine parameters visually; revalidate & version increment safely." },
  ];
  return (
    <section id="how" className="px-6 py-24 bg-void">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Flow: Intent To Parallel Execution</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="group p-6 rounded-xl bg-surface/70 border border-zinc-800 hover:border-fuel-500 transition-colors">
              <h3 className="font-semibold mb-2 text-fuel-500 group-hover:fuel-gradient-text">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
