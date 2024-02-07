import React from "react";

const Navbar = () => {
  return (
    <div className="flex py-5 flex-wrap justify-around mt-5">
      <h1 className="text-xl font-semibold">Todo App</h1>
      <ul className="flex gap-[40px] text-lg">
        <li>Home</li>
        <li>About</li>
        <li>Github</li>
      </ul>
    </div>
  );
};

export default Navbar;
