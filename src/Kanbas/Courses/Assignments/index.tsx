import React, { useState } from "react";
import {
  FaCheckCircle,
  FaEllipsisV,
  FaPlusCircle,
  FaPencilAlt,
} from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";

import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";

function Assignments() {
  const { courseId } = useParams();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState("");

  const assignmentList = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  );

  const filteredAssignmentList = assignmentList.filter(
    (assignment) => assignment.course === courseId
  );

  const dispatch = useDispatch();

  let navigate = useNavigate();
  const NavigateAssignmentEditor = (assignmentId: string) => {
    navigate(`${assignmentId}`);
  };

  interface ConfirmDialogProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
  }

  function ConfirmDialog({ isOpen, onConfirm, onCancel }: ConfirmDialogProps) {
    if (!isOpen) return null;

    return (
      <div className="alert alert-danger" role="alert">
        <div>
          <p>Are you sure you want to remove this assignment?</p>
          <button onClick={onConfirm} className="btn btn-primary">Yes</button>
          <button onClick={onCancel} className="btn btn-secondary">No</button>
        </div>
      </div>
    );
  }

  const handleDeleteClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    assignmentId: string
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDialogOpen(true);
    setSelectedAssignmentId(assignmentId);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteAssignment(selectedAssignmentId));
    setIsDialogOpen(false);
    setSelectedAssignmentId("");
  };

  return (
    <div className="list-group mb-3 me-5">
        <ConfirmDialog
        isOpen={isDialogOpen}
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsDialogOpen(false)}
      />
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
          <button
            className="btn btn-light me-2"
            onClick={() => NavigateAssignmentEditor("new")}
          >
            <FaPlusCircle />
          </button>
          <button className="btn btn-light me-2">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      {filteredAssignmentList.map((assignment) => (
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
          className="list-group-item"
          key={assignment._id}
          style={{ borderLeft: "4px solid green" }}
          onClick={() => dispatch(setAssignment(assignment))}
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
          <button
            onClick={(event) => handleDeleteClick(event, assignment._id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </Link>
      ))}

    </div>
  );
}
export default Assignments;
