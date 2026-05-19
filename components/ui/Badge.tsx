'use client';

import { cn } from '@/lib/utils';
import { ShieldCheck, Sparkles, Mail, ShieldQuestion } from 'lucide-react';
import type { VerificationLevel } from '@/lib/types';
import { useI18n } from '@/lib/i18n/context';

interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'lavender' | 'butter' | 'sky' | 'mint' | 'blush' | 'ink';
  className?: string;
  icon?: React.ReactNode;
}

const variants = {
  lavender: 'bg-lavender-100 text-lavender-700 border-lavender-200',
  butter: 'bg-butter-100 text-butter-600 border-butter-200',
  sky: 'bg-sky-100 text-sky-500 border-sky-200',
  mint: 'bg-mint-100 text-mint-500 border-mint-200',
  blush: 'bg-blush-100 text-blush-500 border-blush-200',
  ink: 'bg-ink-100 text-ink-500 border-ink-200',
};

export function Badge({ children, variant = 'lavender', className, icon }: BadgeProps) {
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
  const { t } = useI18n();
  switch (level) {
    case 'trusted':
      return (
        <Badge variant="mint" icon={<Sparkles className="h-3 w-3" />}>
          {t.verif_trusted}
        </Badge>
      );
    case 'id_verified':
      return (
        <Badge variant="lavender" icon={<ShieldCheck className="h-3 w-3" />}>
          {t.verif_id}
        </Badge>
      );
    case 'email':
      return (
        <Badge variant="butter" icon={<Mail className="h-3 w-3" />}>
          {t.verif_email}
        </Badge>
      );
    default:
      return (
        <Badge variant="ink" icon={<ShieldQuestion className="h-3 w-3" />}>
          {t.verif_none}
        </Badge>
      );
  }
}
