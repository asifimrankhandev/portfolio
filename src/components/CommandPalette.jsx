import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Search, Monitor, Moon, Sun, Home, Briefcase, User, Mail, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate, useLocation } from 'react-router-dom';

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const { themePreference, setThemePreference } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command) => {
    setOpen(false);
    command();
  };

  const navigateToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[2000] bg-slate-900/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
      )}
      <Command.Dialog 
        open={open} 
        onOpenChange={setOpen}
        className="fixed top-[15%] sm:top-[20%] left-1/2 -translate-x-1/2 z-[2001] w-[calc(100%-2rem)] sm:w-full max-w-[640px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-sans"
        label="Global Command Menu"
      >
        <div className="flex items-center px-4 border-b border-slate-100 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400" />
          <Command.Input 
            placeholder="Type a command or search..." 
            className="flex-1 px-3 py-4 bg-transparent outline-none text-slate-900 dark:text-white placeholder:text-slate-400"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-medium text-slate-500 dark:text-slate-400 font-mono">
            ESC
          </kbd>
        </div>

        <Command.List className="max-h-[300px] overflow-y-auto p-2 scroll-smooth">
          <Command.Empty className="py-6 text-center text-sm text-slate-500">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigation" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-slate-500 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider mb-2">
            <Command.Item onSelect={() => runCommand(() => navigateToSection('home'))} className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-brand">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => navigateToSection('about'))} className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-brand">
              <User className="w-4 h-4" />
              <span>About</span>
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => navigateToSection('projects'))} className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-brand">
              <Briefcase className="w-4 h-4" />
              <span>Selected Work</span>
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => navigateToSection('contact'))} className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-brand">
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => navigate('/resume'))} className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-brand">
              <Briefcase className="w-4 h-4" />
              <span>View Resume</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Theme" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-slate-500 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider mb-2">
            <Command.Item onSelect={() => runCommand(() => setThemePreference('light'))} className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-brand">
              <Sun className="w-4 h-4" />
              <span>Light Mode</span>
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => setThemePreference('dark'))} className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-brand">
              <Moon className="w-4 h-4" />
              <span>Dark Mode</span>
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => setThemePreference('system'))} className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-brand">
              <Monitor className="w-4 h-4" />
              <span>System Preference</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Links" className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-slate-500 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider">
            <Command.Item onSelect={() => runCommand(() => window.open('https://github.com/techyaik', '_blank'))} className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-brand">
              <i className="fa-brands fa-github text-[16px] w-4 text-center"></i>
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => window.open('https://www.linkedin.com/in/asif-imran-khan-50b170218', '_blank'))} className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-brand">
              <i className="fa-brands fa-linkedin-in text-[16px] w-4 text-center"></i>
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => window.open('https://x.com/asifikhandev?s=11', '_blank'))} className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-brand">
              <i className="fa-brands fa-x-twitter text-[16px] w-4 text-center"></i>
              <span>Twitter</span>
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
};

export default CommandPalette;
