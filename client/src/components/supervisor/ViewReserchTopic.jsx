import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";


export default function AcceptResearchTopic() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        function getTopics() {
            axios
                .get("http://localhost:5000/api/researchTopics")
                .then((res) => {
                    setTopics(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getTopics();
    }, []);



    return (
        <div className="all">
            <div>
                <a href="/AcceptTopic">
                    <button type="button" className="reserchTopicPageBtn button3">
                        <pre>Accept Reserch Topics</pre>
                    </button>
                </a>  
               <br></br>
                <a href="/ViewAcceptTopic">
                    <button type="button" className="reserchTopicPageBtn button3">
                        <pre>Accept Reserch Topics</pre>
                    </button>
                </a>         
                       
                
            </div>

            <h2 className="heading">Research Topic Details</h2><br />

            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Group ID</th>
                        <th scope="col">Group Name</th>
                        <th scope="col">Leader IT Number</th>
                        <th scope="col">Topic Name</th>
                        <th scope="col">Reqest Supervisor</th>
                        <th scope="col">Reqest Co-Supervisor</th>
                       
                    </tr>
                </thead>

                <tbody className="table-light">
                    {topics.map((topic, index) => {
                        return (
                            <tr key={topic._id}>
                                <td>{index + 1}</td>
                                <td>{topic.groupID}</td>
                                <td>{topic.groupName}</td>
                                <td>{topic.leaderITNum}</td>
                                <td>{topic.topicName}</td>
                                <td>{topic.reqSupervisor}</td>
                                <td>{topic.reqCoSupervisor}</td>

                              
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div >
    )
}
