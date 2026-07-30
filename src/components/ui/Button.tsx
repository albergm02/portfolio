import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-f1-red focus:ring-offset-2 focus:ring-offset-carbon',
  {
    variants: {
      variant: {
        primary: 'bg-f1-red text-white hover:bg-f1-red-dark shadow-lg hover:-translate-y-1',
        secondary: 'bg-white text-carbon hover:bg-white/90 shadow-lg hover:-translate-y-1',
        outline: 'border-2 border-f1-red text-f1-red hover:bg-f1-red hover:text-white',
        ghost: 'text-white hover:bg-white/10',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  download?: string | boolean; 
  target?: string;             
  rel?: string;               
}

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function Button({
  className, variant, size, href, children, onClick,
  type = 'button', download, target, rel,
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        download={download}   // solo se aplica en <a>
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}