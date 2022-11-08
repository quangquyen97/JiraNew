import BaseServices from "./baseService";

export class StatusService extends BaseServices {
  constructor() {
    super();
  }

  getAllStatus = () => {
    return this.get("/api/Status/getAll");
  };
}

export const statusService = new StatusService();
