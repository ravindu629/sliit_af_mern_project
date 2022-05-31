import React from "react";
import "../App.css";

function StudentGroup() {
    return (
        <div className="sysMenu">

            <div className="navItem">
                <br/>
                <a href="/CreateStudentGroup">
                    <button type="button" className="stGroupPageBtn button2">
                        <pre> ➕ Create Student Group</pre>
                    </button>
                </a>
            </div>
            
        </div>
    )
}

export default StudentGroup;