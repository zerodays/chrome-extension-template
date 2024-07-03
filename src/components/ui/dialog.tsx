/* eslint-disable react/prop-types */
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import * as React from 'react';

import { cn } from '../../lib/utils';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'ex- ex-fixed ex-inset-0 ex-z-50 ex-bg-black/80 data-[state=open]:ex-animate-in data-[state=closed]:ex-animate-out data-[state=closed]:ex-fade-out-0 data-[state=open]:ex-fade-in-0',
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'ex-fixed ex-left-[50%] ex-top-[50%] ex-z-50 ex-grid ex-w-full ex-max-w-lg ex-translate-x-[-50%] ex-translate-y-[-50%] ex-gap-4 ex-border ex-bg-background ex-p-6 ex-shadow-lg ex-duration-200 data-[state=open]:ex-animate-in data-[state=closed]:ex-animate-out data-[state=closed]:ex-fade-out-0 data-[state=open]:ex-fade-in-0 data-[state=closed]:ex-zoom-out-95 data-[state=open]:ex-zoom-in-95 data-[state=closed]:ex-slide-out-to-left-1/2 data-[state=closed]:ex-slide-out-to-top-[48%] data-[state=open]:ex-slide-in-from-left-1/2 data-[state=open]:ex-slide-in-from-top-[48%] sm:ex-rounded-lg',
        className,
      )}
      {...props}>
      {children}
      <DialogPrimitive.Close className="ex-absolute ex-right-4 ex-top-4 ex-rounded-sm ex-opacity-70 ex-ring-offset-background ex-transition-opacity hover:ex-opacity-100 focus:ex-outline-none focus:ex-ring-2 focus:ex-ring-ring focus:ex-ring-offset-2 disabled:ex-pointer-events-none data-[state=open]:ex-bg-accent data-[state=open]:ex-text-muted-foreground">
        <X className="ex-h-4 ex-w-4" />
        {/* eslint-disable-next-line react/jsx-no-literals */}
        <span className="ex-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'ex-flex ex-flex-col ex-space-y-1.5 ex-text-center sm:ex-text-left',
      className,
    )}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'ex-flex ex-flex-col-reverse sm:ex-flex-row sm:ex-justify-end sm:ex-space-x-2',
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'ex-text-lg ex-font-semibold ex-leading-none ex-tracking-tight',
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('ex-text-sm ex-text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
