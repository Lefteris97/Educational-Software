import './Menu.css'
import { Link } from 'react-router-dom'
import { AiFillHome, AiOutlineTeam } from "react-icons/ai";
import { BiBook, BiSolidPencil } from "react-icons/bi";

const Menu = ({role}) =>{

    return (
        <div className="menu">
            <div className="menuItem">
                <span className="title">MENU</span>
                <Link to={'/'} className='listItem'>
                    <AiFillHome size={21}/>
                    <span className="listItemTitle">Home</span>
                </Link>
                <Link to={'/theory'} className='listItem'>
                    <BiBook size={21}/>
                    <span className="listItemTitle">Theory</span>
                </Link>
                <Link to={'/exercises'} className='listItem'>
                    <BiSolidPencil size={21}/>
                    <span className="listItemTitle">Exercises</span>
                </Link>
                {(role === 'admin' || role === 'teacher') && (
                    <>
                        <span className="title">DASHBOARD</span>
                        
                        {role === 'admin' && (
                        <>
                            <Link to={'/dash/users'} className="listItem">
                                <AiOutlineTeam size={21}/>
                                <span className="listItemTitle">Users</span>
                            </Link>
                        </>
                        )}
                        <Link to={'/dash/lessons'} className="listItem">
                            <BiBook size={21}/>
                            <span className="listItemTitle">Theory</span>
                        </Link>
                        <Link to={'/dash/exercises'} className="listItem">
                            <BiSolidPencil size={21}/>
                            <span className="listItemTitle">Exercises</span>
                        </Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default Menu