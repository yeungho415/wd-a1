import React from "react";
import {
  FaCheckCircle,
  FaEllipsisV,
  FaPlusCircle,
  FaPencilAlt,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="list-group mb-3 me-5">
      <div
        className="d-flex justify-content-between align-items-center list-group-item"
        style={{ backgroundColor: "lightgrey" }}
      >
        <div className="d-flex align-items-center">
          <FaEllipsisV className="me-2" />
          <h3 className="mb-0">Assignments</h3>
        </div>
        <div>
          <span className="border rounded px-2">40% of Total</span>
          <button className="btn btn-light me-2">
            <FaPlusCircle />
          </button>
          <button className="btn btn-light me-2">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      {assignmentList.map((assignment) => (
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
          className="list-group-item"
          key={assignment._id}
          style={{ borderLeft: "4px solid green" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <FaEllipsisV className="me-2" />
              <FaPencilAlt className="me-2" />
              <div>
                <h5 className="mb-1">{assignment.title}</h5>
                <p className="mb-0">
                  Multiple modules | Not available | 100pts
                </p>
              </div>
            </div>
            <div>
              <FaCheckCircle className="me-2" />
              <FaEllipsisV className="me-2" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Assignments;
