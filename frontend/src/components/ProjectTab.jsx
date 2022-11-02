import Heading from './Heading';
import './ProjectTab.css';

export default function ProjectTab({
    name = "Project Name",
    link = "#",
    className = ""
}) {
    return (
        <div className={className + " projectTab"} onClick={() => {window.open(link, '_blank');}}>
            <Heading color='white' text={name} />
        </div>
    );
}