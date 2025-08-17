import { Button } from "../../../../common/Button/Button";

export function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search courses..." />
      <Button buttonText="Search" onClick={() => alert("Search Clicked!")} />
    </div>
  );
}
