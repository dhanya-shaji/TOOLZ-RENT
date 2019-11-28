import React from "react";
import { hashHistory } from "react-router";
import { Link } from "react-router";
export default class Sidebar extends React.Component {
  logout = () => {
    console.log("logout")
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('Username');
    sessionStorage.removeItem('id');
    window.location.reload();
    hashHistory.push({
        pathname: '/Login',
    })

}

  render() {
    return (
      <div className="app-sidebar sidebar-shadow">
        <div className="app-header__logo">
          <div className="logo-src"></div>
          <div className="header__pane ml-auto">
            <div></div>
          </div>
        </div>
        <div className="app-header__mobile-menu">
          <div>
            <button
              type="button"
              className="hamburger hamburger--elastic mobile-toggle-nav"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <div className="app-header__menu">
          <span>
            <button
              type="button"
              className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
            >
              <span className="btn-icon-wrapper">
                <i className="fa fa-ellipsis-v fa-w-6"></i>
              </span>
            </button>
          </span>
        </div>
        <div className="scrollbar-sidebar">
          <div className="app-sidebar__inner">
            <ul className="vertical-nav-menu">
              <li style={{ fontFamily: "Times New Roman", fontSize: "20px" }}>
                <Link to="/dashboard"><i className=" pe-7s-smile"></i> DASHBOARD</Link>
              </li>
              <li style={{ fontFamily: "Times New Roman", fontSize: "20px" }}>
                <Link to="/CustomerView"><i className=" pe-7s-users"></i> CUSTOMERS</Link>
              </li>
              <li style={{ fontFamily: "Times New Roman", fontSize: "20px" }}>
                <Link to="/ToolsView"><i className=" pe-7s-tools"></i> TOOLS</Link>
              </li>
              <li style={{ fontFamily: "Times New Roman", fontSize: "20px" }}>
                <Link to="/Rent_TableView"><i className=" pe-7s-culture"></i> RENT</Link>
              </li>
              <li style={{ fontFamily: "Times New Roman", fontSize: "20px" }}>
                <a href="">
                  <i className="metismenu-icon pe-7s-config"></i>
                  SETTINGS
                  <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                </a>
                <ul>
                  <li  style={{ fontFamily: "Times New Roman", fontSize: "15px" }}>
                  <Link to="/ChangePassword">
                  CHANGE PASSWORD
                  </Link>
                  </li>
                  <li style={{ fontFamily: "Times New Roman", fontSize: "15px" }}>
                     <Link to="" onClick={this.logout}> LOG OUT</Link>       
                  </li>
                </ul>
              </li>
            </ul>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
