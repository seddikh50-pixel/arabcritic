const SideBar = () => {
  return (
    <aside className="fixed right-0 top-0 h-screen w-64 border-l bg-white">
      <div className="p-6">
        <h1 className="text-xl font-bold">Game Admin</h1>
      </div>

      <nav className="px-4">
        <a
          href="/admin"
          className="block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          Dashboard
        </a>

        <a
          href="/admin/games"
          className="mt-2 block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          Games
        </a>

        <a
          href="/admin/reviews"
          className="mt-2 block rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          Reviews
        </a>
      </nav>
    </aside>
  );
};

export default SideBar;