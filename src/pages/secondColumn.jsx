import React, { Component } from "react";
import settingsIcon from "../assets/cog.svg";

import GraphChart from "../components/GraphChart";
import BarGraph from "../components/_BarChart";
import CircleChart from "../components/CircleChart";

export default class SecondColumn extends Component {
  state = {
    toggleNav: false,
    viewAccounts: false,
    settingToggleFeatures: false,
    settingToggleBuild: false,
    settingToggleMonitor: false,
    settingToggleCode_repo: false,
    settingToggleQuantity: false,
    maxSize_1: false,
    maxSize_2: false,
    maxSize_3: false,
    toggleRefresh: true,
    buildAutoRefresh: true,
    disableMonitor: false,
    onlineStatus: true,
    currentSize: 100,
    featureData: {
      total: 31,
      wip: 22,
      done: 5
    },
    commit: {
      total: 35,
      last7days: 10,
      last14days: 15
    },
    contributors: {
      total: 20,
      last7days: 15,
      last14days: 5
    },
    graphData: [],
    barData: [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
      }
    ],
    radialData: [
      {
        name: "40-50",
        uv: 10,
        pv: 90
      }
    ],
    analysis: [
      {
        blocker: 0,
        critical: 0,
        major: 0,
        issues: 43
      },
      {
        blocker: null,
        critical: null,
        major: null,
        issues: null
      }
    ]
  };
  render() {
    return (
      <div
        className={
          this.props.maxSize_2
            ? "column main"
            : this.props.maxSize_1 || this.props.maxSize_3
            ? "column min"
            : "column"
        }
      >
        <header>
          <span>Build</span>
          <img
            src={settingsIcon}
            alt="setting icon"
            onClick={() =>
              this.setState({
                settingToggleBuild: !this.state.settingToggleBuild
              })
            }
          />
        </header>
        <span
          className={
            this.state.settingToggleBuild ? "settingsTag edit" : "settingsTag"
          }
        />
        <div
          className={
            this.state.settingToggleBuild ? "settings edit" : "settings"
          }
        >
          <div className="settingsOption">
            <p
              onClick={() =>
                this.setState({
                  buildAutoRefresh: !this.state.buildAutoRefresh
                })
              }
            >
              Auto reload{" "}
              <span
                className={this.state.buildAutoRefresh ? "active" : " "}
                style={
                  this.state.buildAutoRefresh
                    ? { backgroundColor: "rgb(38, 41, 49)" }
                    : { backgroundColor: "whitesmoke" }
                }
              />
            </p>
          </div>
          <div className="settingsOption">
            <p>update 3mins ago</p>
          </div>
        </div>
        <div className="build">
          <span className="title">
            <h3>AVERAGE BUILD DURATION</h3>
            <h3>TOTAL BUILD</h3>
          </span>
          <BarGraph Data={this.state.barData} />
          <div className="details">
            <div className="tab">
              <div className="_count">
                <span className="num">{this.state.amt}</span>
                <span className="num_title">total</span>
              </div>
              <div className="_count">
                <span className="num">{this.props.amt}</span>
                <span className="num_title">last 7 days</span>
              </div>
              <div className="_count">
                <span className="num">{this.props.amt}</span>
                <span className="num_title">last 14 days</span>
              </div>
            </div>
          </div>
        </div>
        <div className="codeRepo quantity">
          <header>
            <span>Quality</span>
            <img
              src={settingsIcon}
              alt="setting icon"
              onClick={() =>
                this.setState({
                  settingToggleQuantity: !this.state.settingToggleQuantity
                })
              }
            />
          </header>
          <span
            className={
              this.state.settingToggleQuantity
                ? "settingsTag edit"
                : "settingsTag"
            }
          />
          <div
            className={
              this.state.settingToggleQuantity ? "settings edit" : "settings"
            }
          >
            <div className="settingsOption">
              <p
                onClick={() =>
                  this.setState({ disableMonitor: !this.state.disableMonitor })
                }
              >
                Auto reload{" "}
                <span
                  className={this.state.disableMonitor ? "" : "active"}
                  style={
                    this.state.disableMonitor
                      ? { backgroundColor: "whitesmoke" }
                      : { backgroundColor: "rgb(38, 41, 49)" }
                  }
                />
              </p>
            </div>
            <div className="settingsOption">
              <p>update 3mins ago</p>
            </div>
          </div>
          <span className="title">
            <h3>static analysis</h3>
            <h3>security analysis</h3>
            <h3 className="a">version 2.4</h3>
          </span>
          <div className="verBlock">
            <div className="analysis">
              <div>
                <span>blocker</span>
                <span>0</span>
              </div>
              <div>
                <span>critical</span>
                <span>0</span>
              </div>
              <div>
                <span>major</span>
                <span>0</span>
              </div>
              <div>
                <span>issues</span>
                <span>43</span>
              </div>
            </div>
            <div className="analysis">
              <div>
                <span>100.0 %</span>
                <span>rules compliance</span>
              </div>
              <div>
                <span>3d</span>
                <span>technical debt</span>
              </div>
            </div>
            <div className="analysis">
              <div>
                <span>blocker</span>
                <span>-</span>
              </div>
              <div>
                <span>critical</span>
                <span>-</span>
              </div>
              <div>
                <span>major</span>
                <span>-</span>
              </div>
              <div>
                <span>issues</span>
                <span>-</span>
              </div>
            </div>
          </div>
          <span className="title">
            <h3>unit tests</h3>
            <h3>functional test</h3>
            <h3 className="a">code coverage</h3>
          </span>
          <div className="verBlock">
            <div className="analysis">
              <div>
                <span>success</span>
                <span>0</span>
              </div>
              <div>
                <span>failures</span>
                <span>0</span>
              </div>
              <div>
                <span>errors</span>
                <span>0</span>
              </div>
              <div>
                <span>tests</span>
                <span>43</span>
              </div>
            </div>
            <div className="analysis">
              <CircleChart Data={this.state.radialData} />
            </div>
            <div className="analysis">
              <div>
                <span>success</span>
                <span>-</span>
              </div>
              <div>
                <span>failures</span>
                <span>-</span>
              </div>
              <div>
                <span>errors</span>
                <span>-</span>
              </div>
              <div>
                <span>tests</span>
                <span>-</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
