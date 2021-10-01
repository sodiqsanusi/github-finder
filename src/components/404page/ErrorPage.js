import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return ( 
        <main id="error-page" className="mainuser--intro">
          <h4>Sorry, an error as occured while fetching your data...</h4>
          <p className="bio">Go back to the homepage and make sure the username typed in is correct.</p> <br/>
          <Link to="/" className="final-button"><button>Go back to homepage</button></Link>
        </main>
     );
}
 
export default ErrorPage;