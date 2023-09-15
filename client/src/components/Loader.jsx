import React from 'react';

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-t-4 border-[#0C356A] border-solid rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
}

export default Loader;