import React from 'react';
import Selector from './Selector'
import { BrowserRouter as Route, Link} from "react-router-dom";
import '../css/Menu.css'

const Menu = ({handleChange}) => {
    return (
        <div className="Menu">
                <nav>
                    <ul>
                        <li><Link to="/"><span class="primero"><i className="icon fas fa-home"></i></span>Accueil</Link></li>
                        <li><Link to="/leagues"><span className="tercero"><i className="icon fas fa-suitcase"></i></span>Leagues</Link></li>
                        <li><Link to="/teams"><span className="cuarto"><i className="icon fas fa-file-alt"></i></span>Teams</Link></li>
                        <li><span className="cuarto"><i className="icon fas fa-file-alt"><Selector handleChange={handleChange}/></i></span></li>
                    </ul>
                </nav>
                
                {/* <div>
                    <button><Link to="/">Accueil</Link></button>       
                </div>
                <div>
                    <button><Link to="/leagues">Leagues</Link></button>           
                </div>
                <div>
                    <button><Link to="/teams">Teams</Link></button>           
                </div> */}
                
        </div>
    )
}

export default Menu
