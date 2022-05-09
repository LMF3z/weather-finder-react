import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-14 lg:h-16 sticky bg-blue border-b-8 border-blue_dark text-white flex justify-center items-center z-50">
      <label className="text-lg lg:text-3xl">Buscador de clima</label>
    </header>
  );
};

export default Header;
