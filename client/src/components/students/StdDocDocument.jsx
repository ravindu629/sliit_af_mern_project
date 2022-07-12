import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function StdDocument(props) {
  const [upload, setUpload] = useState({
    groupID: "",
    groupName: "",
    leaderITNum: "",
    stdDocfile: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("stdDocfile", upload.stdDocfile);
    formData.append("groupID", upload.groupID);
    formData.append("groupName", upload.groupName);
    formData.append("leaderITNum", upload.leaderITNum);

    axios
      .post("http://localhost:5000/api/stdDocfiles", formData)
      .then(() => {
        alert("file added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setUpload((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function handleFile(e) {
    setUpload({ ...upload, stdDocfile: e.target.files[0] });
  }

  return (
    <div>
      <div>
        <div class="docSubmit1">
          <form onSubmit={sendData}>
            <table class="table table-striped stdTable1">
              <tbody>
                <tr>
                  <th scope="row" ></th>
                  <td ><h3 class="SubmitDocHead">Submit Documents</h3> </td>
                </tr>

                <tr>
                  <th scope="row">&nbsp;&nbsp;&nbsp;Group ID</th>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter Group ID"
                      name="groupID"
                      onChange={handleChange}
                      value={upload.groupID}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">&nbsp;&nbsp;&nbsp;Group Name</th>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter Group Name"
                      name="groupName"
                      onChange={handleChange}
                      value={upload.groupName}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">&nbsp;&nbsp;&nbsp;Leader IT Number</th>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter Leader IT Nummber"
                      name="leaderITNum"
                      onChange={handleChange}
                      value={upload.leaderITNum}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">&nbsp;&nbsp;&nbsp;Upload Document</th>
                  <td>
                    <input
                      type="file"
                      accept=".png, .pdf, .jpeg"
                      name="stdDocfile"
                      onChange={handleFile}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <button type="submit" style={{ fontSize: "110%", backgroundColor: "#4caf50" }}>
                      <b>Upload</b>
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </form><br />

          <div>
            <h5> If you have a large document file Upload below:</h5>
          </div>
          <div className="navItem">
            <a href="https://drive.google.com/drive/folders/1-YTswm8zPPp4P7eodwATGxHIiXc5wXuI?usp=sharing">
              <button type="button" className="AFRightNavBarButtons button1 button11">
                <pre>Upload Document</pre>
              </button><br />
            </a>
          </div>
        </div><br />

        <div class="docSubmit1">
          <h3 class="SubmitPptHead">Submit Presentations</h3><br/>

          <div className="navItem">
            <a href="https://drive.google.com/drive/folders/11epJr-JiIu_bbxHohzgQc5Elddv-Ni5H?usp=sharing">
              <button type="button" className="AFRightNavBarButtons button1 button11">
                <pre>Upload Presentations</pre>
              </button><br />
            </a>
          </div>
        </div><br /><br />





      </div>
    </div>
  );
}