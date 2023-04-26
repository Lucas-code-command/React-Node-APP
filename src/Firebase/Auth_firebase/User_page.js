import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


export default function User_page(){
    const navigate = useNavigate()

    async function logOut(e){
        try{
            await signOut(auth)
            navigate('/auth')
        } catch(err){
            console.error(err)
        }

    }

    return(
        <div> 
            <h1>Hello,</h1>
            <h2>{auth?.currentUser?.email}</h2>

            <Button onClick={logOut}
                className="btn btn-primary w-100" type='submit'>
                    Log Off
            </Button>
        </div>
    )
}