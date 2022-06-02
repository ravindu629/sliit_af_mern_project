import React from "react";
import "../App.css";

function AFpage() {
  return (
    <div class="AFstyles">

      <div>
        <br /><h2 class="FirstH1"><pre>  Welcome to Application Frameworks SE3040!</pre></h2><br />
        <p><b><pre>   • LIC: Mr. Thusithanjana Thilakarathna</pre></b>
          <pre>        Email - thusithanjana.t@sliit.lk</pre>
          <b><pre>   • Instructor: Ms. Karthiga Rajendran</pre></b>
          <pre>        Email - karthiga.r@sliit.lk</pre></p>
      </div>

      <div class="AFRightNavBar">
        <div class="AFRightNavBarBody">

          <div className="navItem">
            <a href="/StudentGroup">
              <button type="button" className="AFRightNavBarButtons button1">
                <pre> Student Groups</pre>
              </button>
            </a>
          </div><br/>

          <div className="navItem">
            <a href="/ResearchTopic">
              <button type="button" className="AFRightNavBarButtons button1">
                <pre>Research Topic</pre>
              </button>
            </a>
          </div><br/>

          <div className="navItem">
            <a href="/ViewMarksNavPage">
              <button type="button" className="AFRightNavBarButtons button1">
                <pre>View Marks</pre>
              </button>
            </a>
          </div>

        </div>
      </div>

    </div>
  )
}


export default AFpage;