import { courses } from "../Database";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import "./index.css";

function Courses() {
  const { courseId } = useParams();
  const location = useLocation();
  const course = courses.find((course) => course._id === courseId);

  const pathSegments = location.pathname.split("/");
  const currentPage = pathSegments[pathSegments.length - 1];

  const formatPageTitle = (page: string): string => {
    if (page === "") return "Home";
    return page.charAt(0).toUpperCase() + page.slice(1);
  };
  return (
    <div>
      <div className="title">
        <h4 className="navigation">
          <HiMiniBars3 />
        </h4>
        <h4>
          {course?.number} {course?.name}{" "}
          <span>
            {"> "}
            {formatPageTitle(currentPage)}
          </span>
        </h4>
      </div>

      <div className="row">
        <div className="col-md-2">
          <CourseNavigation />
        </div>
        <div className="col-md-6">
          <div
            className=" bottom-0 end-0"
            style={{ left: "320px", top: "50px" }}
          >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor />}
              />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <h2>Status</h2>
            <button className="btn btn-light">Unpublish</button>
            <button className="btn btn-success">Publish</button>
            <br />
            <button className="btn btn-light">Import Existing Content</button>
            <br />
            <button className="btn btn-light">Import From Commons</button>
            <br />
            <button className="btn btn-light">Choose Home Page</button>
            <br />
            <button className="btn btn-light">View Course Stream</button>
            <br />
            <button className="btn btn-light">New Announcement</button>
            <br />
            <button className="btn btn-light">New Analytics</button>
            <br />
            <button className="btn btn-light">View Course Notifications</button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;
