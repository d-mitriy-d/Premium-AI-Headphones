import { Headphones } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Details", href: "#details" },
  { label: "FAQ", href: "#faq" },
];

const socials = ["X", "Instagram", "YouTube"];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 px-6 py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 neon-border">
            <Headphones className="h-4 w-4 text-primary" />
          </div>
          <span className="text-base font-semibold tracking-tight text-foreground">
            AURA<span className="neon-text ml-0.5">X1</span>
          </span>
        </a>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <span
              key={social}
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary cursor-pointer"
            >
              {social}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full max-w-xs bg-border" />

        {/* Copyright */}
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} AURA Audio Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
