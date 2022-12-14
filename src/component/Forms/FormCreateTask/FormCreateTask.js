import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Select, Slider } from "antd";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  getListProjectAction,
  getAllTaskType,
  getAllPriority,
} from "./../../../redux/action/ProjectCyberBugsAction";
import {
  getUserByProjectId,
  getUserSearchByProjectId,
} from "./../../../redux/action/UserCyberBugsAction";
import { withFormik } from "formik";
import * as Yup from "yup";
import { createTask } from "./../../../redux/action/TaskAction";
import { getAllStatus } from "../../../redux/action/StatusAction";

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function FormCreateTask(props) {
    
  const { arrProject } = useSelector((state) => state.ProjectCyberBugsReducer);
  const { arrTaskType } = useSelector((state) => state.ProjectCyberBugsReducer);
  const { arrPriority } = useSelector((state) => state.ProjectCyberBugsReducer);
  const { arrUser } = useSelector((state) => state.UserLoginCyberBugsReducer);
  const { arrStatus } = useSelector((state) => state.StatusReducer);

  const userOption = arrUser.map((item) => {
    return { value: item.userId, label: item.name };
  });

  const dispatch = useDispatch();

  const { handleChange, handleSubmit, setFieldValue } = props;

  const [timeTracking, setTimetracking] = useState({
    timeTrackingSpent: 0,
    timeTrackingRemaining: 0,
  });

  useEffect(() => {
    const action = getListProjectAction();
    dispatch(action);

    const action2 = getAllTaskType();
    dispatch(action2);

    const action3 = getAllPriority();
    dispatch(action3);

    const action6 = getAllStatus();
    dispatch(action6);

    dispatch({
      type: "SET_SUBMIT_CREATE_TASK",
      submitFunction: handleSubmit,
    });
  }, []);

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group">
        <p>Project</p>
        <select
          name="projectId"
          className="form-control"
          onChange={(e) => {
            let { value } = e.target;
            const action7 = getUserByProjectId(value);
            dispatch(action7);
          }}
        >
          {arrProject.map((project, index) => {
            return (
              <option key={index} value={project.id}>
                {project.projectName}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-group">
        <p>Task name</p>
        <input
          name="taskName"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>Status</p>
        <select
          name="statusId"
          className="form-control"
          onChange={handleChange}
        >
          {arrStatus.map((statusItem, index) => {
            return (
              <option key={index} value={statusItem.statusId}>
                {statusItem.statusName}
              </option>
            );
          })}
        </select>
      </div>

      <div className="form-group">
        <div className="row">
          <div className="col-6">
            <p>Priority</p>
            <select
              name="priorityId"
              className="form-control"
              onChange={handleChange}
            >
              {arrPriority.map((priority, index) => {
                return (
                  <option key={index} value={priority.priorityId}>
                    {priority.priority}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-6">
            <p>Task type</p>
            <select
              name="typeId"
              className="form-control"
              onChange={handleChange}
            >
              {arrTaskType.map((taskType, index) => {
                return (
                  <option key={index} value={taskType.id}>
                    {taskType.taskType}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="row">
          <div className="col-6">
            <p>Assignees</p>
            <Select
              mode="tags"
              placeholder="Please select"
              options={userOption}
              optionFilterProp="label"
              onChange={(values) => {
                setFieldValue("listUserAsign", values);
              }}
              onSearch={(value) => {
                const action4 = getUserSearchByProjectId(value);
                dispatch(action4);
              }}
              style={{
                width: "100%",
              }}
            >
              {children}
            </Select>
            <div className="row mt-3">
              <div className="col-12">
                <p>Original Estimate</p>
                <input
                  type="number"
                  className="form-control"
                  defaultValue="0"
                  min="0"
                  name="originalEstimate"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <p>Time tracking</p>
            <Slider
              defaultValue={30}
              tooltip={{ open: true }}
              value={timeTracking.timeTrackingSpent}
              max={
                Number(timeTracking.timeTrackingRemaining) +
                Number(timeTracking.timeTrackingSpent)
              }
            />
            <div className="row">
              <div className="col-6 text-left font-weight-bold">
                {timeTracking.timeTrackingSpent}h logged
              </div>
              <div className="col-6 text-right font-weight-bold">
                {timeTracking.timeTrackingRemaining}h remaining
              </div>
            </div>
            <div className="row" style={{ marginTop: 3 }}>
              <div className="col-6">
                <p>Time spent</p>
                <input
                  type="number"
                  className="form-control"
                  defaultValue="0"
                  min="0"
                  name="timeTrackingSpent"
                  onChange={(e) => {
                    setTimetracking({
                      ...timeTracking,
                      timeTrackingSpent: e.target.value,
                    });

                    setFieldValue("timeTrackingSpent", e.target.value);
                  }}
                />
              </div>
              <div className="col-6">
                <p>Time remaining</p>
                <input
                  type="number"
                  className="form-control"
                  defaultValue="0"
                  min="0"
                  name="timeTrackingRemaining"
                  onChange={(e) => {
                    setTimetracking({
                      ...timeTracking,
                      timeTrackingRemaining: e.target.value,
                    });

                    setFieldValue("timeTrackingRemaining", e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <p>Description</p>
        <Editor
          name="description"
          init={{
            selector: "textarea#myTextArea",
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor |  alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help",
          }}
          onEditorChange={(content, editor) => {
            setFieldValue("description", content);
          }}
        />
      </div>
    </form>
  );
}

const frmCreateTask = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { arrProject, arrTaskType, arrPriority, arrStatus } = props;

    if (arrProject.length > 0) {
      const action8 = getUserByProjectId(arrProject[0]?.id);
      props.dispatch(action8);
    }

    return {
      taskName: "",
      description: "",
      statusId: arrStatus[0]?.statusId,
      originalEstimate: 0,
      timeTrackingSpent: 0,
      timeTrackingRemaining: 0,
      projectId: arrProject[0]?.id,
      typeId: arrTaskType[0]?.id,
      priorityId: arrPriority[0]?.priorityId,
      listUserAsign: [],
    };
  },
  validationSchema: Yup.object().shape({}),
  handleSubmit: (values, { props }) => {
    const action5 = createTask(values);
    props.dispatch(action5);
  },
  displayName: "CreateTaskForm",
})(FormCreateTask);

const mapStateToProps = (state) => {
  return {
    arrProject: state.ProjectCyberBugsReducer.arrProject,
    arrTaskType: state.ProjectCyberBugsReducer.arrTaskType,
    arrPriority: state.ProjectCyberBugsReducer.arrPriority,
    arrStatus: state.StatusReducer.arrStatus,
  };
};

export default connect(mapStateToProps)(frmCreateTask);
