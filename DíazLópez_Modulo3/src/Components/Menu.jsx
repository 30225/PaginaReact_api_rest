import {Link} from "react-router-dom"
function Menu(){
    return (
        <div>
            <ul>
            <li><Link to="/">Portada</Link></li>
            <li><Link to="/alta">Quienes Somos</Link></li>
            </ul>
        </div>
    )
}

export default Menu