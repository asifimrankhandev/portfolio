import { Link } from 'react-router-dom';
import { ArrowLeft, Printer } from 'lucide-react';

export const Resume = () => {
  return (
    <div className="antialiased py-6 px-4 sm:py-10 sm:px-6 min-h-screen bg-slate-100 dark:bg-[#050505] text-slate-900 dark:text-slate-300">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-10 sm:mb-12 print:hidden">
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors flex items-center gap-2 font-medium">
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </Link>
          </div>
          <button 
            type="button" 
            onClick={() => window.print()} 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 dark:bg-emerald-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-emerald-700 dark:hover:bg-emerald-400 transition-colors shadow-sm"
          >
            <Printer className="w-4 h-4" />
            Download PDF
          </button>
        </div>

        {/* The Resume Sheet */}
        <div className="p-8 sm:p-12 md:p-16 rounded-xl bg-white dark:bg-[#101010] shadow-lg print:shadow-none print:p-0 print:bg-white text-slate-800 dark:text-slate-300">
          
          <header className="mb-12 md:mb-16 print:mb-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-white tracking-tight">Asif Imran Khan</h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">imran@idexa.app &bull; Bangalore, Karnataka, India</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            
            {/* Left Sidebar */}
            <div className="md:col-span-4 space-y-12">
              
              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 pb-2 border-b-2 border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300">Skills</h3>
                
                <div className="mb-6">
                  <p className="text-xs uppercase mb-3 text-slate-500 font-medium tracking-wide">Technical</p>
                  <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
                    <li>React / Next.js</li>
                    <li>JavaScript / TypeScript</li>
                    <li>HTML / CSS / Tailwind</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-xs uppercase mb-3 text-slate-500 font-medium tracking-wide">Professional</p>
                  <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
                    <li>ICD-10 / CPT Coding</li>
                    <li>Medical Coding Expertise</li>
                    <li>Effective Communication</li>
                    <li>Critical Thinking & Leadership</li>
                    <li>Anatomy & Physiology</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 pb-2 border-b-2 border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300">Languages</h3>
                <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex justify-between items-center">
                    <span>Bengali</span> 
                    <span className="text-[#0f9488] dark:text-emerald-400 font-medium">Native</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>English / Hindi / Urdu</span> 
                    <span className="text-[#0f9488] dark:text-emerald-400 font-medium">Fluent</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Kannada</span> 
                    <span className="text-[#0f9488] dark:text-emerald-400 font-medium">Basic</span>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 pb-2 border-b-2 border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300">Certifications</h3>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li>Certified Nurse</li>
                  <li>Advance Diploma In Medical Coding</li>
                  <li>Degree Certificate</li>
                </ul>
              </section>

              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 pb-2 border-b-2 border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300">Education</h3>
                
                <div className="mb-7">
                  <p className="font-semibold text-sm text-slate-900 dark:text-white leading-snug mb-1">Rajiv Gandhi University of Health Sciences</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">B M S Hospital Nursing School</p>
                  <div className="flex justify-between text-sm mt-1 text-[#0f9488] dark:text-emerald-400 font-mono">
                    <span>2018 — 2022</span>
                    <span>65%</span>
                  </div>
                </div>

                <div className="mb-7">
                  <p className="font-semibold text-sm text-slate-900 dark:text-white leading-snug mb-1">West Bengal Council of HS Education</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Model School</p>
                  <div className="flex justify-between text-sm mt-1 text-[#0f9488] dark:text-emerald-400 font-mono">
                    <span>2016 — 2018</span>
                    <span>64%</span>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-sm text-slate-900 dark:text-white leading-snug mb-1">West Bengal Board of Secondary Education</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Sitanagar High School [HS]</p>
                  <div className="flex justify-between text-sm mt-1 text-[#0f9488] dark:text-emerald-400 font-mono">
                    <span>2010 — 2015</span>
                    <span>75%</span>
                  </div>
                </div>
              </section>
              
            </div>

            {/* Right Main Content */}
            <div className="md:col-span-8">
              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-8 pb-2 border-b-2 border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300">Work Experience</h3>
                
                <div className="mb-12">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-3">
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Freelancer</h4>
                    <span className="text-sm font-mono px-3 py-1 bg-[#e6f7f6] dark:bg-emerald-500/10 text-[#0f9488] dark:text-emerald-400 rounded-md">2024 — PRESENT</span>
                  </div>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">AIK Studio</p>
                  <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    Specializing in building responsive and accessible front-end experiences. Delivering high-quality digital products for clients worldwide.
                  </p>
                </div>

                <div className="mb-12">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-3">
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Senior Executive Clinical</h4>
                    <span className="text-sm font-mono px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">01/2023 — PRESENT</span>
                  </div>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 uppercase tracking-wide">Sagility India Private Limited</p>
                  <ul className="text-base space-y-2.5 text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-inside">
                    <li>Assign standardized codes for diagnoses and procedures.</li>
                    <li>Ensure compliance with healthcare regulations.</li>
                    <li>Communicate with insurers to resolve claims.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-3">
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white">ER Nurse</h4>
                    <span className="text-sm font-mono px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">10/2022 — 01/2023</span>
                  </div>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 uppercase tracking-wide">New Janapriya Super Speciality Hospital</p>
                  <ul className="text-base space-y-2.5 text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-inside">
                    <li>Rapid assessment and prioritization of patient conditions.</li>
                    <li>Administered medications and performed critical procedures.</li>
                    <li>Collaborated with teams for effective treatment plans.</li>
                  </ul>
                </div>
              </section>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
