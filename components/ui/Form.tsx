'use client';

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const baseField =
  'w-full rounded-2xl border-2 border-ink-100 bg-white px-4 py-3.5 text-base text-ink-500 placeholder:text-ink-300 transition-all focus:border-lavender-500 focus:outline-none focus:ring-4 focus:ring-lavender-100';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, className, id, ...props }, ref) => {
    const inputId = id || props.name;
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-semibold text-ink-500">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(baseField, error && 'border-blush-400', className)}
          {...props}
        />
        {hint && !error && <p className="text-sm text-ink-300">{hint}</p>}
        {error && <p className="text-sm text-blush-500">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, hint, error, className, id, ...props }, ref) => {
    const textareaId = id || props.name;
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-semibold text-ink-500">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(baseField, 'min-h-[120px] resize-y', error && 'border-blush-400', className)}
          {...props}
        />
        {hint && !error && <p className="text-sm text-ink-300">{hint}</p>}
        {error && <p className="text-sm text-blush-500">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, hint, error, className, children, id, ...props }, ref) => {
    const selectId = id || props.name;
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={selectId} className="block text-sm font-semibold text-ink-500">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn(baseField, 'appearance-none bg-no-repeat pe-10', error && 'border-blush-400', className)}
          style={{
            backgroundImage:
              'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3e%3cpath d=\'M1 1l5 5 5-5\' stroke=\'%23857B6F\' stroke-width=\'2\' fill=\'none\' stroke-linecap=\'round\'/%3e%3c/svg%3e")',
            backgroundPosition: 'right 1rem center',
          }}
          {...props}
        >
          {children}
        </select>
        {hint && !error && <p className="text-sm text-ink-300">{hint}</p>}
        {error && <p className="text-sm text-blush-500">{error}</p>}
      </div>
    );
  }
);
Select.displayName = 'Select';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, id, ...props }, ref) => {
    const cbId = id || props.name;
    return (
      <label
        htmlFor={cbId}
        className={cn(
          'flex items-start gap-3 cursor-pointer group p-4 rounded-2xl border-2 border-ink-100 bg-white hover:border-lavender-300 transition-colors',
          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          id={cbId}
          className="mt-1 h-5 w-5 rounded-md border-2 border-ink-200 text-lavender-500 focus:ring-lavender-300 cursor-pointer accent-lavender-500"
          {...props}
        />
        <span className="text-base text-ink-500 leading-relaxed">{label}</span>
      </label>
    );
  }
);
Checkbox.displayName = 'Checkbox';
