import React from 'react'

const Content = () => {
  return (
    <section id="services" className="bg-transparent py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary">Our Ayurvedic Services</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 ">
          {[
            { title: "Home Wellness", desc: "Ayurvedic wellness solutions." },
            { title: "Food & Nutrition", desc: "Healthy diet plans based on Ayurveda." },
            { title: "Mind & Spirituality", desc: "Yoga & Meditation healing." },
            { title: "Life & Relationships", desc: "Holistic lifestyle guidance." },
            { title: "Parenting & Family", desc: "Ayurvedic family wellness." },
            { title: "About Ayurveda", desc: "Ancient healing techniques." },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-primary">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Content