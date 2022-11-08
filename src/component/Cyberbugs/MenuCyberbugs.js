import React from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../App";
import { USER_LOGIN } from "../../redux/types/UserCyberBugsType";
import { TOKEN } from "../../ulti/constants/settingSystem";

export default function MenuCyberbugs() {
  let userLogin = {};

  if (localStorage.getItem(USER_LOGIN)) {
    userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  }

  return (
    <div
      className="menu"
      style={{ position: "fixed", marginLeft: "5%", zIndex: "1" }}
    >
      <div className="account">
        <div className="avatar">
          <img src={userLogin.avatar} alt="avatar" />
        </div>
        <div className="account-info">
          <p>{userLogin.name}</p>
          <p>{userLogin.email}</p>
          <button
            onClick={() => {
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(TOKEN);
              localStorage.removeItem("accessToken");
              history.push("/");
              window.location.reload();
            }}
            className="text-blue-800"
          >
            Sign out
          </button>
        </div>
      </div>
      <div className="control p-0">
        <div>
          <i className="fa fa-cog mr-1" />
          <NavLink
            className="text-dark"
            activeStyle={{ color: "blue" }}
            to="/projectmanagement"
            activeClassName="active font-weight-bold text-primary"
          >
            Project Management
          </NavLink>
        </div>

        <div>
          <i className="fa fa-cog mr-1" />
          <NavLink
            className="text-dark"
            activeStyle={{ color: "blue" }}
            to="/createproject"
            activeClassName="active font-weight-bold text-primary"
          >
            Create Project
          </NavLink>
        </div>
      </div>

      <div className="feature p-0">
        <div>
          <i className="fa fa-equals mr-1" />
          <span>Issues and filters</span>
        </div>
        <div>
          <i className="fa fa-paste mr-1" />
          <span>Pages</span>
        </div>
        <div>
          <i className="fa fa-location-arrow mr-1" />
          <span>Reports</span>
        </div>
        <div>
          <i className="fa fa-box mr-1" />
          <span>Components</span>
        </div>
      </div>
    </div>
  );
}
