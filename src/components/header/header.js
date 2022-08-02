import style from "./header.module.scss";
import { AiOutlineExpandAlt } from "react-icons/ai";
import { TbArrowsDiagonalMinimize2 } from "react-icons/tb";
import { FaFreeCodeCamp } from "react-icons/fa";

export const Header = (props) => {
    return (
        <header className={`${style.header} ${style[props.title]} ${""}`}>
            <div id={style.title}>
                <FaFreeCodeCamp id="fcc-icon" className={style.icon} />
                <label>{props.title}</label>
            </div>
            <div id={style.zoom}>
                <button onClick ={props.handleClick}>{props.expand ? <AiOutlineExpandAlt className={style.icon} /> : <TbArrowsDiagonalMinimize2 className={style.icon} /> }</button>  
            </div>
        </header>
    )
};

export default Header;
