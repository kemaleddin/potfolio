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

                    // Skip numeric IDs in display
                    if (!isNaN(Number(value))) return null;

                    // If explicit "work" segment, ensure we keep the context but maybe don't link if it is the last logical item
                    // For /timeline/work/1, 'work' is index 1. '1' is index 2.
                    // We want to show: Home > Timeline > Work

                    const isWorkPath = value === 'work';
                    // If we are at 'work' and there is a next segment which is a number, this is effectively the last "display" item
                    const isEffectivelyLast = isWorkPath && index < pathnames.length - 1 && !isNaN(Number(pathnames[index + 1]));

                    if (isLast || isEffectivelyLast) {
                        return (
                            <li key={to} className="breadcrumb-item">
                                <ChevronRight size={16} className="breadcrumb-separator" />
                                <span className="breadcrumb-current" aria-current="page">
                                    {value.charAt(0).toUpperCase() + value.slice(1)}
                                </span>
                            </li>
                        );
                    }

                    return (
                        <li key={to} className="breadcrumb-item">
                            <ChevronRight size={16} className="breadcrumb-separator" />
                            <Link to={to} className="breadcrumb-link">
                                {value.charAt(0).toUpperCase() + value.slice(1)}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
