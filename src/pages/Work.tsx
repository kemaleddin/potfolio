import Projects from '../components/Projects';
import Breadcrumb from '../components/Breadcrumb';
import '../App.css'; // Ensure main styles are available if needed
import { useEffect } from 'react';

const Work = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="work-page" style={{ paddingTop: '2rem', paddingBottom: '2rem', minHeight: '100vh', backgroundColor: '#0A1929' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <Breadcrumb />
            </div>
            <Projects />
        </div>
    );
};

export default Work;
