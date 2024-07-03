/* eslint-disable react/prop-types */
import { type DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import * as React from 'react';

import { cn } from '../../lib/utils';
import { Dialog, DialogContent } from './dialog';

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'ex-flex ex-h-full ex-w-full ex-flex-col ex-overflow-hidden ex-rounded-md ex-bg-popover ex-text-popover-foreground',
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="ex-overflow-hidden ex-p-0 ex-shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:ex-px-2 [&_[cmdk-group-heading]]:ex-font-medium [&_[cmdk-group-heading]]:ex-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:ex-pt-0 [&_[cmdk-group]]:ex-px-2 [&_[cmdk-input-wrapper]_svg]:ex-h-5 [&_[cmdk-input-wrapper]_svg]:ex-w-5 [&_[cmdk-input]]:ex-h-12 [&_[cmdk-item]]:ex-px-2 [&_[cmdk-item]]:ex-py-3 [&_[cmdk-item]_svg]:ex-h-5 [&_[cmdk-item]_svg]:ex-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="ex-flex ex-items-center ex-border-b ex-px-3">
    <Search className="ex-mr-2 ex-h-4 ex-w-4 ex-shrink-0 ex-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'ex-flex ex-h-11 ex-w-full ex-rounded-md ex-bg-transparent ex-py-3 ex-text-sm ex-outline-none placeholder:ex-text-muted-foreground disabled:ex-cursor-not-allowed disabled:ex-opacity-50',
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      'ex-max-h-[300px] ex-overflow-y-auto ex-overflow-x-hidden',
      className,
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="ex-py-6 ex-text-center ex-text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'ex-overflow-hidden ex-p-1 ex-text-foreground [&_[cmdk-group-heading]]:ex-px-2 [&_[cmdk-group-heading]]:ex-py-1.5 [&_[cmdk-group-heading]]:ex-text-xs [&_[cmdk-group-heading]]:ex-font-medium [&_[cmdk-group-heading]]:ex-text-muted-foreground',
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('ex--mx-1 ex-h-px ex-bg-border', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'ex-relative ex-flex ex-cursor-default ex-select-none ex-items-center ex-rounded-sm ex-px-2 ex-py-1.5 ex-text-sm ex-outline-none data-[disabled=true]:ex-pointer-events-none data-[selected=true]:ex-bg-accent data-[selected=true]:ex-text-accent-foreground data-[disabled=true]:ex-opacity-50',
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ex-ml-auto ex-text-xs ex-tracking-widest ex-text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = 'CommandShortcut';

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
