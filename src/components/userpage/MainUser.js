import { Link } from 'react-router-dom';

const MainUser = ( {data} ) => {

//    THIS IS TO GET A CLEAR DATE FOR THE CREATION OF USER GITHUB ACCOUNT
    var changeData = data.created_at;
    var newData = "";
    const splitData= () => {
        for (let letter of changeData) {
            if(letter === "T") {
                break;
            } else {
              newData = newData + letter;
            }
        }
    }

    data.created_at && splitData();

  return (
    <section id="main-user">
        <article className="mainuser--intro">
        <div className="user-img"><img src={data.avatar_url} alt={`${data.name}'s profile on GitHub`}/></div>
        {data.name && <h2 className="mainuser--name">{data.name}</h2>}
        {data.location && <p className="mainuser--location">Location: {data.location}.</p>}
       { data.bio && <article>
            <h4>Bio</h4>
            <p className="bio">{data.bio}</p>
        </article>}
        <a href={data.html_url} target="_blank" rel="noreferrer"><button> Visit GitHub Acount</button></a>
        {data.login && <p className="github-username"><span className="details--definer">Github Username:</span> {data.login}.</p>}
        {data.email && <p className="github-username"><span className="details--definer">Email:</span> {data.email}.</p>}
        {data.company && <p className="github-username"><span className="details--definer">Works At:</span> {data.company}.</p>}
        {data.blog && <p className="github-username"><span className="details--definer">Website:</span> <a href={data.blog} target="_blank" rel="noreferrer">{data.blog}</a></p>}
        </article>

        <article className="mainuser--summary">
            <h4>User Summary</h4>
            <p className="bio">The user, @{data.login}, has {data.followers} {(data.followers === 1)? "follower" : "followers"} and is following {data.following}  {(data.following > 1)? "people" : "person"}. <br/>
            {data.public_repos} public {(data.public_repos === 1)? "repository" : "repositories"} {(data.public_repos === 1)? "has" : "have"} also been created by @{data.login} since joining Github on the date {newData}.
            </p>
        </article>
           
        <h4 className="ad">Built by <a href="https://github.com/sodiqsanusi"><button>Sodiq Sanusi</button></a></h4>  
        <Link to="/" className="final-button"><button>Back to homepage</button> </Link>
     
    </section>
  ) ;
}

export default MainUser