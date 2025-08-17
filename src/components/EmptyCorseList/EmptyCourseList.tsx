import { Button } from "../../common/Button/Button";

export function EmptyCourseList() {
  return (
    <div className="empty-course-list">
      <h2>The course list is empty</h2>
      <p>Please use the "Add New Course" button to add your first course</p>
      <Button buttonText="Add New Course" onClick={() => console.log("test")} />
    </div>
  );
}
