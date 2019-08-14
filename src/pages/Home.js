import React from 'react';
import Layout from '../layout';
import axios from 'axios';

import '../styles/home.scss';
import '../styles/resize.scss';
import '../styles/nav.css';

import FirstColumn from './firstColumn';
import SecondColumn from './secondColumn';
import ThridColumn from './thridColumn';

import settingsIcon from '../assets/cog.svg';
import bgImage from '../assets/bike-black-dawn-2611690.jpg';
import GraphChart from '../components/GraphChart';
import BarGraph from '../components/_BarChart';
import CircleChart from '../components/CircleChart';
import moment  from 'moment';

class Home extends React.PureComponent {
 state = {
  toggleNav: false,
  viewAccounts: false,
   settingToggleFeatures: false,
   settingToggleBuild: false,
   settingToggleMonitor: false,
   settingToggleCode_repo: false,
   settingToggleQuantity: false,
   maxSize_1: true,
   maxSize_2: false,
   maxSize_3: false,
   toggleRefresh: true,
   buildAutoRefresh: true,
   disableMonitor: false,
   onlineStatus: true,
   currentSize: 100,
   amt: 100,
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
   },
   graphData: [
     {
        name: `week1`,
        commit: 100,
        total_commit: 1000
     },
     {
        name: `week2`,
        commit: 200,
        total_commit: 1000
     },
     {
        name: `week3`,
        commit: 300,
        total_commit: 1000
     },
     {
        name: `week4`,
        commit: 400,
        total_commit: 1000
     }
  ],
  barData:[
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ],
  radialData : [
    {
      name: '40-50', uv: 10, pv: 90, 
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
  }
 checkSize= () => {
   this.setState({onlineStatus: window.clientInformation.onLine})
 }
  getData = async () => {
    const startDate = moment().format("YYYY-MM-01");
    const  firstWeek = moment().format("YYYY-MM-07");
    const secondWeek = moment().format("YYYY-MM-14");
    const thridWeek = moment().format("YYYY-MM-21");
    const endDate = moment().format("YYYY-MM-30");
  const Routes = [
   `https://api.github.com/search/commits?q=repo:freecodecamp/freecodecamp author-date:${startDate}..${firstWeek}`,
    `https://api.github.com/search/commits?q=repo:freecodecamp/freecodecamp author-date:${firstWeek}..${secondWeek}`,
    `https://api.github.com/search/commits?q=repo:freecodecamp/freecodecamp author-date:${secondWeek}..${thridWeek}`,
    `https://api.github.com/search/commits?q=repo:freecodecamp/freecodecamp author-date:${thridWeek}..${endDate}`
  ]
    const headers = {
        "Accept" : "application/vnd.github.cloak-preview"
    }
    axios(
      `https://api.github.com/search/commits?q=repo:freecodecamp/freecodecamp author-date:${startDate}..${endDate}`
      , { 
      "method" : "GET",
      "headers" : headers
  })
  .then(res=> this.setState({
    amt: res.data.total_count
  }))
          
    const store = [];
    await Routes.forEach(url => {
     axios(url, { 
          "method" : "GET",
          "headers" : headers
      })
      .then(res=>{
        console.log(res);
          store.push(res);
          this.setState({Response: store});
          if(4 === this.state.Response.lenght) {
            console.log('still waiting')
          } else {
            var count = 0;
            const graphScore = [];
            this.state.Response.forEach(control=>{
              let Rounds = count + 1;
              count = Rounds;
              console.log(Rounds)
            let array =  {
                name: `week${Rounds}`,
                commit: control.data.total_count,
                total_commit: this.state.amt
              };
              graphScore.push(array);
              this.setState({graphData: graphScore})
            })
          }
          for(let i = 0; i < this.state.Response.lenght; i++) {
        }
      }) 
    });
      
 }
  componentWillMount() {
    this.checkSize();
    this.getData();
 }

  render() {
    return (
      <Layout>
        <div className="nav">
            <div
            onClick={()=> this.setState({toggleNav: !this.state.toggleNav})}
            className={this.state.toggleNav ? "navBtn active" : "navBtn"}>
                <span></span>
                <span></span>
            </div>
            <div className="_title">
                <h3>App Co.</h3>
            </div>
            <div 
            className={this.state.viewAccounts ? "accBtn view":"accBtn"}
            onClick={()=> this.setState({viewAccounts: !this.state.viewAccounts})}>
            <span className="icon"></span>
                <span className="accImage">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/></svg>
                </span>
                <span className="toolkit">My Accounts</span>
            </div>
            <nav className={this.state.toggleNav ? "active": ""}>
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
                        <li
                onClick={()=> this.setState({maxSize_1: !this.state.maxSize_1,maxSize_2: false,maxSize_3: false})}
            >Block 1 <span
                className={this.state.maxSize_1? "active" : " "}
                style={this.state.maxSize_1?{backgroundColor: "rgb(38, 41, 49)",}:{backgroundColor: "whitesmoke",}}
              ></span></li>
                        <li
                onClick={()=> this.setState({maxSize_2: !this.state.maxSize_2,maxSize_1: false,maxSize_3: false})}
            >Block 2 <span
                className={this.state.maxSize_2? "active" : " "}
                style={this.state.maxSize_2?{backgroundColor: "rgb(38, 41, 49)",}:{backgroundColor: "whitesmoke",}}
              ></span> </li>
                        <li
                onClick={()=> this.setState({maxSize_3: !this.state.maxSize_3,maxSize_1: false,maxSize_2: false})}
            >Block 3<span
                className={this.state.maxSize_3? "active" : " "}
                style={this.state.maxSize_3?{backgroundColor: "rgb(38, 41, 49)",}:{backgroundColor: "whitesmoke",}}
              ></span></li>
                    </div>
                </ul>
            </nav>
        </div>
      <img id="bg" src={bgImage} alt="bg"/>
      <FirstColumn 
      maxSize_1={this.state.maxSize_1} 
      maxSize_2={this.state.maxSize_2} 
      maxSize_3={this.state.maxSize_3}
      graphData={this.state.graphData}
      amt={this.state.amt}/>
      <SecondColumn
      amt={this.state.amt}
      maxSize_1={this.state.maxSize_1} 
      maxSize_2={this.state.maxSize_2} 
      maxSize_3={this.state.maxSize_3}
      graphData={this.state.graphData}/>
      <ThridColumn
      amt={this.state.amt}
      maxSize_1={this.state.maxSize_1} 
      maxSize_2={this.state.maxSize_2} 
      maxSize_3={this.state.maxSize_3}
      graphData={this.state.graphData}/>
      </Layout>
    )
  };
}

export default Home;
