import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/SortForm.css";

function SortForm(){

    //const location = useLocation();

    return (
        <div className="jumbotron">
            <div className="container d-flex justify-content-around flex-wrap">
                <Router>
                    <Link to="/">
                        <button className="btn btn-success">
                            Default
                        </button>
                    </Link>
                    <Link to="/male">
                        <button className="btn btn-success">
                            Filter for Men
                        </button>
                    </Link>
                    <Link to="/female">
                        <button className="btn btn-success">
                            Filter for Women
                        </button>
                    </Link>
                    <Link to="/sort">
                        <button className="btn btn-success">
                            Sort Alphabetically
                        </button>
                    </Link>
                </Router>
            </div>
        </div>
    );
}

export default SortForm;