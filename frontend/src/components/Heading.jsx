import './Heading.css';

export default function Heading({
    text = "Heading",
    color = "white"
}){
    return(
        <span className={'Heading '+color+"Text"}>
            {text}
        </span>
    );
}