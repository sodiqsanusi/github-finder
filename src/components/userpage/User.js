import {useParams} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Loading from './Loading';


const User = () => {
   const { username } = useParams();
   const {data, isPending} = useFetch(`https://api.github.com/users/${username}`);

    return ( 
        <main id="userpage">
           {isPending && <Loading />}
        </main>
     );
}
 
export default User;