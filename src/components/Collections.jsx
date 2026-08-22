import React from 'react'
import sofa1 from '../assets/sofa1.jpeg'
import sofa2 from '../assets/sofa2.jpeg'
import outdoor from '../assets/outdoor.jpeg'
import sofa3 from '../assets/sofa3.jpeg'     
import lighting from '../assets/lighting.jpeg'

function Collections() {
  const collectionItems = [
    {
      id: 1,
      img: sofa1,
      title: 'Modern Luxury Sofa',
      desc: 'Elegant and comfortable design for modern living spaces.'
    },
    {
      id: 2,
      img: sofa2,
      title: 'Perfect Comfort Chair',
      desc: 'Soft fabric with timeless style for every home.'
    },
    {
      id: 3,
      img: outdoor,
      title: 'Outdoor Comfort',
      desc: 'Premium outdoor designs for relaxation and style.'
    },
    
    {
      id: 4,
      img: sofa3,
      title: 'Minimalist Armchair',
      desc: 'Sleek and simple design perfect for reading nooks.'
    },
   
    {
      id: 6,
      img: lighting,
      title: 'Artistic Pendant Lamp',
      desc: 'Statement lighting fixture to brighten your space.'
    }
  ]

  return (
    <section id="collections" className="py-24 px-6 bg-neutral-900">
      <div className="max-w-7xl mx-auto"> 
        
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">
            Our Work
          </p>
          <h2 className="text-4xl font-light">Complete Design Collections</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {collectionItems.map((item) => (
            <div key={item.id} className="border border-neutral-800 overflow-hidden hover:border-amber-500 transition duration-300 bg-black">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-64 object-cover" 
              />
              <div className="p-5">
                <h3 className="text-lg mb-1.5">{item.title}</h3>
                <p className="text-neutral-400 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Collections