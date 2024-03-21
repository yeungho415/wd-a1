import React, { useState } from "react";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  return (
    <>
      <form className="border rounded p-3">
        <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div className="d-flex flex-row m-3 align-items-center">
              <div className="d-flex flex-column m-2">
                <input
                  value={module.name}
                  onChange={(e) =>
                    dispatch(setModule({ ...module, name: e.target.value }))
                  }
                  className="mb-2"
                />
                <textarea
                  value={module.description}
                  onChange={(e) =>
                    dispatch(
                      setModule({ ...module, description: e.target.value })
                    )
                  }
                />
              </div>
              <button
                onClick={() =>
                  dispatch(addModule({ ...module, course: courseId }))
                }
                className="btn btn-primary"
              >
                Add
              </button>
              <button
                onClick={() => dispatch(updateModule(module))}
                className="btn btn-success"
              >
                Update
              </button>
            </div>
          </li>

          {moduleList
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item">
              <div>
                <h5>{module.name}</h5>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>

                <p>{module.description}</p>
              </div>
              <hr />
                <button
                  onClick={() => dispatch(setModule(module))}
                  className="btn btn-primary btn-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteModule(module._id))}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </form>
    </>
  );
}
export default ModuleList;
