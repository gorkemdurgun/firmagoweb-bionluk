export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-4 bg-navy-700">
      <div className="inline-block w-full text-center justify-center bg-black">{children}</div>
    </section>
  );
}
