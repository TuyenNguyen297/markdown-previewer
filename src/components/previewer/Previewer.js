import style from "../previewer/Previewer.module.scss";
import Header from "../header/header";
import "../../App.scss";

export default function Previewer(props) {
    const handleClick = () => props.handleClick({ previewer: !props.expand.previewer });
    const classExpand = props.expand["previewer"] ? "expand" : "";
    const classHidden = props.expand["editor"] ? "hidden" : "";
    return (
        <section id={style["section-previewer"]} className={classHidden}>
            <Header handleClick={handleClick} expand={props.expand.previewer} title={props.title} />
            <div id="preview" className={classExpand}></div>
        </section>
    );
}
