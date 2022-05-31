import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

function StudentGroup() {
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

    function removeStudentGroup(_id) {
        axios
            .delete("http://localhost:5000/api/studentGroups/" + _id)
            .then((res) => {
                console.log(res.data);

                alert("Group deleted");
            })
            .catch((err) => {
                alert(err);
            });

        setGroups(groups.filter((group) => group._id !== _id));
    }


    return (
        <div className="sysMenu">

            <div className="navItem">
                <br />
                <a href="/CreateStudentGroup">
                    <button type="button" className="stGroupPageBtn button2">
                        <pre> ➕ Create Student Group</pre>
                    </button>
                </a>
            </div>

            <div className="all">
                <h2 className="heading">Students Group Details</h2>
                <table className="table table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Group ID</th>
                            <th scope="col">Group Name</th>
                            <th scope="col">Leader IT Number</th>
                            <th scope="col">Leader Name</th>
                            <th scope="col">Leader Email</th>
                            <th scope="col">Member 1 - IT Number</th>
                            <th scope="col">Member 1 - Name</th>
                            <th scope="col">Member 2 - IT Number</th>
                            <th scope="col">Member 2 - Name</th>
                            <th scope="col">Member 3 - IT Number</th>
                            <th scope="col">Member 3 - Name</th>
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
                                    <td>{group.leaderName}</td>
                                    <td>{group.leaderEmail}</td>
                                    <td>{group.member1ITNum}</td>
                                    <td>{group.member1Name}</td>
                                    <td>{group.member2ITNum}</td>
                                    <td>{group.member2Name}</td>
                                    <td>{group.member3ITNum}</td>
                                    <td>{group.member3Name}</td>
                                    <td>
                                        <a
                                            className="btn btn-warning"
                                            href={`/updateStudentGroup/${group._id}`}
                                        >
                                            <EditIcon /> Update
                                        </a>
                                        &nbsp;&nbsp;
                                        <a
                                            className="btn btn-danger"
                                            href="#"
                                            onClick={() => {
                                                if (
                                                    window.confirm(
                                                        "Are you sure you wish to delete this record?"
                                                    )
                                                )
                                                deletetudentGroup(group._id);
                                            }}
                                        >
                                            <DeleteForeverIcon /> Delete
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentGroup;