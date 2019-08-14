import React from 'react';
import {
  RadialBarChart, RadialBar
} from 'recharts';


class CircleChart extends React.Component {
    render() {
        return (
            <RadialBarChart
            width={140}
            height={120}
            cx={70}
            cy={70}
            innerRadius={30}
            barSize={20}
            data={this.props.Data}
            margin={{
              top: 10, right: -30, left: 0, bottom: 0,
            }}
          >
            <RadialBar 
            type="monotone" 
            minAngle={35} 
            dataKey="uv" 
            stackId="1" 
            stroke="transparent" 
            fill="white"
            label={
              {
                position: 'insideStart',
                fill: "#fff"
              }
            } 
            background anticlockWise />
            <RadialBar 
            type="monotone" 
            minAngle={35} 
            dataKey="pv" 
            stackId="1" 
            stroke="#c7c7c7" 
            fill="yellow"
            label={
              {
                position: 'insideStart',
                fill: "#fff"
              }
            } 
            background clockWise />
          </RadialBarChart> 
        )
    }
}
export default CircleChart