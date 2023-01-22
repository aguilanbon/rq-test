import React from "react";

function NavigationBar() {
  return (
    <div className="navbar bg-base-200 mb-6">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">SuperHero Dex</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
