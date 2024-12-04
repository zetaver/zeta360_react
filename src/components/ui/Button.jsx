import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Button = forwardRef(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            primary:
              'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600',
            secondary:
              'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500',
            outline:
              'border border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500',
            ghost:
              'bg-transparent hover:bg-gray-100 focus-visible:ring-gray-500',
          }[variant],
          {
            sm: 'h-8 px-3 text-sm',
            md: 'h-10 px-4',
            lg: 'h-12 px-6 text-lg',
          }[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;