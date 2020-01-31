import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact path={StreamList} />;
          <Route path="/streams/new" exact path={StreamCreate} />;
          <Route path="/streams/edit" exact path={StreamEdit} />;
          <Route path="/streams/delete" exact path={StreamDelete} />;
          <Route path="/streams/show" exact path={StreamShow} />;
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
