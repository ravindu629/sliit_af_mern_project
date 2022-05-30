import React from "react";
import "../App.css";
import Welcomeimage from "../images/WelcomeInStudentMainPage.jpg";

export default function StudentMainPage() {
  return (

    <div className="sysMenu">
      <div class="StdLeftContent">
        <br /> <br />
        <div className="WlcomeImg">
          <img className="img-std-WelcomeInMainPage" src={Welcomeimage} />
        </div>
        <br /><br />

        <div className="navItem">
          <a href="/AFpage">
            <button type="button" className="stMainPageBtn button1">
              <pre>Application Frameworks - SE3040                               🎓</pre>
            </button>
          </a>
        </div>
        <hr width="50%" />

        <div className="navItem">
          <a href="/DSpage">
            <button type="button" className="stMainPageBtn button1">
              <pre>Distributed Systems - SE3020                                  🎓</pre>
              <i class="glyphicon glyphicon-user"></i>
            </button>
          </a>
        </div>
        <hr width="50%" />

        <div className="navItem">
          <a href="/SApage">
            <button type="button" className="stMainPageBtn button1">
              <pre>Software Architecture - SE3030                                🎓</pre>
            </button>
          </a>
        </div>
        <hr width="50%" />
      </div>



      <div class="StudentSupportServices">
        <div class="StdSup">
          <h2 class="StudentSupportServicesH2"> 🧑‍💻 Support Services</h2>
          <br />
          <h3><pre> 🌐 SLIIT Student Support</pre></h3><br />
          <h4><pre>      https://support.sliit.lk</pre></h4>
          <h3><pre> 📞 Hotline No</pre></h3><br />
          <h4><pre>      8.30 AM to 5.00 PM <br /></pre></h4>
          <h4><pre>      • 011 754 4801</pre></h4>
        </div>
      </div>


    </div>);
}


