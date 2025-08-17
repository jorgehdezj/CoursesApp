import "./App.css";
import { CourseInfo } from "./components/CourseInfo/CourseInfo.tsx";
import { Courses } from "./components/Courses/components/Courses.tsx";
import { EmptyCourseList } from "./components/EmptyCorseList/EmptyCourseList.tsx";
import { Header } from "./components/Header/Header.tsx";

export default App;

function App() {
  return (
    <>
      <Header />
      <div className="courses-container">
        <Courses />
        <EmptyCourseList />
      </div>
    </>
  );
}
