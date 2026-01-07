import Projects from '../components/Projects';
import Breadcrumb from '../components/Breadcrumb';
import '../App.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Work = () => {
    const { experienceId } = useParams();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="work-page" style={{ paddingTop: '2rem', paddingBottom: '2rem', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
            <div className="timeline-header-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem 0' }}>
                <Breadcrumb />
            </div>
            <Projects experienceId={experienceId ? parseInt(experienceId) : undefined} />
        </div>
    );
};

export default Work;
