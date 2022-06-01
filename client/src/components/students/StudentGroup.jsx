import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

export default function StudentGroup() {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        function getGroups() {
            axios
                .get("http://localhost:5000/api/studentGroups")
                .then((res) => {
                    setGroups(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getGroups();
    }, []);

    function deleteStudentGroup(_id) {
        axios
            .delete("http://localhost:5000/api/studentGroups/" + _id)
            .then((res) => {
                console.log(res.data);

                alert("Student Group Deleted");
            })
            .catch((err) => {
                alert(err);
            });

        setGroups(groups.filter((group) => group._id !== _id));
    }



    return (
        <div className="all">
            <div>
                <a href="/CreateStudentGroup">
                    <button type="button" className="stGroupPageBtn button2">
                        <pre> ➕ Create Student Group</pre>
                    </button>
                </a>
                <button  class="reserchTopicPageBtn button4" onClick={window.print}> 📋 Download PDF</button>   
            </div>

            <h2 className="heading">Student Group Details</h2><br />

            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Group ID</th>
                        <th scope="col">Group Name</th>
                        <th scope="col">Leader IT Number</th>
                        <th scope="col">Member 1 IT Number</th>
                        <th scope="col">Member 2 IT Number</th>
                        <th scope="col">Member 3 IT Number</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody className="table-light">
                    {groups.map((group, index) => {
                        return (
                            <tr key={group._id}>
                                <td>{index + 1}</td>
                                <td>{group.groupID}</td>
                                <td>{group.groupName}</td>
                                <td>{group.leaderITNum}</td>
                                <td>{group.member1ITNum}</td>
                                <td>{group.member2ITNum}</td>
                                <td>{group.member3ITNum}</td>
                                <td>
                                    <a
                                        className="btn btn-warning"
                                        href={`/UpdateStudentGroup/${group._id}`}
                                    >
                                        <EditIcon />
                                        &nbsp;&nbsp; Update
                                    </a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <a
                                        className="btn btn-danger"
                                        href="#"
                                        onClick={() => {
                                            if (
                                                window.confirm(
                                                    "Are you sure you wish to delete this record?"
                                                )
                                            )
                                                deleteStudentGroup(group._id);
                                        }}
                                    >
                                        <DeleteForeverIcon />
                                        &nbsp;&nbsp; Delete
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div >
    )
}
