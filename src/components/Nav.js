import React, { Component } from "react";
import "../styles/nav.css";

class Navbar extends Component {
  state = {
    viewAccounts: false,
    toggleNav: false
  };
  render() {
    return (
      <div className="nav">
        <div
          onClick={() => this.setState({ toggleNav: !this.state.toggleNav })}
          className={this.state.toggleNav ? "navBtn active" : "navBtn"}
        >
          <span />
          <span />
        </div>
        <div className="_title">
          <h3>App Co.</h3>
        </div>
        <div
          className={this.state.viewAccounts ? "accBtn view" : "accBtn"}
          onClick={() =>
            this.setState({ viewAccounts: !this.state.viewAccounts })
          }
        >
          <span className="icon" />
          <span className="accImage">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
            </svg>
          </span>
          <span className="toolkit">My Accounts</span>
        </div>
        <nav className={this.state.toggleNav ? "active" : ""}>
          <h3>welcome and have a great experince</h3>
          <ul>
            <ol>Home</ol>
            <div>
              <li>login</li>
              <li>sign in</li>
              <li>refresh account</li>
              <li>ratings</li>
              <li>action</li>
            </div>
          </ul>
          <ul>
            <ol>Blocks</ol>
            <div>
              <li>
                Feature <span />
              </li>
              <li>
                Code Repo <span />{" "}
              </li>
              <li>
                Build <span />
              </li>
              <li>
                Quality <span />
              </li>
              <li>
                monitor <span />
              </li>
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
