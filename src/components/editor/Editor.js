import Header from "../header/header.js";
import style from "./Editor.module.scss";
import "../../App.scss";

export default function Editor(props) {
  const handleClick = () => props.handleClick({ editor: !props.expand.editor });
  const classExpand = props.expand["editor"] ? "expand " : "";
  const classHidden = props.expand["previewer"] ? "hidden" : "";
  console.log(classExpand + classHidden)
  return (
    <section id={style["editor-section"]} className={classHidden}>
      <Header handleClick={handleClick} expand={props.expand.editor} title={props.title} />
      <textarea id="editor" className={classExpand}></textarea>
    </section>
  );
}
