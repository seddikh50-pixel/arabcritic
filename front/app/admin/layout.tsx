import React from "react";
import Providers from "../utils/Providers";
import SideBar from "../components/admin/SideBar";
import Header from "../components/admin/Header";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <div className="min-h-screen bg-gray-100">

        <SideBar />

        <div className="mr-64">
          <Header />

          <main className="p-2">
            {children}
          </main>
        </div>

      </div>
    </Providers>
  );
}