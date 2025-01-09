import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { HiMiniBars3 } from "react-icons/hi2";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/features/authSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const {auth} = useSelector((state) => state)
  console.log(auth)
  const dispatch = useDispatch();
  const handleLogout = () =>{
    dispatch(logOut())
    navigate('/signin')
  }
  const navItems = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "add job",
      path: "/addJob",
    },
    {
      name: "all jobs",
      path: "/allJob",
    },
  ];
  return (
    <nav className="p-6 flex flex-row justify-between border border-zinc-300 rounded-md m-3 items-center">
      <h2 className="text-3xl text-cyan-400 font-semibold">Job Portal</h2>
      <ul className="hidden md:flex flex-row space-x-2 text-xl capitalize">
        {navItems?.map((item, idx) => (
          <li key={idx}>
            <Link to={item?.path}>{item?.name}</Link>
          </li>
        ))}
      </ul>
      <div className="hidden md:block">
      {
              auth?.accessToken ? (
                <Button handler={handleLogout}>
              Logout
            </Button>
              ) : (
                <Button>
              <Link to={"/signin"}> Sign in</Link>
            </Button>
              )
            }
      </div>
      <div className="flex flex-col space-y-3 md:hidden">
      {open ? (
        <RxCross2
          className="cursor-pointer text-xl text-cyan-400 self-end"
          onClick={() => setOpen(false)}
        />
      ) : (
        <HiMiniBars3
          className="cursor-pointer text-xl text-cyan-400"
          onClick={() => setOpen(true)}
        />
      )}
      {open && (
        <ul className="flex flex-col space-y-2 text-xl capitalize">
          {navItems?.map((item, idx) => (
            <li key={idx}>
              <Link to={item?.path}>{item?.name}</Link>
            </li>
          ))}
          <li>
            {
              auth?.accessToken ? (
                <Button handler={handleLogout}>
              Logout
            </Button>
              ) : (
                <Button>
              <Link to={"/signin"}> Sign in</Link>
            </Button>
              )
            }
          </li>
        </ul>
      )}
      </div>
      
    </nav>
  );
};

export default Navbar;
