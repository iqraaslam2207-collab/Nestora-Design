function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center text-center px-6">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1771371097061-3befd4b71b59?q=80&w=1170&auto=format&fit=crop"
          alt="Luxury Living" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-6">
          Luxury Design Studio
        </p>

        <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
          Elegant Designs <br /> for Modern Living
        </h1>

        <p className="text-lg text-neutral-300 mb-12 max-w-xl mx-auto">
          Custom furniture & interior design concepts that transform your space with timeless elegance.
        </p>

        <a 
  href="#collections"
  className="inline-block bg-amber-600 hover:bg-amber-700 text-black font-medium px-8 py-3 rounded transition"
>
  Explore Collection
</a>
      </div>
    </section>
  )
}

export default Hero