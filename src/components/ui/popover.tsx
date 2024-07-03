/* eslint-disable react/prop-types */
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';

import { cn } from '../../lib/utils';

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'ex-z-50 ex-w-72 ex-rounded-md ex-border ex-bg-popover ex-p-4 ex-text-popover-foreground ex-shadow-md ex-outline-none data-[state=open]:ex-animate-in data-[state=closed]:ex-animate-out data-[state=closed]:ex-fade-out-0 data-[state=open]:ex-fade-in-0 data-[state=closed]:ex-zoom-out-95 data-[state=open]:ex-zoom-in-95 data-[side=bottom]:ex-slide-in-from-top-2 data-[side=left]:ex-slide-in-from-right-2 data-[side=right]:ex-slide-in-from-left-2 data-[side=top]:ex-slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverContent, PopoverTrigger };
