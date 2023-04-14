import { Link, Outlet } from 'react-router-dom';

export default function Parameters (){
    return(
        <>
            <button><Link  to='/parameters/1'><h1>Param 1</h1></Link></button>
            <h1>Param 2</h1>
            <h1>Param 3</h1>
            
        </>
    )
}
