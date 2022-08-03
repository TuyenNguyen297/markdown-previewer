import Header from "../header/header.js";
import style from "./Editor.module.scss";
import "../../App.scss";
import { useEffect} from "react";

export default function Editor(props) {
  const handleClick = () => props.handleClick({ editor: !props.expand.editor });

  function handleInput(e) {
    props.handleInput(e.target.value);
  }

  useEffect(() => {
    //console.log("Editor: ",props.input);
  }, []);

  const classExpand = props.expand["editor"] ? `expand ${style["xpand"]} ` : "";
  const classHidden = props.expand["previewer"] ? "hidden" : "";
  console.log(classExpand + classHidden);
  return (
    <section id={style["editor-section"]} className={classHidden}>
      <Header
        handleClick={handleClick}
        expand={props.expand.editor}
        title={props.title}
      />
      <textarea
        value={props.input}
        onChange={handleInput}
        id="editor"
        className={classExpand}
      ></textarea>
    </section>
  );
}
