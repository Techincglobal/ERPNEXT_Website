import React, { useState } from 'react';

const industries = [
    {
        id: 'manufacturing',
        label: 'Manufacturers',
        icon: '🏭',
        content: 'Enhances efficiency by integrating inventory management, production planning, and supply chain processes into a single platform. Gain real-time visibility into your shop floor and optimize resource utilization.',
        features: ["Production Planning", "Supply Chain Management", "Shop Floor Control", "Quality Management"]
    },
    {
        id: 'services',
        label: 'Service Companies',
        icon: '💼',
        content: 'Supports firms via Professional Services Automation (PSA) features, streamlining project management, billing, and resource allocation. Manage projects, timesheets, and expenses in one unified system.',
        features: ["Project Management", "Resource Allocation", "Timesheets & Billing", "Expense Management"]
    },
    {
        id: 'finance',
        label: 'Insurance & Finance',
        icon: '📊',
        content: 'Revolutionizes operations by integrating policy management, claims processing, and financial oversight. Ensure compliance and get accurate financial reporting with integrated accounting modules.',
        features: ["Policy Management", "Claims Processing", "Financial Oversight", "Compliance & Reporting"]
    },
    {
        id: 'retail',
        label: 'Dealers & Retailers',
        icon: '🛍️',
        content: 'Offers a unified platform to manage inventory, orders, and customer relationships seamlessly. Connect your physical stores with your online presence for a true omnichannel experience.',
        features: ["Inventory Management", "Order Processing", "CRM", "POS Integration"]
    },
    {
        id: 'conglomerates',
        label: 'Conglomerates',
        icon: '🏢',
        content: 'Integrates diverse business functions across multiple subsidiaries into a single platform for centralized visibility. Manage inter-company transactions and consolidated financial reporting with ease.',
        features: ["Multi-Entity Management", "Consolidated Reporting", "Inter-company Transactions", "Centralized Control"]
    },
    {
        id: 'manpower',
        label: 'Manpower Organization',
        icon: '👥',
        content: 'Centralizes recruitment, workforce management, and payroll to reduce administrative tasks. Streamline your HR processes from hiring to retirement.',
        features: ["Recruitment", "Workforce Management", "Payroll Processing", "Employee Self-Service"]
    }
];

export default function Industries() {
    const [activeTab, setActiveTab] = useState(industries[0].id);

    return (
        <section className="py-12 md:py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-1/2 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Whom Do We Help!</h2>
                    <p className="text-slate-600">Tailored solutions for your specific sector requirements.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Tabs */}
                    <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 lg:w-1/3 pb-4 lg:pb-0">
                        {industries.map((ind) => (
                            <button
                                key={ind.id}
                                onClick={() => setActiveTab(ind.id)}
                                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all whitespace-nowrap lg:whitespace-normal
                  ${activeTab === ind.id
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                        : 'bg-white text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-200'
                                    }`}
                            >
                                <span className="text-2xl">{ind.icon}</span>
                                <span className="font-semibold">{ind.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3 bg-slate-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[400px]">
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"></div>

                        {industries.map((ind) => (
                            <div
                                key={ind.id}
                                className={`transition-all duration-500 ${activeTab === ind.id ? 'opacity-100 translate-x-0 relative' : 'opacity-0 translate-x-8 absolute inset-0 pointer-events-none'}`}
                            >
                                {activeTab === ind.id && (
                                    <>
                                        <div className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">Industry Solutions</div>
                                        <h3 className="text-3xl lg:text-4xl font-bold mb-6">{ind.label}</h3>
                                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                            {ind.content}
                                        </p>

                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            {ind.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                                                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        <a href={`/solutions`} className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all border-b border-blue-500 pb-1">
                                            Explore Solution <span aria-hidden="true">&rarr;</span>
                                        </a>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
