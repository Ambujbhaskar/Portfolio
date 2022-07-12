import Heading from './Heading';
import Icon from './Icon';
import './MainInfoCard.css';
export default function MainInfoCard(){
    return(
        <div className="infoCard">
            <div>
                <Heading text="Web Developer" color="violet" />
                <Heading text=' . ' color='white' />
                <Heading text='Web Designer' color='pink' /> 
            </div>
            <p className='body'>
                I’m a Web Developer based in New Delhi who makes human-centered, real-world, aesthetically pleasing web applications.
            </p>
            <Heading text='My Technologies and Tools' color='blue'/>
            <p className='body'>
                React.JS   Node.JS   Express.JS   HTML   CSS  JavaScript   Java   Python   MySQL   NextJS   Figma   AdobeXD   Illustrator   InDesign   Fusion360
            </p>
            <Heading text='How to find me?' color='blue' />
            <div className='icons'>
                <Icon src={"./assets/GHLogoWhite.png"} link="https://github.com/Ambujbhaskar" />
                <Icon src={"./assets/gmailLogo.png"} link="bhaskarambuj7@gmail.com" type="mail" />
                <Icon src={"./assets/LinkedInIcon.png"} link="https://www.linkedin.com/in/ambujbhaskartiwari/" />
            </div>
        </div>
    );
}