import React, { useState } from 'react';

const values = [
  {
    title: "Unbeatable TCO",
    content: "NXTGEN ERP is extremely cost-effective because it eliminates the burden of expensive licensing fees. Unlike traditional ERP systems that require costly licenses per user or module, NXTGEN ERP offers an Unlimited-license model, providing businesses with full access to its powerful features without recurring costs.",
    image: "/images/value_tco.png"
  },
  {
    title: "An ERP that is a Pleasure to Implement",
    content: "Implementing NXTGEN ERP is a true pleasure thanks to its agile implementation methodology, which ensures a fast and collaborative process. By working closely with the customer at every step, NXTGEN ERP tailors the system to fit the unique needs of the business.",
    image: "/images/value_implementation.png"
  },
  {
    title: "Centered around Ease-of-Use",
    content: "NXTGEN ERP is designed with user-friendliness in mind, primarily through its innovative “data entry once” concept. This approach allows users to input information just a single time across the entire system, eliminating the need for repetitive data entry.",
    image: "/images/value_ease_of_use.png"
  },
  {
    title: "The Best Delivery Experience",
    content: "Uses an agile methodology to ensure seamless transitions and quick ROI. We prioritize delivering exactly what the customer needs through a fast and collaborative process.",
    image: "/images/value_delivery.png"
  },
  {
    title: "We have made ERP implementation a Success",
    content: "By focusing on deep customization and aligning the system with unique requirements, NXTGEN ensures clients receive tailored solutions that address specific challenges.",
    image: "/images/value_success.png"
  }
];

export default function ValueProposition() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              The NXTGEN <span className="text-blue-600">Value</span>
            </h2>
            <p className="text-lg text-slate-600">
              We deliver more than just software. We deliver a competitive advantage built on modern technology and industry expertise.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Image/Visual Area - Sticky */}
          <div className="relative h-[400px] bg-slate-50 rounded-3xl overflow-hidden hidden lg:flex items-center justify-center p-8 sticky top-24 border border-slate-100 shadow-sm">
            {activeIndex !== null && (
              <img
                key={activeIndex}
                src={values[activeIndex].image}
                alt={values[activeIndex].title}
                className="max-w-full max-h-full object-contain animate-fade-up"
              />
            )}
          </div>

          <div className="space-y-4">
            {values.map((item, index) => (
              <div
                key={index}
                className={`group border rounded-2xl transition-all duration-300 overflow-hidden ${activeIndex === index
                  ? 'border-blue-200 bg-blue-50/50 shadow-lg shadow-blue-500/10'
                  : 'border-slate-100 bg-white hover:border-blue-100 hover:shadow-md'
                  }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-bold transition-colors ${activeIndex === index ? 'text-blue-700' : 'text-slate-800 group-hover:text-blue-600'}`}>
                    {item.title}
                  </span>
                  <span className={`transform transition-transform duration-300 flex items-center justify-center w-8 h-8 rounded-full ${activeIndex === index ? 'rotate-180 bg-blue-200 text-blue-700' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500'
                    }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
