const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a href="/" className="text-2xl font-bold">CS-Ticket System</a>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 items-center font-semibold">
          <li>Home</li>
          <li>FAQ</li>
          <li>Changelog</li>
          <li>Blog</li>
          <li>Download</li>
          <li>Contact</li>
          <button className="btn bg-linear-135 via-[#8249EB] from-[#632EE3] to-[#9F62F2] text-white">
            + New Ticket
          </button>
        </ul>
      </div>
      {/* dropdown sm device */}
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />{" "}
          </svg>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0"
        >
          <li>Home</li>
          <li>FAQ</li>
          <li>Changelog</li>
          <li>Blog</li>
          <li>Download</li>
          <li>Contact</li>
          <button className="btn bg-linear-135 via-[#8249EB] from-[#632EE3] to-[#9F62F2] text-white">
            + New Ticket
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
