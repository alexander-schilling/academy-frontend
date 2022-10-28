import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ICourse } from "../interfaces/ICourse";

export const CoursePage = () => {
  const params = useParams();

  const [course, setCourse] = useState<ICourse | null>(null);
  const [currentTopic, setTopic] = useState<number>(0);

  const { courseId } = params;

  useEffect(() => {
    if (!courseId) {
      return;
    }
    const controller = new AbortController();

    axios(`${process.env.REACT_APP_BACKEND_URL}/courses/${courseId}`, {
      signal: controller.signal,
    })
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      controller.abort();
    };
  }, [courseId]);

  const renderTopicsIndex = () => {
    if (!course) {
      return null;
    }

    return (
      <div className="border-l-4 pl-6 mb-10 md:mb-0 w-full md:w-64">
        <h2 className="text-2xl font-bold">Tópicos</h2>
        <div className="prose">
          <ol>
            {course.topics.map((topic, index) => {
              return (
                <li
                  key={topic.id}
                  className={`${
                    index === currentTopic ? "text-primary" : ""
                  } cursor-pointer`}
                  onClick={() => setTopic(index)}
                >
                  {topic.title}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  };

  const renderCurrentTopic = () => {
    if (!course) {
      return null;
    }

    const topic = course.topics[currentTopic];

    if (!topic) return null;

    return (
      <div className="flex-auto">
        <div className="prose">
          <h1>{topic.title}</h1>
          <h2>{topic.description}</h2>
          <p>{topic.content}</p>
        </div>
      </div>
    );
  };

  if (!course) {
    return (
      <div className="container mx-auto py-10 flex justify-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-2">
      <div className="course-info card bg-base-200 mb-5">
        <div className="flex flex-col md:flex-row">
          <figure>
            <img
              src={course.imageUrl}
              alt="Imagen del curso"
              className="rounded-md max-h-auto md:max-h-32"
              style={{ objectFit: "cover" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {course.title}
              <div className="badge">{course.topics.length} tópicos</div>
            </h2>
            <p>{course.description}</p>
          </div>
        </div>
      </div>
      <div className="course-topics card bg-base-200">
        <div className="card-body flex flex-col-reverse md:flex-row">
          {renderCurrentTopic()}
          {renderTopicsIndex()}
        </div>
      </div>
    </div>
  );
};
