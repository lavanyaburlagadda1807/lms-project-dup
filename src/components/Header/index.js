import { useContext } from "react"

import ActiveTabContext from '../ActiveTabContext'

import './index.css'

const Header = () => {
    const { activeTab, toggleActiveTab } = useContext(ActiveTabContext)

    const changeInstructorTabId = () => {
        toggleActiveTab("INSTRUCTOR")
    }

    const changeStudentTabId = () => {
        toggleActiveTab("STUDENT")
    }

    return (
        <div className="home-container">
            <h1>LMS</h1>
            <div className="tab-container">
                <button type="button" onClick={changeInstructorTabId} className={activeTab === "INSTRUCTOR" ? "instructor-class" : "default"}>Instructor</button>
                <button type="button" onClick={changeStudentTabId} className={activeTab === "STUDENT" ? "student-class" : "default"}>Student</button>
            </div>
            <div className="profile-section">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" alt="profile" />
                <p>John Doe</p>
            </div>
        </div>
    )
}

export default Header