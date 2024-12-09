'use client';

import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <aside
        className={`fixed lg:relative z-40 bg-gray-900 text-white h-screen lg:w-64 w-64 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform`}
      >
        <nav className="mt-8">
          <Link href="/dashboard" className="block py-2 px-4 hover:bg-gray-700">
            Dashboard
          </Link>
          <Link href="/dashboard/settings" className="block py-2 px-4 hover:bg-gray-700">
            Settings
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
