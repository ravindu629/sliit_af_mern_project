import React from "react";
import "../App.css";

export default function ViewMarksNavPage() {
    return (
        <div><br/><br/>
        <h2 align="center">Students progress</h2>
            <div style={{ marginLeft: 290, fontSize: 20 }}>
                <iframe title="myFrame001" width="900" height="490" src="https://charts.mongodb.com/charts-project-0-fthfb/embed/dashboards?id=37f2d895-5425-4a2d-8419-a7302dfefbff&theme=light&autoRefresh=true&maxDataAge=10&showTitleAndDesc=false&scalingWidth=scale&scalingHeight=scale"></iframe>
            </div>
        </div>

    );
}
