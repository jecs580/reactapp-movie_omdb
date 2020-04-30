import React  from "react";
import ReactDOM from "react-dom";
import List from "./containers/list";

// Importando bootswatch
import "bootswatch/dist/lux/bootstrap.min.css";

const App=()=>
     <main className="bg-dark"><div className="container"><List/></div>
</main>

ReactDOM.render(
    <App/>,
    document.getElementById('root'));