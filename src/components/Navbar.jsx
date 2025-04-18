import React from 'react';

import { ShoppingCart } from 'lucide-react';

function Navbar() {
  return (
    <div className="px-10 py-5 h-screen bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1713271320856-c7a30ae22cd2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <nav className='flex items-center'>
        {/* Logo */}
        <div className='hover:cursor-pointer text-blue-500'>
          <div className=''>
            <p className='text-lg'>grocify</p>
          </div>
        </div>

        <ul className='flex-1 text-center'>
          <li className='list-none inline-block px-5'>
            <a className='text-white px-2' href='#'>Home</a>
          </li>
          <li className='list-none inline-block px-5'>
            <a className='text-white px-2' href='#'>About</a>
          </li>
          <li className='list-none inline-block px-5'>
            <a className='text-white px-2' href='#'>Features</a>
          </li>
          <li className='list-none inline-block px-5'>
            <a className='text-white px-2' href='#'>Contact</a>
          </li>
        </ul>

        <ShoppingCart className='hover:cursor-pointer' size={48} />
      </nav>
    </div>
  );
}

export default Navbar;
