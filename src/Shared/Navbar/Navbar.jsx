import { Link } from "react-router-dom";
import Button from "../../components/Button";


const Navbar = () => {
    const navItems = [
        {
            name: 'home',
            path: '/'
        },
        {
            name: 'add job',
            path: '/addJob'
        },
        {
            name: 'all jobs',
            path: '/jobs'
        }
    ]
    return (
        <nav className="p-6 flex flex-row justify-between border border-zinc-300 rounded-md m-3">
          <h2 className="text-3xl text-cyan-400 font-semibold">Job Portal</h2>  
          <ul className="flex flex-row space-x-2 text-xl capitalize">
            {
                navItems?.map((item, idx) =>(
                    <li key={idx}><Link to={item?.path}>{item?.name}</Link></li>
                ))
            }
          </ul>
          <div>
            <Button>
                <Link to={'/signin'}> Sign in</Link>
            </Button>
          </div>
        </nav>
    );
};

export default Navbar;