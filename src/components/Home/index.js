import { useEffect, useState, useContext, useCallback } from "react";

import CreateCard from "../CreateCardPopUp";
import ActiveTabContext from "../ActiveTabContext";
import Header from "../Header";
import CardItem from "../Carditem";
import Footer from "../Footer";

import './index.css'

// const apiStatusConstants = {
//   initial: 'INITIAL',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
//   inProgress: 'IN_PROGRESS',
// }

const instructorList = [
  {
    projectId: 0,
    category: 'INSTRUCTOR',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },
  {
    projectId: 1,
    category: 'INSTRUCTOR',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
  },
  {
    projectId: 2,
    category: 'INSTRUCTOR',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },
  {
    projectId: 3,
    category: 'INSTRUCTOR',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s2-img.png',
    title: 'Happy Meals',
    description: 'Discover the best foods in over 1,000 restaurants.',
  },
  {
    projectId: 8,
    category: 'INSTRUCTOR',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 10,
    category: 'INSTRUCTOR',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
]

const studentList = [
  {
    projectId: 4,
    category: 'STUDENT',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 5,
    category: 'STUDENT',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
  },
  {
    projectId: 6,
    category: 'STUDENT',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },
  {
    projectId: 7,
    category: 'STUDENT',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r1-img.png',
    title: 'Design',
    description:
      'A website to showcase the best features and give more information about the Design tool.',
  },
  {
    projectId: 9,
    category: 'STUDENT',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
]

const Home = () => {
  const [courseList, setCourseList] = useState(instructorList);
  const { activeTab } = useContext(ActiveTabContext)

  // const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  // const renderCards = async () => {
  //   setApiStatus(apiStatusConstants.inProgress);
  //   const apiUrl = `https://jsonplaceholder.typicode.com/users`;
  //   const options = {
  //     method: "GET",
  //   };
  //   const response = await fetch(apiUrl, options);
  //   if (response.ok) {
  //     const fetchedData = await response.json();
  //     console.log(fetchedData)
  //     const updatedData = fetchedData.map((eachUser) => ({
  //       id: eachUser.id,
  //       name: eachUser.name,
  //       email: eachUser.email,
  //     }));
  //     setApiStatus(apiStatusConstants.success);
  //     setCourseList(updatedData);
  //   }
  // };

  const renderCards = useCallback(() => {
    if (activeTab === "INSTRUCTOR") {
      setCourseList(instructorList)
    } else {
      setCourseList(studentList)
    }
  }, [activeTab])


  useEffect(() => {
    renderCards()

  }, [renderCards])

  return (
    <div className="home-container">
      <Header />
      <div className="top-section">
        <h1>My Courses</h1>
        <CreateCard />
      </div>
      <ul>
        {courseList.map((eachCourse) => (
          <CardItem courseDetails={eachCourse} key={eachCourse.projectId} />
        ))}
      </ul>
      <Footer length={courseList.length} />
    </div>
  );
};

export default Home;
