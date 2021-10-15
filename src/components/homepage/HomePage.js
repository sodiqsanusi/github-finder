import octocatGif from '../../assets/octocat-gif.gif';
import {useState} from 'react';
import { useHistory} from 'react-router-dom';


const HomePage = () => {
  const [username, setUsername] = useState("");
  const history = useHistory();
  
  


  const handleSubmit= (e) => {
    e.preventDefault();
    history.push(`/${username}`)
  }


    return ( 
        <main id="homepage">
          <h4 className="illustration">
            Just type in a GitHub username and let us give you all its details! 
          </h4>
          <form 
          id="main-form"
          onSubmit= {handleSubmit}
          >
            <input
             type="search" placeholder="Search Username"
             required
             autoComplete = 'off'
             name="usernameInput" className="search-input"
             value ={username}
             onChange = {(e) => {setUsername(e.target.value)}}
             />
            <input type="submit" value="Search" className="input-search-button"/>
          </form>
          <h4 className="ad">Built by <a href="https://github.com/sodiqsanusi"><button>Sodiq Sanusi</button></a></h4>
          <div className="mascot-gif">
              <img src={octocatGif} alt="GitHub mascot 'Octocat' is  waving at you."/>
          </div>
        </main>
     );
}
 
export default HomePage;