import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjectDetailAction } from "../../redux/action/ProjectCyberBugsAction";
import { updateStatusAction } from "../../redux/action/TaskAction";
import ContentMain from "./Main/ContentMain";
import HeaderMain from "./Main/HeaderMain";
import InfoMain from "./Main/InfoMain";

export default function IndexCyberBugs(props) {
  const { projectDetail } = useSelector((state) => state.ProjectReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const { projectId } = props.match.params;
    dispatch(getProjectDetailAction(projectId));
    const { arrStatus } = props.match.params;
    dispatch(updateStatusAction(arrStatus));
  }, []);

  return (
    <div className="main container mt-5">
      <HeaderMain projectDetail={projectDetail} />

      <InfoMain projectDetail={projectDetail} />

      <ContentMain />
    </div>
  );
}
