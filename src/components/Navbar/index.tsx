import { Link } from 'react-router-dom';

import './styles.css';

const Navbar = () => {
  return (
    /*navbar navbar-expand-md navbar-dark bg-primary main-nav
    <nav className="navbar main-nav">
      <Link to="/" className="">
        <h4 className="text-primary">Github API</h4>
      </Link>
    </nav>*/

    <nav className="navbar navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <h4>Github API</h4>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
