import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import './Breadcrumb.css';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav aria-label="breadcrumb" className="breadcrumb">
            <ol className="breadcrumb-list">
                <li className="breadcrumb-item">
                    <Link to="/" className="breadcrumb-link">
                        <Home size={16} />
                        <span>Home</span>
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li key={to} className="breadcrumb-item">
                            <ChevronRight size={16} className="breadcrumb-separator" />
                            {isLast ? (
                                <span className="breadcrumb-current" aria-current="page">
                                    {value.charAt(0).toUpperCase() + value.slice(1)}
                                </span>
                            ) : (
                                <Link to={to} className="breadcrumb-link">
                                    {value.charAt(0).toUpperCase() + value.slice(1)}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
