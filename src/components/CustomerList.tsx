import React, { useState } from 'react';

type Customer = {
    id: string;
    name: string;
    logoText: string;
    logoColor: string;
    type: string;
    solution: string;
    description: string;
    functionalAreas: string[];
    duration: string;
    category: string;
};

const customers: Customer[] = [
    {
        id: "sitrek",
        name: "SITREK Security Solutions (Pvt) Ltd",
        logoText: "SITREK",
        logoColor: "text-blue-900",
        type: "Multi Company Multi-Site",
        solution: "NXTGEN CRM",
        description: "A CRM which caters to each companies' specific requirements. With collaborative features.",
        functionalAreas: ["Lead to Cash", "Service and product inventories", "Quotations and sales Booking"],
        duration: "6 Months",
        category: "Manpower" // Changed from Technology based on "Security"
    },
    {
        id: "sebsa",
        name: "SEBSA",
        logoText: "SEBSA",
        logoColor: "text-blue-600",
        type: "Multi Company Multi-Site",
        solution: "NXTGEN PSA",
        description: "NXTGEN PSA Professional Service Automation, addressing specific requirement of a service delivery organization. Managing all aspects of time reporting, projects HR and Payroll flowing into finance & reporting with helpdesk ticketing and collaboration.",
        functionalAreas: ["Projects and Timesheets", "Procure to Pay", "Project Billing", "Finance", "Strategic & Operational HR", "Payroll", "Support Ticketing"],
        duration: "6 Months",
        category: "Technology"
    },
    {
        id: "obm",
        name: "OBM Digital Factory",
        logoText: "OBM Digital Factory",
        logoColor: "text-orange-600",
        type: "Multi Company Multi-Site",
        solution: "NXTGEN PSA",
        description: "Professional Service Automation, addressing specific requirement of a service delivery organization. Managing all aspects of time reporting, projects HR and Payroll with helpdesk ticketing.",
        functionalAreas: ["Projects and Timesheets", "Procure to Pay", "Project Billing", "Strategic & Operations HR", "Payroll", "Support Ticketing"],
        duration: "4 Months",
        category: "Technology"
    },
    {
        id: "databox",
        name: "DataBox Technologies",
        logoText: "DATA BOX",
        logoColor: "text-yellow-600",
        type: "Single Company Multi-Site",
        solution: "NXTGEN PSA",
        description: "Professional Service Automation, addressing specific requirement of Projects, Timesheets and Operational HR with a Self-Service Mobile Application.",
        functionalAreas: ["Projects and Timesheets", "Operational HR", "Self-Service Mobile App"],
        duration: "1 Months",
        category: "Technology"
    },
    {
        id: "orelit",
        name: "OREL IT",
        logoText: "OREL IT",
        logoColor: "text-red-600",
        type: "Multi Company Multi-Site",
        solution: "NXTGEN CRM",
        description: "The solution span over multiple SBUs of the organization, catering to varying requirement of each SBU. Also extends to managing document flows, approval routines and workflows.",
        functionalAreas: ["Lead to Cash", "Document Management"],
        duration: "5 Months",
        category: "Technology"
    },
    {
        id: "electro",
        name: "Electro - Serv",
        logoText: "Electro - Serv",
        logoColor: "text-red-500",
        type: "Single Company Multi-Site",
        solution: "NXTGEN ERP",
        description: "Brings real-time visibility seamlessly Connects Pro Sales and Finance departments.",
        functionalAreas: ["Lead to Cash", "Procure to Pay", "Eng near to Order", "Record to Report", "Warehouse", "Assets", "Finance"],
        duration: "5 Months",
        category: "Engineering"
    },
    {
        id: "rwanda",
        name: "Rwanda Convention Bureau",
        logoText: "Rwanda Bureau",
        logoColor: "text-blue-800",
        type: "Single Company Multi-Site",
        solution: "NXTGEN CRM",
        description: "The Solution manages the It caters to specific processes.",
        functionalAreas: ["Lead & Opportunity Management", "Workflow Management", "Approval Routines", "Document Management"],
        duration: "6 Months",
        category: "Other"
    },
    {
        id: "emjay",
        name: "Emjay Penguin",
        logoText: "emjay penguin",
        logoColor: "text-yellow-500",
        type: "Single Instance Multi-Company",
        solution: "NXTGEN Logistic",
        description: "Handles all aspects of Imp with seamless integration large volumes of transactions customs ASYCUDA system.",
        functionalAreas: ["Import", "Export", "Courier", "Transport", "Integration to ERP", "Supply Chain", "Finance Reports"],
        duration: "8 Months",
        category: "Apparel"
    },
    // New Customers
    {
        id: "asia_securities",
        name: "Asia Securities",
        logoText: "ASIA SECURITIES",
        logoColor: "text-slate-900",
        type: "Multi Company Multi-Site",
        solution: "NXTGEN CRM",
        description: "A CRM solution that fits multiple SBUs. And inter comply with data sharing Collaborative features.",
        functionalAreas: ["Lead & Opportunity Management", "Drive & Revenue", "Projects", "Support / Ticketing"],
        duration: "4 Months",
        category: "Financial"
    },
    {
        id: "sfinax",
        name: "Sfinax",
        logoText: "Sfinax",
        logoColor: "text-green-600",
        type: "Multi Company Multi-Site",
        solution: "NXTGEN ERP",
        description: "Handles all aspects of Finace integration to Projects, Time & Pay.",
        functionalAreas: ["Projects and Timesheets", "Procure to Pay", "Project Billing", "Strategic & Operational HR", "Payroll", "Support Ticketing"],
        duration: "6 Months",
        category: "Financial"
    },
    {
        id: "st_anthonys",
        name: "St. Anthony's",
        logoText: "S.A",
        logoColor: "text-teal-600",
        type: "Single Company Multi-Site",
        solution: "NXTGEN CRM",
        description: "CRM which caters to sales track customer inquiries and manage bill recv.",
        functionalAreas: ["Lead to Cash", "Service and Item Inventories", "Quotations and Sales Booking", "Support Ticketing"],
        duration: "5 Months",
        category: "Engineering"
    },
    {
        id: "fathers_house",
        name: "The Father's House",
        logoText: "The Father's House",
        logoColor: "text-purple-700",
        type: "Single Company Multi-Site",
        solution: "NXTGEN ERP",
        description: "The Solution implements management system to regard to membership.",
        functionalAreas: ["Membership Manager", "Workflow Management", "Approval Routines", "Document Management"],
        duration: "6 Months",
        category: "Other"
    }
];

const categories = ["All", "Technology", "Apparel", "Engineering", "Manpower", "Healthcare", "Financial", "Other"];

export default function CustomerList() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredCustomers = activeCategory === "All"
        ? customers
        : customers.filter(c => c.category === activeCategory);

    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors ${activeCategory === cat
                                    ? 'bg-sky-400 text-white'
                                    : 'bg-sky-400/80 text-white hover:bg-sky-500'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Customer Grid */}
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                    {filteredCustomers.map((cust) => (
                        <div key={cust.id} className="flex flex-col sm:flex-row gap-6 animate-fade-up">
                            {/* Logo Area */}
                            <div className="sm:w-1/3 flex justify-center sm:justify-end pt-2">
                                <div className={`font-bold text-2xl text-center sm:text-right ${cust.logoColor}`}>
                                    {cust.logoText}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="sm:w-2/3">
                                <h3 className="text-xs font-bold text-slate-800 uppercase mb-1">{cust.name}</h3>
                                <p className="text-[10px] text-slate-500 font-medium mb-1">{cust.type}</p>
                                <p className="text-[10px] text-slate-500 font-medium mb-2">Solution : {cust.solution}</p>

                                <p className="text-[11px] text-slate-600 leading-snug mb-3 min-h-[2.5em]">
                                    {cust.description}
                                </p>

                                <div className="mb-2">
                                    <p className="text-[10px] font-bold text-slate-700 mb-1">Functional Areas</p>
                                    <ul className="text-[10px] text-slate-600 space-y-0.5">
                                        {cust.functionalAreas.map((area, i) => (
                                            <li key={i}>- {area}</li>
                                        ))}
                                    </ul>
                                </div>

                                <p className="text-[10px] font-bold text-slate-700">
                                    Duration: <span className="font-normal text-slate-600">{cust.duration}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredCustomers.length === 0 && (
                    <div className="text-center text-slate-400 py-12">
                        No customers found in this category.
                    </div>
                )}

            </div>
        </section>
    );
}
