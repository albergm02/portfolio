import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';

const LINKS = [
  { href: 'https://github.com/albergm02', label: 'GitHub', Icon: GithubIcon, external: true },
  { href: 'https://www.linkedin.com/in/albertogarciamartin/', label: 'LinkedIn', Icon: LinkedinIcon, external: true },
  { href: 'mailto:alberto.g.m.0214@gmail.com', label: 'Email', Icon: Mail, external: false },
];

export function ContactIcons({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const box = size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const ic = size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';

  return (
    <div className="flex items-center gap-3">
      {LINKS.map(({ href, label, Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className={`flex items-center justify-center ${box} rounded-lg border border-white/15 text-silver hover:text-cyber hover:border-cyber transition-colors`}
        >
          <Icon className={ic} />
        </a>
      ))}
    </div>
  );
}