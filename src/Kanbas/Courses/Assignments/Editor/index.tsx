import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../../store";

import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";

function AssignmentEditor() {
  const { assignmentId } = useParams();

  const assignmentList = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );

  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();

  const { courseId } = useParams();

  const navigate = useNavigate();
  const handleSave = () => {
    if (assignmentId === "new") {
      dispatch(addAssignment({ ...assignment, course: courseId }));
    } else {
      dispatch(updateAssignment({ assignment }));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div>
      <div className="d-flex flex-row justify-content-end">
        <span style={{ color: "green" }}>
          <FaCheckCircle />
          Published
        </span>
        <button type="button" className="btn btn-light">
          <FaEllipsisV />
        </button>
      </div>
      <hr />
      <form>
        <table>
          <tr>
            <td>
              <label htmlFor="assignmentName" className="form-label">
                Assignment Name
              </label>
            </td>
            <td>
              <input
                value={assignment.title}
                className="form-control mb-2"
                onChange={(e) =>
                  dispatch(
                    setAssignment({ ...assignment, title: e.target.value })
                  )
                }
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="assignmentDescription" className="form-label">
                Assignment Description
              </label>
            </td>
            <td>
              <textarea
                className="form-control"
                id="assignmentDescription"
                value={assignment.description}
                onChange={(e) =>
                  dispatch(
                    setAssignment({
                      ...assignment,
                      description: e.target.value,
                    })
                  )
                }
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="points" className="form-label">
                Points
              </label>
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                id="points"
                value={assignment.points}
                onChange={(e) =>
                  dispatch(
                    setAssignment({ ...assignment, points: e.target.value })
                  )
                }
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="due" className="form-label">
                Due
              </label>
            </td>
            <td>
              <input
                type="date"
                className="form-control"
                id="dueDate"
                value={assignment.dueDate}
                onChange={(e) =>
                  dispatch(
                    setAssignment({ ...assignment, dueDate: e.target.value })
                  )
                }
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="availableFromDate" className="form-label">
                Available From
              </label>
            </td>
            <td>
              <input
                type="date"
                className="form-control"
                id="availableFromDate"
                value={assignment.availableFromDate}
                onChange={(e) =>
                  dispatch(
                    setAssignment({
                      ...assignment,
                      availableFromDate: e.target.value,
                    })
                  )
                }
              />
            </td>
          </tr>

          <tr>
            <td>
              <label htmlFor="availableUntilDate" className="form-label">
                Available Until
              </label>
            </td>
            <td>
              <input
                type="date"
                className="form-control"
                id="availableUntilDate"
                value={assignment.availableUntilDate}
                onChange={(e) =>
                  dispatch(
                    setAssignment({
                      ...assignment,
                      availableUntilDate: e.target.value,
                    })
                  )
                }
              />
            </td>
          </tr>

          <button
            onClick={handleSave}
            className="btn btn-success ms-2 float-end"
          >
            Save
          </button>
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end"
          >
            Cancel
          </Link>
        </table>
      </form>
    </div>
  );
}
export default AssignmentEditor;
