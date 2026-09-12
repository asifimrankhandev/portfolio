import { ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-[#fdfdfc] border-t border-[#111111]/10">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        <p className="text-xs font-bold uppercase tracking-widest text-[#111111]/50">
          &copy; {new Date().getFullYear()} Asif Imran Khan.
        </p>

        <div className="flex items-center gap-8">
          <a href="https://github.com/techyaik" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#111111] hover:opacity-70 transition-opacity">
            GitHub <ArrowUpRight className="w-3 h-3 opacity-50" />
          </a>
          <a href="https://www.linkedin.com/in/asif-imran-khan-50b170218" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#111111] hover:opacity-70 transition-opacity">
            LinkedIn <ArrowUpRight className="w-3 h-3 opacity-50" />
          </a>
        </div>
        
      </div>
    </footer>
  );
};
