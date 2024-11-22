import { useLocation } from 'react-router-dom'; // React Router for navigation
import { Link } from 'react-router-dom'; // Replace Next.js Link
import logo from '/logo.png'; // Import the image statically

export default function Logo() {
  const location = useLocation(); // React Router hook
  const pathName = location.pathname;

  return (
    <div>
      <Link
        to={`/${pathName.split('/')[1]}`}
        className="text-2xl font-bold text-gray-900 dark:text-white flex flex-row"
      >
        <img src={logo} width={100} height={70} alt="logo" className="w-40" />
      </Link>
    </div>
  );
}
