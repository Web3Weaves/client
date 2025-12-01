export default function Footer() {
  return (
    <footer className="px-6 py-12 bg-void border-t border-zinc-800 text-sm text-text-secondary">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="font-semibold text-text-primary">Web3Weave • Fuel Edition</div>
          <p className="text-xs">© {new Date().getFullYear()} Parallel Strategy Infrastructure.</p>
        </div>
        <nav className="flex gap-6 text-xs">
          <a href="#hero" className="hover:text-text-primary">Home</a>
          <a href="#features" className="hover:text-text-primary">Features</a>
          <a href="#pricing" className="hover:text-text-primary">Pricing</a>
          <a href="#investor" className="hover:text-text-primary">Investors</a>
        </nav>
      </div>
    </footer>
  );
}
