"use client";

import { useActionState, ViewTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Send } from "lucide-react";
import { submitContactForm } from "@/app/contact/action";

export default function ContactForm() {
  // Connect the form state hook directly to the execution action
  const [currentState, formAction, isPending] = useActionState(submitContactForm, {});

  return (
    <section id="contact" className="relative w-full py-24 bg-background font-mono text-foreground select-none">
      {/* Background Blueprint Grid Layer */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="mx-auto w-full max-w-xl px-4">
        
        {/* Main Terminal-Style Container Frame */}
        <div className="relative group">
          {/* Overlapping back accent card layer shadow */}
          <div className="absolute inset-0 border-4 border-foreground bg-[#A855F7] translate-x-2 translate-y-2" />

          {/* Main Form Content Box */}
          <div className="relative border-4 border-foreground bg-background overflow-hidden flex flex-col">
            
            {/* Terminal Window Header Bar Strip */}
            <div className="border-b-4 border-foreground bg-[#FF6B6B] p-3 flex justify-between items-center text-black">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-xs font-black uppercase tracking-widest">ping_dali.exe</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 border-2 border-black bg-white" />
                <div className="w-3 h-3 border-2 border-black bg-black" />
              </div>
            </div>

            {/* Form Body Wrapper linked to Server Action dispatch */}
            <form action={formAction} className="p-6 space-y-6">
              
              {/* Email Input Field */}
              <div className="space-y-2">
                <Label 
                  htmlFor="email" 
                  className="text-xs font-black uppercase tracking-wider text-foreground block"
                >
                  Email Address
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    disabled={isPending}
                    className="h-12 text-sm font-bold bg-muted/40 border-2 border-foreground text-foreground rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)] focus-visible:ring-0 focus-visible:border-foreground focus-visible:translate-x-[1px] focus-visible:translate-y-[1px] focus-visible:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] placeholder:text-muted-foreground/60 transition-all duration-75"
                  />
                </div>
              </div>

              {/* Tactile Push-Down Form Submission Button */}
              <Button
                type="submit"
                disabled={isPending}
                className="w-full h-12 rounded-none border-2 border-foreground bg-[#FFDE4D] text-black hover:bg-[#FFDE4D] text-xs font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-75 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 stroke-[2.5px]" />
                {isPending ? "Transmitting..." : "Send Channel Message"}
              </Button>

              {/* State feedback transitions */}
              {currentState?.success && currentState?.message && (
                <ViewTransition>
                  <div className="border-2 border-foreground bg-green-100 dark:bg-green-950/40 p-2.5 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <p className="text-xs font-black uppercase text-green-600 dark:text-green-400">
                      ✓ {currentState.message}
                    </p>
                  </div>
                </ViewTransition>
              )}

              {currentState?.error && (
                <ViewTransition>
                  <div className="border-2 border-foreground bg-red-100 dark:bg-red-950/40 p-2.5 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <p className="text-xs font-black uppercase text-red-600 dark:text-red-400">
                      ⚠ {currentState.error}
                    </p>
                  </div>
                </ViewTransition>
              )}
            </form>

          </div>
        </div>

        {/* Footer Subtext Description */}
        <p className="text-center text-[11px] font-bold text-muted-foreground tracking-wide mt-8 max-w-md mx-auto leading-relaxed">
          Let's connect! Type your system pointer down inside the input node to route message lines directly into my terminal workspace.
        </p>

      </div>
    </section>
  );
}