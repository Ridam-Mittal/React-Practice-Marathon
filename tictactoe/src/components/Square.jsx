import React from 'react';

function Square({ val, index, choosesquare}) {
  const getBorderRadius = () => {
    if (index === 0) return "rounded-tl-lg"; 
    if (index === 2) return "rounded-tr-lg";
    if (index === 6) return "rounded-bl-lg"; 
    if (index === 8) return "rounded-br-lg";
    return ""; 
  };

  return (
    <div
      className={`w-[33.3%] border h-[100%] flex justify-center items-center ${getBorderRadius()} active:bg-slate-900 active:scale-101 transition-transform duration-400 ease-in-out `}
      onClick={choosesquare}
    >
      {val}
    </div>
  );
}

export default Square;
