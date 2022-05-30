import React from "react";
import "../App.css";
import Welcomeimage from "../images/WelcomeInStudentMainPage.jpg";

function StudentMainPage() {
  return (  
  
  <div className="sysMenu">

    <br/>  
    <div  className="WlcomeImg">
      <img className="img-std-WelcomeInMainPage" src={Welcomeimage} />
    </div>
    <br/>

  <div className="navItem">
    <a href="/AFpage">
      <button type="button" className="stMainPageBtn">
          <pre>Application Frameworks - SE3040                                               🎓</pre>
      </button>
    </a>
  </div>
  <hr/>

  <div className="navItem">
    <a href="/DSpage">
      <button type="button" className="stMainPageBtn">
          <pre>Distributed Systems - SE3020                                                  🎓</pre>
          <i class="glyphicon glyphicon-user"></i>
      </button>
    </a>
  </div>
  <hr/>

  <div className="navItem">
    <a href="/SApage">
      <button type="button" className="stMainPageBtn">
          <pre>Software Architecture - SE3030                                                🎓</pre>
      </button>
    </a>
  </div>
  <hr/>
  
</div>);
}

export default StudentMainPage;
