export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 bg-graphite/60 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold">Pricing & Economic Model</h2>
        <p className="text-text-secondary max-w-3xl">Align cost with value events: exploration stays frictionless; monetization begins at mainnet deployment and sustained strategy execution.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-surface/70 border border-zinc-800 flex flex-col">
            <h3 className="text-lg font-semibold mb-2 text-fuel-400">Builder (Free)</h3>
            <ul className="text-sm text-text-secondary space-y-2 flex-1">
              <li>Unlimited prompts & generation</li>
              <li>Testnet deployments</li>
              <li>Basic simulation</li>
              <li>Community support</li>
            </ul>
            <div className="mt-4 text-xs text-steel">Ideal for ideation & prototyping.</div>
          </div>
          <div className="p-6 rounded-2xl bg-surface/80 border border-fuel-500 shadow-lg shadow-fuel-500/30 flex flex-col">
            <h3 className="text-lg font-semibold mb-2 fuel-gradient-text">Operator (Pro)</h3>
            <ul className="text-sm text-text-secondary space-y-2 flex-1">
              <li>Mainnet deploy + versioning</li>
              <li>Real-time monitoring</li>
              <li>Parallel branch analytics</li>
              <li>Priority validation pipeline</li>
              <li>Monthly execution allowance</li>
            </ul>
            <div className="mt-4 text-xs text-success">Scales profitable strategies rapidly.</div>
          </div>
          <div className="p-6 rounded-2xl bg-surface/70 border border-zinc-800 flex flex-col">
            <h3 className="text-lg font-semibold mb-2 text-fuel-400">Institution (Enterprise)</h3>
            <ul className="text-sm text-text-secondary space-y-2 flex-1">
              <li>Custom parallel strategy design</li>
              <li>Dedicated infra lane</li>
              <li>Advanced risk controls</li>
              <li>Private data integrations</li>
              <li>SLA + white-glove onboarding</li>
            </ul>
            <div className="mt-4 text-xs text-warning">For funds & research desks.</div>
          </div>
        </div>
        <div className="rounded-xl bg-surface/60 border border-zinc-800 p-6 text-sm text-text-secondary">
          <strong className="text-text-primary">Charging Moments:</strong> Mainnet deploy signature · Each live trade / execution · Strategy parameter updates creating new contract instances · Premium analytics beyond baseline.
        </div>
      </div>
    </section>
  );
}
