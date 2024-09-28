import { FaMoon } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 base-container">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            ></div>
          </div>
          <Link className="btn  btn-active btn-primary text-3xl bg-[#057AFF]  text-[#DBE1FF] ">
            C
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className=" text-[#294E6A]" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className=" text-[#294E6A]" to={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className=" text-[#294E6A]" to={"/products"}>
                Products
              </Link>
            </li>
            <li>
              <Link className=" text-[#294E6A]" to={"/cart"}>
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <FaMoon className="text-2xl" />
          <SlBasket className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
