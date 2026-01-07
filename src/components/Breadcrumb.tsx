import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Breadcrumb.css';

const Breadcrumb = () => {
    const location = useLocation();
    const { t } = useTranslation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const getBreadcrumbName = (path: string) => {
        if (path === 'timeline') return t('breadcrumb.timeline');
        if (path === 'work') return t('breadcrumb.work');
        return path.charAt(0).toUpperCase() + path.slice(1);
    };

    return (
        <nav aria-label="breadcrumb" className="breadcrumb">
            <ol className="breadcrumb-list">
                <li className="breadcrumb-item">
                    <Link to="/" className="breadcrumb-link">
                        <Home size={16} />
                        <span>{t('breadcrumb.home')}</span>
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    // Skip numeric IDs in display
                    if (!isNaN(Number(value))) return null;

                    const isWorkPath = value === 'work';
                    // If we are at 'work' and there is a next segment which is a number, this is effectively the last "display" item
                    const isEffectivelyLast = isWorkPath && index < pathnames.length - 1 && !isNaN(Number(pathnames[index + 1]));

                    if (isLast || isEffectivelyLast) {
                        return (
                            <li key={to} className="breadcrumb-item">
                                <ChevronRight size={16} className="breadcrumb-separator" />
                                <span className="breadcrumb-current" aria-current="page">
                                    {getBreadcrumbName(value)}
                                </span>
                            </li>
                        );
                    }

                    return (
                        <li key={to} className="breadcrumb-item">
                            <ChevronRight size={16} className="breadcrumb-separator" />
                            <Link to={to} className="breadcrumb-link">
                                {getBreadcrumbName(value)}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
