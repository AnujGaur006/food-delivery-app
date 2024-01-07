import User from './user';
import UserClass from './userClass';

const AboutUs = () => {
    return (
        <div id='about-us'>
            <h1>About Us</h1>
            <h2>Welcome to Food-Delivery-App. Best Place to cater to your taste buds!!!</h2>
            <UserClass name='Anuj' location='Lucknow' handle='being-Indian@x'/>
            {/* <UserClass name="Rajdeep" location="Mohali" handle='proud-Munda@x'/> */}
        </div>
    );
}

export default AboutUs;