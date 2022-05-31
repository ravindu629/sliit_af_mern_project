import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import "../App.css";

function UpdateStudentGroup() {
    const [group, setGroup] = useState({
        groupID: "",
        groupName: "",
        leaderEmail: "",
        leaderITNum: "",
        leaderName: "",
        member1ITNum: "",
        member1Name: "",
        member2ITNum: "",
        member2Name: "",
        member3ITNum: "",
        member3Name: "",
    });

  let navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    function getGroup() {
      axios
        .get(`http://localhost:5000/api/studentGroups/${id}`)
        .then((res) => {
          setGroup(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getGroup();
  }, []);

  function sendData(e) {
    e.preventDefault();

    const updatedGroup = group;

    axios
      .put(`http://localhost:5000/api/studentGroups/${id}`, updatedGroup)
      .then(() => {
        alert("Group Updated");
        navigate("/StudentGroup");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setGroup((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
        <div className="formStyle2">
            <h2 className="heading">Update Student Group</h2>
            <form onSubmit={sendData}>
                <div className="form-group row">
                    <label for="groupID" className="col-sm-3 col-form-label">
                        Group ID
                    </label>
                    <div className="col-sm-8" >
                        <input
                            type="text"
                            className="form-control"
                            id="groupID"
                            name="groupID"
                            placeholder="Enter Group ID"
                            onChange={handleChange}
                            value={group.groupID}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="groupName" className="col-sm-3 col-form-label">
                        Group Name
                    </label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control"
                            id="groupName"
                            name="groupName"
                            placeholder="Enter Group Name"
                            onChange={handleChange}
                            value={group.groupName}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="leaderITNum" className="col-sm-3 col-form-label">
                        Leader IT Number
                    </label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control"
                            id="leaderITNum"
                            name="leaderITNum"
                            placeholder="Enter Leader IT Number"
                            onChange={handleChange}
                            value={group.leaderITNum}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="leaderName" className="col-sm-3 col-form-label">
                        Leader Name
                    </label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control"
                            id="leaderName"
                            name="leaderName"
                            placeholder="Enter Leader Name"
                            onChange={handleChange}
                            value={group.leaderName}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="leaderEmail" className="col-sm-3 col-form-label">
                        Leader Email
                    </label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control"
                            id="leaderEmail"
                            name="leaderEmail"
                            placeholder="Enter Leader Email Address"
                            onChange={handleChange}
                            value={group.leaderEmail}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="member1ITNum" className="col-sm-3 col-form-label">
                        Member 1 - IT Number
                    </label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control"
                            id="member1ITNum"
                            name="member1ITNum"
                            placeholder="Enter Member 1 - IT Number"
                            onChange={handleChange}
                            value={group.member1ITNum}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="member1Name" className="col-sm-3 col-form-label">
                        Member 1 - Name
                    </label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control"
                            id="member1Name"
                            name="member1Name"
                            placeholder="Enter Member 1 - Name"
                            onChange={handleChange}
                            value={group.member1Name}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="member2ITNum" className="col-sm-3 col-form-label">
                        Member 2 - IT Number
                    </label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control"
                            id="member2ITNum"
                            name="member2ITNum"
                            placeholder="Enter Member 2 - IT Number"
                            onChange={handleChange}
                            value={group.member2ITNum}
                            required
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="member2Name" className="col-sm-3 col-form-label">
                        Member 2 - Name
                    </label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control"
                            id="member2Name"
                            name="member2Name"
                            placeholder="Enter Member 2 - Name"
                            onChange={handleChange}
                            value={group.member2Name}
                            required
                        />
                    </div>
                </div><div className="form-group row">
                    <label for="member3ITNum" className="col-sm-3 col-form-label">
                        Member 3 - IT Number
                    </label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control"
                            id="member3ITNum"
                            name="member3ITNum"
                            placeholder="Enter Member 3 - IT Number"
                            onChange={handleChange}
                            value={group.member3ITNum}
                            required
                        />
                    </div>                        
                </div><div className="form-group row">
                    <label for="member3Name" className="col-sm-3 col-form-label">
                        Member 3 - Name
                    </label>
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control"
                            id="member3Name"
                            name="member3Name"
                            placeholder="Enter Member 3 Name"
                            onChange={handleChange}
                            value={group.member3Name}
                            required
                        />
                    </div>
                </div>
            <div className="form-group row">
            
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  <b style={{ fontSize: "110%" }}>Update</b>
                </button>
              </div>
            </div>
          </form>
        </div><br/><br/>
      </div>
    
  );
}

export default UpdateStudentGroup;
