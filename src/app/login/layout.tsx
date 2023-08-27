import { ReactNode } from "react";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen p-3 grid grid-cols-login">
      <section className="w-full h-full rounded-lg bg-logo-section-login bg-cover bg-no-repeat bg-center flex items-center justify-center">
        <img src="/images/book-wise-logo.svg" alt="BookWise Logo" />
      </section>

      <section className="flex items-center justify-center">{children}</section>
    </main>
  );
}
