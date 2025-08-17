import { Button } from "../../../../common/Button/Button";

export type CourseCardProps = {
  title: string;
  duration: string;
  description: string;
  creationDate: string;
  authors: string[];
};

export function CourseCard({
  title,
  duration,
  description,
  creationDate,
  authors,
}: CourseCardProps) {
  return (
    <div className="course-card">
      <h2>Course Title: {title}</h2>
      <div className="course-details">
        <div className="course-info">
          <p>{description}</p>
        </div>
        <div className="course-meta">
          <p className="course-authors">
            <strong>Authors</strong>: {authors}
          </p>
          <p>Duration: {duration} hours</p>
          <p>Creation Date: {creationDate}</p>
          <Button
            buttonText="Show course"
            onClick={() => alert("Button Clicked!")}
          />
        </div>
      </div>
    </div>
  );
}
