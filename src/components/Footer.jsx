function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div>
          <h2 className="text-xl font-semibold tracking-[0.2em] uppercase text-amber-500">
            Nestora
          </h2>
          <p className="text-neutral-500 text-sm mt-2">
            Luxury Furniture & Interior Design
          </p>
        </div>

        <div className="flex gap-8 text-sm text-neutral-400">
          <a href="#home" className="hover:text-amber-400 transition">Home</a>
          <a href="#collections" className="hover:text-amber-400 transition">Collections</a>
          <a href="#about" className="hover:text-amber-400 transition">About</a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="text-neutral-600 text-sm">
            © 2026 Nestora. All rights reserved.
          </p>
          <p className="text-neutral-400 text-sm">
            <a href="mailto:itzharshii88@gmail.com" className="hover:text-amber-400 transition">itzharshii88@gmail.com</a>
          </p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer 