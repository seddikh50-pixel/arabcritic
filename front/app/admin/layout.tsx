export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <aside>
        Admin Sidebar
      </aside>

      <main>
        {children}
      </main>
    </div>
  );
}