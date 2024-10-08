import Repository from "./Repository";
import '../components/UserRepositories.css';

export default function UserRepositories() {
    return(
        <div id='repositories'>
            <Repository />
            <Repository />
            <Repository />
            <Repository />
        </div>
    )
}