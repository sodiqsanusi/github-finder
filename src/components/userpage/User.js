import {useParams} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import ErrorPage from '../404page/ErrorPage';
import Loading from './Loading';
import MainUser from './MainUser';


const User = () => {
   const { username } = useParams();
   const {data, isPending, error} = useFetch(`https://api.github.com/users/${username}`);

    return ( 
        <main id="userpage">
           {isPending && <Loading />}
           {data && <MainUser data={data} /> }
           {error && <ErrorPage />}
        </main>
     );
}
 
export default User;