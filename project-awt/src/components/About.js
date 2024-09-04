import React from 'react' ;
import './about.css'
import photo from '../aboutpic.jpg'
import { Link } from 'react-router-dom';
 const About = () => {
  return (
    
    <div class="about-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="about-img">
                        <img src={photo} alt=""/>
                    </div>
                </div>
                <div class="col-lg-6 col-lg-offset-1">
                    <div class="about-text">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur cum magni labore suscipit quod fugiat architecto quam a iste nulla mollitia voluptas nobis odio voluptatibus soluta dolor, ad dolores, ea numquam cumque! Distinctio ad hic nulla repellendus autem delectus fuga expedita maiores ea cum reiciendis praesentium at, dolor officiis porro.</p>
                        <Link to="#">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default About;