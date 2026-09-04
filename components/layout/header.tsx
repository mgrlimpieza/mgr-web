"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/layout/logo";
import { mainNav } from "@/lib/constants/nav";
import { cn } from "@/lib/utils";

function NavItem({
  href,
  label,
  active,
  onClick,
  className,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative text-sm font-medium text-brand-navy/80 transition-colors hover:text-brand-blue",
        active && "text-brand-blue",
        className
      )}
    >
      {label}
      {active && (
        <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-brand-blue" />
      )}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              active={pathname === item.href}
            />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            size="lg"
            className="rounded-lg bg-brand-blue px-5 text-white hover:bg-brand-blue/90"
            nativeButton={false}
            render={<Link href="/contacto" />}
          >
            Solicitar Cotización
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg border-brand-blue px-5 text-brand-blue hover:bg-brand-blue/5 hover:text-brand-blue"
            nativeButton={false}
            render={<Link href="/trabaja-con-nosotros" />}
          >
            Trabaja con nosotros
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="text-brand-navy lg:hidden"
                aria-label="Abrir menú"
              />
            }
          >
            <Menu className="size-6" />
          </SheetTrigger>
          <SheetContent side="right" className="flex w-[85vw] max-w-sm flex-col sm:max-w-sm">
            <SheetHeader className="border-b border-black/5">
              <Logo />
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-6 py-6">
              {mainNav.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  active={pathname === item.href}
                  onClick={closeMenu}
                  className="border-b border-black/5 py-3 text-base"
                />
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-3 px-6 pb-8">
              <Button
                size="lg"
                className="rounded-lg bg-brand-blue text-white hover:bg-brand-blue/90"
                nativeButton={false}
                render={<Link href="/contacto" onClick={closeMenu} />}
              >
                Solicitar Cotización
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-lg border-brand-blue text-brand-blue hover:bg-brand-blue/5"
                nativeButton={false}
                render={<Link href="/trabaja-con-nosotros" onClick={closeMenu} />}
              >
                Trabaja con nosotros
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
