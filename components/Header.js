const Header = () => {
    return (
      <header className="flex items-center justify-between bg-gray-800 text-white px-6 py-4 shadow-md">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="hidden sm:inline">Welcome, Admin</span>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
            Logout
          </button>
        </div>
      </header>
    );
  };
  
  export default Header;
  