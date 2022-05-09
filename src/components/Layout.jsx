import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container mx-0 w-full h-90vh bg-white grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-4">
      {children}
    </div>
  );
};

export default Layout;
