import style from "../previewer/Previewer.module.scss";
import Header from "../header/header";
import "../../App.scss";
import React, { useEffect } from "react";

import { marked } from "marked";
import Prism from "prismjs";

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});


export default function Previewer(props) {
  const handleClick = () =>
    props.handleClick({ previewer: !props.expand.previewer });
  const classExpand = props.expand["previewer"] ? "expand" : "";
  const classHidden = props.expand["editor"] ? "hidden" : "";

  useEffect(() => {

  }, [props.input]);

  return (
    <section id={style["section-previewer"]} className={classHidden}>
      <Header
        handleClick={handleClick}
        expand={props.expand.previewer}
        title={props.title}
      />
      <div id="preview" className={classExpand} dangerouslySetInnerHTML={{__html: marked.parse(props.input)}}></div>
    </section>
  );
}
