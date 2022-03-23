import * as DialogPrimitive from "@radix-ui/react-dialog";
import React, { ComponentPropsWithoutRef } from "react";

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay
      forceMount
      className="fixed inset-0 z-20 bg-black/50"
    />
    <DialogPrimitive.Content forceMount {...props} ref={forwardedRef}>
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;