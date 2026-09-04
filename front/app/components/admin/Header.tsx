const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h1 className="text-xl font-bold text-gray-900">
        Admin Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          Welcome, Admin
        </span>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200">
          A
        </div>
      </div>
    </header>
  );
};

export default Header;