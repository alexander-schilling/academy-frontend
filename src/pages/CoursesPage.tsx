import React, { useState, useEffect } from "react";
import axios from "axios";
import { ICourse } from "../interfaces/ICourse";
import { Link } from "react-router-dom";

export const CoursesPage = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    axios(`${process.env.REACT_APP_BACKEND_URL}/courses`, {
      signal: controller.signal,
    })
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const renderCourse = (course: ICourse) => {
    return (
      <Link
        key={course.id}
        to={`/courses/${course.id}`}
        className="card w-96 bg-base-200 shadow-xl"
      >
        <figure>
          <img
            src={course.imageUrl}
            alt="Imagen del curso"
            style={{ width: "100%", height: "14rem", objectFit: "cover" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {course.title}{" "}
            <span className="badge text-sm">
              {course.topics.length} tópicos
            </span>
          </h2>

          <p>{course.description}</p>
        </div>
      </Link>
    );
  };

  const renderCourses = () => {
    return courses.map((course) => {
      return renderCourse(course);
    });
  };

  return (
    <div className="container py-10 mx-auto px-2">
      <div className="flex flex-col md:flex-row justify-center gap-5">
        {renderCourses()}
      </div>
    </div>
  );
};
