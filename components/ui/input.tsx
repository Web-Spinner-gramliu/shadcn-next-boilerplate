import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'block w-full rounded-md border-input shadow-sm transition duration-150 ease-in-out focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 disabled:bg-muted disabled:text-muted-foreground',
  {
    variants: {
      size: {
        sm: 'text-sm leading-4 py-2 px-3',
        md: 'text-md leading-5 py-2 px-4',
        lg: 'text-lg leading-6 py-3 px-4',
      },
      variant: {
        outline: 'border',
        filled: 'bg-input',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'outline',
    },
  }
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

export const Input: React.FC<InputProps> = ({ size, variant, className, ...props }) => {
  return <input className={cn(inputVariants({ size, variant }), className)} {...props} />;
};