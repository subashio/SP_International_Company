export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="my-24 min-h-screen w-full">
      <div className="flex flex-col">{children}</div>
    </main>
  );
}