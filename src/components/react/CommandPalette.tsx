import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Search, Home, Briefcase, User, Mail, ExternalLink } from 'lucide-react';

const CommandPalette = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((current) => !current);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const navigateToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.assign(`/#${sectionId}`);
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const itemClass =
    'flex items-center gap-3 px-3 py-2 text-sm rounded-lg cursor-pointer aria-selected:bg-surface-muted aria-selected:text-brand';
  const groupHeadingClass =
    '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-ink-muted [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider mb-2';

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[2000] bg-ink/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
      )}
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        className="fixed top-[15%] sm:top-[20%] left-1/2 -translate-x-1/2 z-[2001] w-[calc(100%-2rem)] sm:w-full max-w-[640px] bg-surface border border-line rounded-2xl shadow-2xl overflow-hidden font-sans"
        label="Global Command Menu"
      >
        <div className="flex items-center px-4 border-b border-line">
          <Search className="w-5 h-5 text-ink-muted" />
          <Command.Input
            placeholder="Type a command or search..."
            className="flex-1 px-3 py-4 bg-transparent outline-none text-ink placeholder:text-ink-muted"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 bg-surface-muted rounded text-xs font-medium text-ink-muted font-mono">
            ESC
          </kbd>
        </div>

        <Command.List className="max-h-[300px] overflow-y-auto p-2 scroll-smooth">
          <Command.Empty className="py-6 text-center text-sm text-ink-muted">No results found.</Command.Empty>

          <Command.Group heading="Navigation" className={groupHeadingClass}>
            <Command.Item onSelect={() => runCommand(() => navigateToSection('home'))} className={itemClass}>
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => navigateToSection('about'))} className={itemClass}>
              <User className="w-4 h-4" />
              <span>About</span>
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => navigateToSection('projects'))} className={itemClass}>
              <Briefcase className="w-4 h-4" />
              <span>Selected Work</span>
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => navigateToSection('contact'))} className={itemClass}>
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => window.location.assign('/resume'))} className={itemClass}>
              <Briefcase className="w-4 h-4" />
              <span>View Resume</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Links" className={groupHeadingClass.replace(' mb-2', '')}>
            <Command.Item onSelect={() => runCommand(() => window.open('https://github.com/techyaik', '_blank'))} className={itemClass}>
              <i className="fa-brands fa-github text-[16px] w-4 text-center"></i>
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => window.open('https://www.linkedin.com/in/asif-imran-khan-50b170218', '_blank'))} className={itemClass}>
              <i className="fa-brands fa-linkedin-in text-[16px] w-4 text-center"></i>
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
            </Command.Item>
            <Command.Item onSelect={() => runCommand(() => window.open('https://x.com/asifikhandev?s=11', '_blank'))} className={itemClass}>
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
