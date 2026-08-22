function About() {
    return (
      <section id="about" className="py-24 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          
          <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">
            About Us
          </p>
          
          <h2 className="text-4xl font-light mb-8">
            The Story Behind Nestora
          </h2>
  
          <p className="text-neutral-400 text-lg leading-relaxed mb-8">
            Nestora is a creative design studio founded by two passionate friends, 
            <span className="text-white"> Iqra </span> and 
            <span className="text-white"> Laiba</span>. 
            Together, we turn ideas into elegant furniture and interior design concepts 
            that bring comfort and beauty into every space.
          </p>
  
          <p className="text-neutral-400 text-lg leading-relaxed mb-10">
            We specialize in custom sofa designs, luxury living spaces, and modern 
            interior concepts — crafted with attention to detail and a love for timeless style.
          </p>
  
          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-12">
            <div className="border border-neutral-800 px-10 py-6">
              <h3 className="text-xl text-amber-500 mb-2">Iqra</h3>
              <p className="text-neutral-400 text-sm">Design & Creative Direction</p>
            </div>
            
            <div className="border border-neutral-800 px-10 py-6">
              <h3 className="text-xl text-amber-500 mb-2">Laiba</h3>
              <p className="text-neutral-400 text-sm">Design & Styling</p>
            </div>
          </div>
  
        </div>
      </section>
    )
  }
  
  export default About