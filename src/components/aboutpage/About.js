import {FaRegEnvelope, FaPhone, FaFacebookF } from 'react-icons/fa' ;

const About = () => {
    return ( 
        <main id="about">

            <h2>About GitHub Find</h2>
            <article className="about--article">
             <p>This web application was created for checking profiles on GitHub
                 without having to login into GitHub itself. <br/>
                 To begin, go to the homepage and type in a GitHub username.
             </p>
            </article>
              
            <h2>Who built this site?</h2>
            <article className="about--article">
                <p>This site was created by a beginner front-end developer(emphasis on beginner) as his
                 project with React.js. <br/>
                   You can check him up on any social media platform, Sodiq Sanusi.
                </p>
            </article>

            <ul>
              <li><a href="mailto:ademilddiq@gmail.com"><FaRegEnvelope value={{size: "5rem"}}/> </a></li>
              <li><a href="tel:+2347015108706"> <FaPhone /></a></li>
              <li><a href="https://www.facebook.com/sodiqsanusi0" target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
            </ul>
        </main>
     );
}
 
export default About;