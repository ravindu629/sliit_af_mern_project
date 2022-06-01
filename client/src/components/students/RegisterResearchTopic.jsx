import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

//Create Register Research Topic
function AddResearchTopic() {
    const [valid, setValid] = useState(false);
    const [topic, setTopic] = useState({
        groupID: "",
        groupName: "",
        leaderITNum: "",
        leaderName: "",
        topicName: "",
        reqSupervisor: "",
        reqCoSupervisor: "",
    });

    let navigate = useNavigate();

    function sendData(e) {
        e.preventDefault();

        axios
            .post("http://localhost:5000/api/researchTopics", topic)
            .then(() => {
                alert("New Research Topics Added");
                setValid(true);
                navigate("/ResearchTopic");
            })
            .catch((err) => {
                alert(err);
            });

        setTopic({
            groupID: "",
            groupName: "",
            leaderITNum: "",
            leaderName: "",
            topicName: "",
            reqSupervisor: "",
            reqCoSupervisor: "",
        });
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setTopic((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    }

    return (
        <div className="container">
            <div className="formStyle2"><br/><br/>
                <h2 className="heading">Register Research Topic</h2>
                <form onSubmit={sendData}>
                    <div className="form-group row">
                        <label for="groupID" className="col-sm-3 col-form-label">
                            Group ID
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                id="groupID"
                                name="groupID"
                                placeholder="Enter Group ID"
                                onChange={handleChange}
                                value={topic.groupID}
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
                                value={topic.groupName}
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
                                value={topic.leaderITNum}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="topicName" className="col-sm-3 col-form-label">
                            Topic Name
                        </label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                id="topicName"
                                name="topicName"
                                placeholder="Enter Topic Name"
                                onChange={handleChange}
                                value={topic.topicName}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="reqSupervisor" className="col-sm-3 col-form-label">
                            Reqest Supervisor
                        </label>
                        <div className="col-sm-8">
                            <select className="form-control" name="reqSupervisor" placeholder="Select Supervisor" value={topic.reqSupervisor} onChange={handleChange} required>
                                <option selected disabled value="">Choose...</option>
                                <option>Mr. Thusithanjana Thilakarathna</option>
                                <option>Ms. Karthiga Rajendran</option>
                                <option>Ms. Karthiga Rajendran</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="reqSupervisor" className="col-sm-3 col-form-label">
                            Reqest Co-Supervisor
                        </label>
                        <div className="col-sm-8">
                            <select className="form-control" name="reqCoSupervisor" placeholder="Select Co-Supervisor" value={topic.reqCoSupervisor} onChange={handleChange} required>
                                <option selected disabled value="">Choose...</option>
                                <option>Ms. Dilani Lunugalage</option>
                                <option>Mr. Udara Samaratunge</option>
                                <option>Mr. Saranga Kularathna</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="btn-alignment">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary" >
                                    Submit
                                </button>
                            </div><br /><br /><br />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default AddResearchTopic;
