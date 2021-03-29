import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import {Link } from "react-router-dom";
import {loadCourses, deleteCourse} from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourse());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourse().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange);
    }, []);

function onChange(){
   setCourses(courseStore.getCourse());
}

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
          Add Course 
          </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}

export default CoursesPage;
