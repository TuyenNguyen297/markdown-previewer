import "./App.scss";
import Editor from "./components/editor/Editor";
import Previewer from "./components/previewer/Previewer";
import { useState, useCallback } from "react";

function App() {
  const [expand, setExpand] = useState({ editor: false, previewer: false });
  const handleClick = useCallback((component) => {
    console.log(component);
    setExpand(component);
  }, []);

  return (
    <article className="App">
      <Editor handleClick={handleClick} expand={expand} title="editor" />
      <Previewer handleClick={handleClick} expand={expand} title="previewer" />
    </article>
  );
}

export default App;
