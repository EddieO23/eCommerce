import React from 'react';

import { ShoppingCart } from 'lucide-react';

function Navbar() {
  return (
    <div className="px-10 py-5 bg-cover">
      <header className='bg-[#FFFFFF38] px-8 rounded-md'>

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

        <ShoppingCart color='white' className='hover:cursor-pointer' size={48} />
      </nav>
      </header>
    </div>
  );
}

export default Navbar;
