import React from "react";
import "../App.css";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export default function ViewMarksNavPage() {
    return (
        <div><br/><br/>
        <h2 align="center">Presentation Marks Progress</h2>
            <div style={{ marginLeft: 400, fontSize: 50 }}>
                <iframe title="myFrame001" width="900px" height="500x" src="https://charts.mongodb.com/charts-project-0-fthfb/embed/dashboards?id=1d3551ce-d2c4-4ef2-8804-93b3c56fb6bc&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=scale&scalingHeight=scale">

                </iframe>
            </div>
            <button  class="btn btn-warning" startIcon={<PictureAsPdfIcon />} onClick={window.print} style={{marginLeft:"15px"}}>
           <b>Download Report</b>
            </button>
        </div>

    );
}