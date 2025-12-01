export default function CTA() {
  return (
    <section id="cta" className="px-6 py-28 bg-graphite/70 border-t border-zinc-800 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl font-extrabold fuel-gradient-text">Turn Intent Into Live Parallel Execution</h2>
        <p className="text-lg text-text-secondary">Deploy your first Fuel-native strategy today. Remove latency. Unlock micro-fee viability. Capture asymmetric edge.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="bg-fuel-500 hover:bg-fuel-600 text-white font-semibold px-10 py-4 rounded-xl shadow-lg shadow-fuel-500/40 transition-all">Start Free</a>
          <a href="#investor" className="border border-fuel-500/60 hover:border-fuel-500 text-fuel-500 font-semibold px-10 py-4 rounded-xl bg-fuel-500/10 backdrop-blur-sm transition-all">Investor Deck</a>
        </div>
      </div>
    </section>
  );
}
