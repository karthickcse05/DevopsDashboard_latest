import React, { Component } from "react";
import settingsIcon from '../assets/cog.svg';


import GraphChart from '../components/GraphChart';
import BarGraph from '../components/_BarChart';
import CircleChart from '../components/CircleChart';

export default class FirstColumn extends Component { state = {
  toggleNav: false,
  viewAccounts: false,
   settingToggleFeatures: false,
   settingToggleBuild: false,
   settingToggleMonitor: false,
   settingToggleCode_repo: false,
   settingToggleQuantity: false,
   toggleRefresh: true,
   featureData: {
     total: 31,
     wip: 22,
     done: 5, 
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
   }
  }
  componentDidMount(){
      console.log(this.props)
  }
    render() {
        return (
        <div className={
          this.props.maxSize_1 ? "column main" : 
          this.props.maxSize_2 || this.props.maxSize_3 ? "column min" : "column"}>
          <header><span>feature</span><img src={settingsIcon} alt="setting icon"
          onClick={() => this.setState({settingToggleFeatures: !this.state.settingToggleFeatures})}/></header>
          <span className={this.state.settingToggleFeatures ? "settingsTag edit" : "settingsTag"}></span>
            <div className={this.state.settingToggleFeatures ? "settings edit" : "settings"}>
              <div className="settingsOption">
                <p
                    onClick={()=> this.setState({toggleRefresh: !this.state.toggleRefresh})}
                >Auto reload <span
                  className={this.state.toggleRefresh? "active" : " "}
                  style={this.state.toggleRefresh?{backgroundColor: "rgb(38, 41, 49)",}:{backgroundColor: "whitesmoke",}}
                ></span></p> 
              </div>
              <div className="settingsOption">
                <p>update 3mins ago</p>
              </div>
          </div>
          <div className="count">
            <div className="countInfo">
              <span className="countFigure">{this.state.featureData.total}
              </span>
              <span className="count_title">Total</span>
            </div>
            <div className="countInfo">
              <span className="countFigure">{this.state.featureData.wip}</span>
              <span className="count_title">wip</span>
            </div>
            <div className="countInfo">
              <span className="countFigure">{this.state.featureData.done}</span>
              <span className="count_title">done</span>
            </div>
          </div>
          <div className="process_info">
            <h3>feature in progress</h3>
              <ul>
                <li>Customer order</li>
                <li>time purchase </li>
                <li>deploy order</li>
                <li>refresh deploment</li>
                <li>start test</li>
                <li>....</li>
              </ul>
          </div>
          <div className="codeRepo">
            <header><span>code Repo</span><img src={settingsIcon} alt="setting icon"
            onClick={() => this.setState({settingToggleCode_repo: !this.state.settingToggleCode_repo})}/></header>
            <span className={this.state.settingToggleCode_repo ? "settingsTag edit" : "settingsTag"}></span>
              <div className={this.state.settingToggleCode_repo ? "settings edit" : "settings"}>
                <div className="settingsOption">
                  <p
                      onClick={()=> this.setState({disableMonitor: !this.state.disableMonitor})}
                  >Auto reload <span
                    className={this.state.disableMonitor? "" : "active"}
                    style={this.state.disableMonitor?{backgroundColor: "whitesmoke"}:{backgroundColor: "rgb(38, 41, 49)"}}
                  ></span></p>
                </div>
                <div className="settingsOption">
                  <p>update 3mins ago</p>
                </div>
            </div>
              <span className="title"><h3>COMMITS PER DAY</h3><h3> </h3></span>
		{
		this.props.graphData > 3 ? 
	            <h3>loading</h3> 
                         :
                    <GraphChart Data={this.props.graphData} amt={this.props.amt}/>
		}
              <span className="title"><h3>Summary</h3><h3> </h3></span>
              <div className="details">
                <div className="tab">
                  <p>today commits</p>
                  <span>{this.state.commit.total}</span>
                  <span>{this.state.commit.last7days}</span>
                  <span>{this.state.commit.last14days}</span>
                </div>
                <div className="tab">
                  <p>contributors</p>
                  <span>{this.state.contributors.total}</span>
                  <span>{this.state.contributors.last7days}</span>
                  <span>{this.state.contributors.last14days}</span>
                </div>
                <div className="tab">
                  <p> </p>
                  <span>today</span>
                  <span>last 7 days</span>
                  <span>last 14 days</span>
                </div>
              </div>
            </div> 
            </div>
          
        )
    }
} 
