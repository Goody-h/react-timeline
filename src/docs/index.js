import React from "react";
import { render } from "react-dom";
import Timeline from "../../dist";
import "./index.css";

const edu = [
    { inst: "University of Port-Harcourt", year: "2015 - 2020", cert: "Bachelor Degree (Mechanical Engr)" },
    { inst: "University of Port-Harcourt", year: "2015 - 2020", cert: "Bachelor Degree (Mechanical Engr)" },
    { inst: "University of Port-Harcourt", year: "2015 - 2020", cert: "Bachelor Degree (Mechanical Engr)" },
];

const Item = ({ inst, year, cert }) => (
    <div >
        <div>{year}</div>
        <br />
        <h4>{inst}</h4>
        <p>{cert}</p>
    </div>
);

function Demo() {
    return (
        <div>
            <h1>Demo with examples of the Timeline</h1>
            <Timeline
                objects={edu}
                component={Item}
                itemClass="class"
                itemAttributes={{"attr-1":"one", "attr-2":"two"}}
            /> 
        </div>
    );
}

render(<Demo />, document.getElementById("app"));
