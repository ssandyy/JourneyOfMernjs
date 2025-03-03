import React from 'react';
import Title from '../components/Titles';

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to the About page. Here you can learn more about our company and team.</p>
            <Title name="John Doe" age="25" contactNumber="1234567890" school="XYZ School" rollno="12345" />
            <Title name="Saen Doe" age="27" contactNumber="1234567890" school="XYZ School" rollno="12347" />
            <Title name="Max Doe" age="21" contactNumber="1234567890" school="XYZ School" rollno="12347" />
        </div>
    );
};

export default About;