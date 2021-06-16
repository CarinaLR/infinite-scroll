import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSearch from "../Hooks/useSearch";

const Header = () => {
  const [query, setQuery] = useState(" ");
  const [pageNumber, setPageNumber] = useState(1);
  const { register, handleSubmit } = useForm();

  const handleSearch = (e) => {
    console.log("query ", e);
    setQuery(e.search);
    setPageNumber(1);
  };

  const onSubmit = (e) => {
    handleSearch(e);
  };

  useSearch(query, pageNumber);
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        <a
          className="navbar-brand"
          href="https://reactjs.org/docs/getting-started.html"
        >
          <img
            className="img-profile rounded-circle"
            src="assets/img/basixLogo.png"
            alt="..."
          ></img>
        </a>

        <form
          className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-6 my-md-0 mw-100 navbar-search"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="input-group">
            <input
              type="text"
              {...register("search")}
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-warning" type="submit" value="submit">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a
              className="nav-link dropdown-toggle"
              href="https://reactjs.org/docs/getting-started.html"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-search fa-fw"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="https://reactjs.org/docs/getting-started.html"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-bell fa-fw"></i>
            </a>
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 className="dropdown-header">Alerts Center</h6>
              <a
                className="dropdown-item d-flex align-items-center"
                href="https://reactjs.org/docs/getting-started.html"
              >
                <div className="mr-3">
                  <div className="icon-circle bg-primary">
                    <i className="fas fa-file-alt text-white"></i>
                  </div>
                </div>
              </a>
              <a
                className="dropdown-item d-flex align-items-center"
                href="https://reactjs.org/docs/getting-started.html"
              >
                <div className="mr-3">
                  <div className="icon-circle bg-success">
                    <i className="fas fa-donate text-white"></i>
                  </div>
                </div>
              </a>
              <a
                className="dropdown-item d-flex align-items-center"
                href="https://reactjs.org/docs/getting-started.html"
              >
                <div className="mr-3">
                  <div className="icon-circle bg-warning">
                    <i className="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
              </a>
            </div>
          </li>

          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="https://reactjs.org/docs/getting-started.html"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-envelope fa-fw"></i>
            </a>
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <h6 className="dropdown-header">Message Center</h6>
              <a
                className="dropdown-item d-flex align-items-center"
                href="https://reactjs.org/docs/getting-started.html"
              >
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                    alt=""
                  />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    Hi there! I have the photos that you ordered last month, how
                    would you like them sent to you?
                  </div>
                  <div className="small text-gray-500">Emily Fowler · 58m</div>
                </div>
              </a>

              <a
                className="dropdown-item d-flex align-items-center"
                href="https://reactjs.org/docs/getting-started.html"
              >
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="https://source.unsplash.com/AU4VPcFN4LE/60x60"
                    alt=""
                  />
                  <div className="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    Last month's report looks great, I am very happy with the
                    progress so far, keep up the good work!
                  </div>
                  <div className="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>

              <a
                className="dropdown-item text-center small text-gray-500"
                href="https://reactjs.org/docs/getting-started.html"
              >
                Read More Messages
              </a>
            </div>
          </li>

          <div className="topbar-divider d-none d-sm-block"></div>

          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="https://reactjs.org/docs/getting-started.html"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                Carina Lopez
              </span>
              <img
                className="img-profile rounded-circle"
                src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
                alt="..."
              />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a
                className="dropdown-item"
                href="https://reactjs.org/docs/getting-started.html"
              >
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <a
                className="dropdown-item"
                href="https://reactjs.org/docs/getting-started.html"
              >
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </a>
              <a
                className="dropdown-item"
                href="https://reactjs.org/docs/getting-started.html"
              >
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
              </a>
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href="https://reactjs.org/docs/getting-started.html"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
