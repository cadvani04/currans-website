'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-24 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Curran Advani
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Product-focused Information Science senior with experience in AI-driven products and entrepreneurship. Based in San Jose, CA.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Link 
                href="#experience" 
                className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                View Experience
              </Link>
              <Link 
                href="#contact" 
                className="px-8 py-4 border border-black rounded-full hover:bg-gray-100 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Experience Highlights */}
      <section className="py-24 px-6 bg-gray-50" id="experience">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Experience Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Revamp",
                role: "CEO/Founder",
                description: "Developing an 'Uber for Home Services' platform, connecting homeowners with service providers.",
                logo: "/revamp-logo.png", // Add your logo files to the public directory
                logoAlt: "Revamp Logo"
              },
              {
                title: "Western Digital",
                role: "Data Science Intern & IOT",
                description: "Benchmarked LLMs for engineering queries, improving response accuracy by 30%.",
                logo: "/western-digital-logo.png",
                logoAlt: "Western Digital Logo"
              },
              {
                title: "UCSC",
                role: "Residential Assistant",
                description: "Led onboarding and conflict resolution for 200+ students, improving retention and engagement.",
                logo: "/ucsc-logo.png",
                logoAlt: "UCSC Logo"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 relative mr-4 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                    {/* If you have actual logos, use this: */}
                    {/* <Image 
                      src={item.logo} 
                      alt={item.logoAlt}
                      fill
                      className="object-contain p-2"
                    /> */}
                    
                    {/* Placeholder for now */}
                    <span className="text-xl font-bold text-gray-500">{item.title.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link target="_blank"
              href="https://www.linkedin.com/in/curran-advani-9663011b6/" 
              className="px-8 py-4 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
            >
              View Full Experience
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-24 px-6" id="about">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-200 shadow-md">
                {/* Replace with your actual image */}
                <Image 
                  src="/personal.jpg" 
                  alt="Curran Advani" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">About Me</h2>
              <p className="text-lg text-gray-600 mb-6">
                I'm an Information Science senior at UC Santa Cruz with a focus on product development and AI applications. My experience spans from founding Revamp, an "Uber for Home Services" platform, to working with LLMs at Western Digital.
              </p>
              <p className="text-lg text-gray-600 mb-10">
                I'm passionate about bridging technical and customer needs, with proven skills in product strategy, user research, and LLM applications. Currently seeking opportunities in supply chain and product roles.
              </p>
              <Link 
                href="#skills" 
                className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                View My Skills
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-24 px-6 bg-gray-50" id="skills">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: 'Technical Skills', 
                icon: '💻',
                skills: ['Python', 'PostgreSQL', 'AWS Bedrock', 'Make.com', 'n8n', 'HTML/CSS', 'Oracle', 'API', 'Machine Learning'] 
              },
              { 
                title: 'Data & Product Skills', 
                icon: '📊',
                skills: ['NumPy', 'Excel/Sheets', 'Plotly', 'UI/UX Design', 'User Research', 'Business Analytics', 'ERP', 'Presentations'] 
              },
              { 
                title: 'Soft Skills', 
                icon: '🤝',
                skills: ['Problem-solving', 'Communication', 'Detail-oriented', 'Leadership', 'Project Management', 'Team Collaboration'] 
              }
            ].map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-3 text-blue-500">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-24 px-6" id="contact">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            I'm currently looking for opportunities in supply chain and product roles. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="mailto:advanicurran@gmail.com" 
              className="px-10 py-5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-lg"
            >
              Contact Me
            </Link>
            <a 
              href="https://linkedin.com/in/curran-advani-9663011b6/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 border border-black rounded-full hover:bg-gray-100 transition-colors text-lg"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </>
  );
}