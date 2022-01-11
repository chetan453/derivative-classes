import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import './CSS/CourseDetails.css'

function CourseDetails() {
    const [redirect, setRedirect] = useState(false);
    return (
        <div id="course-details">
            <h1>JEE Advanced Crash Course details</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            Features
                        </th>
                        <th>
                            Details/Available
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Dedicated Study material
                        </td>
                        <td>
                            <span>&#10003;</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Live Classes
                        </td>
                        <td>
                            <span>&#10003;</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Recordings are available
                        </td>
                        <td>
                            <span>&#10003;</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Mock test
                        </td>
                        <td>
                            <span>&#10003;</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Course Duration
                        </td>
                        <td>
                            6 weeks
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Test twice a week
                        </td>
                        <td>
                            <span>&#10003;</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Topic Based learning
                        </td>
                        <td>
                            <span>&#10003;</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Price
                        </td>
                        <td>
                            7000/-
                        </td>
                    </tr>
                </tbody>
            </table>
            <h4>
                If you are not sure whether you have to apply or not we can also scheduled a demo class for you just register here
            </h4>
            <button onClick={() => setRedirect(true)} className="btn btn-success">Register for demo class</button>
            {redirect ? <Redirect push to="/demo-registration" /> : null}
        </div>
    )
}

export default CourseDetails
