import React from 'react';
function Layout({ children }) {
  return (
    <div className="bg-black">
      <div className="container px-3.5 md:px-0 sm: py-0 md:w-full md:py-0 lg:w-full mx-auto ">
        {children}
      </div>
    </div>
  );
}

export default Layout;
