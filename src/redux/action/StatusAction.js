import { statusService } from "../../services/StatusService";
import { GET_ALL_STATUS } from "../types/StatusType";

export const getAllStatus = () => {
  return async (dispatch) => {
    try {
      const result = await statusService.getAllStatus();
      dispatch({
        type: GET_ALL_STATUS,
        arrStatus: result,
      });
    } catch (err) {

    }
  };
};
