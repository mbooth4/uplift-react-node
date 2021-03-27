import React from "react"
import ReactDOM from "react-dom"

// Launches a single-page-application containing sub-pages for each
// project that we will work on in class.
const App = () => {
    return <div>
        <h1>Index of projects</h1>
        <p>
            This document lists all of the sub-projects contained within the git repo.
            <br/><br />
            The projects are all included within a single project so a single 
            <code>npm install</code> will enable you to work in all of our differnt projects.
        </p>
        <div>
            <h3><a href="/projects/scratch/index.html">Scratch / playground</a></h3>
            <p>
                An empty React project for you to experiment with.
            </p>
        </div>
        <div>
            <h3><a href="/projects/players/index.html">Basketball Players</a></h3>
            <ul>
                <li>
                    Solution:{" "}
                    <a href="/solutions/players/index.html">
                        Basketball Players UI complete
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <h3><a href="/projects/fakester/index.html">Fakester</a></h3>
            <ul>
                <li>
                    Solution:{" "}
                    <a href="/solutions/fakester/index.html">
                        Fakester UI complete
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <h3><a href="/projects/restaurant/index.html">Restaurant</a></h3>
            <ul>
                <li>
                    Solution:{" "}
                    <a href="/solutions/restaurant/index.html">
                        Restaurant UI complete
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <h3><a href="/projects/todoapp/index.html">TODO App</a></h3>
            <ul>
                <li>
                    Solution:{" "}
                    <a href="/solutions/todoapp/index.html">
                        TODO App UI complete
                    </a>
                </li>
            </ul>
        </div>
    </div>;
}

ReactDOM.render(<App />, document.getElementById("root"))