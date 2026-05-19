import { cn } from '@/lib/utils';
import { ShieldCheck, Sparkles, Mail, ShieldQuestion } from 'lucide-react';
import type { VerificationLevel } from '@/lib/types';

interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'sage' | 'peach' | 'sky' | 'sand' | 'terra' | 'ink';
  className?: string;
  icon?: React.ReactNode;
}

const variants = {
  sage: 'bg-sage-100 text-sage-500 border-sage-200',
  peach: 'bg-peach-100 text-peach-600 border-peach-200',
  sky: 'bg-sky-100 text-sky-500 border-sky-200',
  sand: 'bg-sand-100 text-sand-500 border-sand-200',
  terra: 'bg-terra-100 text-terra-500 border-terra-200',
  ink: 'bg-ink-100 text-ink-500 border-ink-200',
};

export function Badge({ children, variant = 'sage', className, icon }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold border',
        variants[variant],
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}

export function VerificationBadge({ level }: { level: VerificationLevel }) {
  switch (level) {
    case 'trusted':
      return (
        <Badge variant="sage" icon={<Sparkles className="h-3 w-3" />}>
          Membre de confiance
        </Badge>
      );
    case 'id_verified':
      return (
        <Badge variant="sky" icon={<ShieldCheck className="h-3 w-3" />}>
          Identité vérifiée
        </Badge>
      );
    case 'email':
      return (
        <Badge variant="sand" icon={<Mail className="h-3 w-3" />}>
          Email confirmé
        </Badge>
      );
    default:
      return (
        <Badge variant="ink" icon={<ShieldQuestion className="h-3 w-3" />}>
          Non vérifié
        </Badge>
      );
  }
}
