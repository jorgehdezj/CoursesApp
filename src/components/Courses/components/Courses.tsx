import { mockedCoursesList } from "../../../constants";
import { mockedAuthorsList } from "../../../constants";
import { CourseCard } from "./CourseCard/CourseCard.tsx";
import { getCourseDuration } from "../../../helpers/getCourseDuration.ts";
import { formatCreationDate } from "../../../helpers/formatCreationDate.ts";
import { Button } from "../../../common/Button/Button.tsx";
import { SearchBar } from "./SearchBar/SearchBar.tsx";

export function Courses() {
  return (
    <>
      <div className="courses-search">
        <SearchBar />
        <Button
          buttonText="Add new Course"
          onClick={() => alert("Button Clicked!")}
        />
      </div>

      {mockedCoursesList.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          duration={getCourseDuration(course.duration)}
          description={course.description}
          creationDate={formatCreationDate(course.creationDate)}
          authors={mockedAuthorsList
            .filter((author) => course.authors.includes(author.id))
            .map((author) => author.name)}
        />
      ))}
    </>
  );
}
