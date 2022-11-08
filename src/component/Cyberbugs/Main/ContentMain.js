import React from "react";
import "./ContentMain.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PUT_PROJECT_DETAIL } from "../../../ulti/constants/Cyberbugs/Cyberbugs";
import { updateProjectAction } from "../../../redux/action/ProjectCyberBugsAction";

export default function ContentMain() {
  const dispatch = useDispatch();
  const { projectDetail } = useSelector((state) => state.ProjectReducer);

  const handleDragEnd = (result) => {
    let { taskId } = JSON.parse(result.draggableId);
    let { source, destination } = result;
    if (
      result.destination &&
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }

    let statusColumn = projectDetail.lstTask[Number(source.droppableId) - 1];
    const tempTask = statusColumn.lstTaskDeTail.find(
      (obj) => obj.taskId === taskId
    );
    tempTask.statusId = destination.droppableId;

    const destinationStatusColumn =
      projectDetail.lstTask[Number(destination.droppableId) - 1];
    destinationStatusColumn.lstTaskDeTail.push(tempTask);
    statusColumn = statusColumn.lstTaskDeTail.filter(
      (obj) => obj.taskId !== tempTask.taskId
    );

    let tempProjectLstTaskDetail = [...projectDetail.lstTask];
    tempProjectLstTaskDetail[Number(source.droppableId) - 1] = {
      ...projectDetail.lstTask[Number(source.droppableId) - 1],
      lstTaskDeTail: statusColumn,
    };
    tempProjectLstTaskDetail[Number(destination.droppableId) - 1] =
      destinationStatusColumn;

    const tempProjectDetail = {
      ...projectDetail,
      lstTask: tempProjectLstTaskDetail,
    };
    const action = {
      type: PUT_PROJECT_DETAIL,
      projectDetail: tempProjectDetail,
    };
    dispatch(action);
    updateProjectAction(tempProjectDetail)(dispatch);
  };

  const renderCardTaskList = () => {
    return (
      <DragDropContext onDragEnd={handleDragEnd}>
        {projectDetail.lstTask?.map((taskListDt, index) => {
          return (
            <Droppable key={index} droppableId={taskListDt.statusId}>
              {(provided) => {
                return (
                  <div
                    className="card pb-5"
                    style={{
                      width: "25%",
                      height: "auto",
                      boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                  >
                    <div
                      className="card-header"
                      style={{ height: "fit-content" }}
                    >
                      {taskListDt.statusName}
                    </div>
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      key={index}
                      className="list-group list-group-flush"
                      style={{ height: "100%" }}
                    >
                      {taskListDt.lstTaskDeTail?.map((task, index) => {
                        return (
                          <Draggable
                            key={task.taskId.toString()}
                            index={index}
                            draggableId={JSON.stringify({
                              projectId: task.projectId,
                              taskId: task.taskId,
                            })}
                          >
                            {(provided) => {
                              return (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  key={index}
                                  className="list-group-item"
                                  data-toggle="modal"
                                  data-target="#infoModal"
                                >
                                  <p>{task.taskName}</p>
                                  <div
                                    className="block"
                                    style={{ display: "flex" }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: "auto",
                                          height: 24,
                                          lineHeight: "34px",
                                        }}
                                      >
                                        <div style={{ cursor: "pointer" }}>
                                          <span
                                            style={{
                                              fontWeight: "bold",
                                              color: "#d40000",
                                              fontSize: "0.8rem",
                                            }}
                                          >
                                            {task.priorityTask.priority}
                                          </span>
                                        </div>
                                      </div>
                                      <div
                                        style={{
                                          width: 24,
                                          height: 24,
                                          lineHeight: "34px",
                                        }}
                                      >
                                        <div
                                          style={{ cursor: "pointer" }}
                                        ></div>
                                      </div>
                                    </div>
                                    <div className="block-right">
                                      <div
                                        className="avatar-group"
                                        style={{ display: "flex" }}
                                      >
                                        <div className="avatar-block">
                                          {task.assigness?.map((mem, index) => {
                                            return (
                                              <span
                                                className="user"
                                                key={index}
                                              >
                                                <img
                                                  src={mem.avatar}
                                                  alt={mem.avatar}
                                                />
                                              </span>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  </div>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    );
  };

  return (
    <div
      className="content"
      style={{
        display: "flex",
        width: "100%",
        margin: "0",
        paddingBottom: "100px",
      }}
    >
      {renderCardTaskList()}
    </div>
  );
}
