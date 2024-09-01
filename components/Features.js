import React from 'react'
import { AlertCircle, BarChart2, Zap } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <AlertCircle size={24} />,
      title: "Smart Duplicate Detection",
      description: " Utilize advanced algorithms to effortlessly identify and eliminate redundant data."
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Enhanced Resource Utilization",
      description: "Maximize storage and processing efficiency by removing unnecessary duplicates."
    },
    {
      icon: <Zap size={24} />,
      title: "Rapid Workflow Optimization",
      description: "Save valuable time through automated and streamlined duplicate management."
    }
  ]

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-6">
                {React.cloneElement(feature.icon, { className: 'text-black' })}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black">{feature.title}</h3>
              <p className="text-black">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}