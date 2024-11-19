import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './BottomNav.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faListDots, faUser, faMessage} from '@fortawesome/free-solid-svg-icons';

const BottomNav=()=>{
    const [activeNav, setActiveNav] = useState(1);

    return(
        <nav className='nav-wrapper'>
            
                <Link to="/main" className="nav-link" onClick={()=> setActiveNav(1)}>
                    <div>
                        <FontAwesomeIcon icon={faHome} className={activeNav ===1 ? 'nav-active':'nav-nonActive'}/> {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
                    </div>
                </Link>
                <Link to="/message" className="nav-link" onClick={()=> setActiveNav(2)}>
                    <div>
                        <FontAwesomeIcon icon={faMessage} className={activeNav ===2 ? 'nav-active':'nav-nonActive'}/> {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
                    </div>
                </Link>
                <Link to="/login" className="nav-link" onClick={()=> setActiveNav(3)}>
                    <div>
                        <FontAwesomeIcon icon={faUser} className={activeNav ===3 ? 'nav-active':'nav-nonActive'}/> {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
                    </div>
                </Link>
        </nav>
    )
}

export default BottomNav;