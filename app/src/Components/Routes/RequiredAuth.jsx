import { useContext } from "react"
import { Link} from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const RequiredAuth = ({children})=>{
const {token}=useContext(AuthContext);
//const location=useLocation();
if(token) return children;
    return <h3>Please <Link to = "/login">login</Link> to access this page</h3>
}