import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";


export default function ResearchTopic() {
    const [accept, setTopics] = useState([]);

    useEffect(() => {
        function getTopics() {
            axios
                .get("http://localhost:5000/api/acceptTopic")
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
           
           <button  class="btn btn-success" onClick={window.print}>Download Details </button>
            <h2 className="heading">Accepted/rejected Topic Details</h2><br />

            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Group ID</th>
                        <th scope="col">Group Name</th>
                        <th scope="col">Leader IT Number</th>
                        <th scope="col">Topic Name</th>
                        <th scope="col">Status</th>
                       
                       
                    </tr>
                </thead>

                <tbody className="table-light">
                    {accept.map((accept, index) => {
                        return (
                            <tr key={accept._id}>
                                <td class="table-primary">{index + 1}</td>
                                <td class="table-secondary">{accept.groupID}</td>
                                <td class="table-success">{accept.groupName}</td>
                                <td class="table-danger">{accept.leaderITNum}</td>
                                <td class="table-warning">{accept.topicName}</td>
                                <td class="table-info" >{accept.status}</td>
                                

                                
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div >
    )
}
