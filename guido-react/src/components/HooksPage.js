import React, {useState, useEffect} from "react";
import { getCourses } from "../api/courseApi";


function HooksPage() {
    const [courses, setCourses] = useState([]); 



useEffect(()=> {
    getCourses().then(_courses => setCourses({_courses}));
}, []);
  return (
        <>
        <h2>Hooks</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author ID</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
        </>
        );    
}

export default HooksPage;