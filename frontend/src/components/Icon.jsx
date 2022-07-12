import './Icon.css';

export default function Icon({
    src = null,
    type = null,
    link = null
}) {
    return (
        <span className="icon">
            <img src={src} onClick={()=>{
                window.open(type=="mail"?("mailto:"+link):(link), '_blank');
                }} />
        </span>
    );
}