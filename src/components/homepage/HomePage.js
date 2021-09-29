import octocatGif from '../../assets/octocat-gif.gif';
import {useState} from 'react';



const HomePage = () => {
  const [username, setUsername] = useState("");
  
  


  const handleSubmit= (e) => {
    e.preventDefault();
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
             name="usernameInput" className="search-input"
             value ={username}
             onChange = {(e) => {setUsername(e.target.value)}}
             />
            <input type="submit" value= "Search" className="input-search-button"/>
          </form>
          <div className="mascot-gif">
              <img src={octocatGif} alt="GitHub mascot 'Octocat' is  waving at you."/>
          </div>
        </main>
     );
}
 
export default HomePage;