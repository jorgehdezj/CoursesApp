import type { CourseCardProps } from "../Courses/components/CourseCard/CourseCard.tsx";
import { Button } from "../../common/Button/Button.tsx";

export function CourseInfo(course: CourseCardProps) {
  return (
    <div className="course-card">
      <h2>Course Title: {course.title}</h2>
      <div className="course-details">
        <div className="course-info">
          <p>{course.description}</p>
        </div>
        <div className="course-meta">
          <p className="course-authors">
            <strong>Authors</strong>: {course.authors}
          </p>
          <p>Duration: {course.duration} hours</p>
          <p>Creation Date: {course.creationDate}</p>
          <Button
            buttonText="Back to courses"
            onClick={() => alert("Button Clicked!")}
          />
        </div>
      </div>
    </div>
  );
}
