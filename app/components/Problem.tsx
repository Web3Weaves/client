export default function Problem() {
  return (
    <section id="problem" className="px-6 py-20 bg-graphite/40 border-t border-zinc-800">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">The Gap: Ideas Die Before Execution</h2>
        <p className="text-lg text-text-secondary max-w-3xl">
          Traders, analysts and product minds know what they want: multi-asset bots, signal dashboards, predictive markets. But translating intent into secure, performant on-chain infrastructure is slow, expensive, and gated by scarce engineering bandwidth.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-surface/70 border border-zinc-800 space-y-3">
            <h3 className="font-semibold text-fuel-400">Speed Limits</h3>
            <p className="text-sm text-text-secondary">EVM congestion, sequential processing, latency ruins edge strategies.</p>
          </div>
          <div className="p-6 rounded-xl bg-surface/70 border border-zinc-800 space-y-3">
            <h3 className="font-semibold text-fuel-400">Translation Friction</h3>
            <p className="text-sm text-text-secondary">Natural language → specs → code → audit → deploy: weeks lost.</p>
          </div>
          <div className="p-6 rounded-xl bg-surface/70 border border-zinc-800 space-y-3">
            <h3 className="font-semibold text-fuel-400">Missed Parallelism</h3>
            <p className="text-sm text-text-secondary">Most infra ignores UTXO advantages & parallel execution pathways.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
