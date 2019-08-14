import React from 'react';
import {
     BarChart, Bar, XAxis, YAxis, Legend, Tooltip,
  } from 'recharts';
  
class BarGraph extends React.Component {
    render() {
        return (
            <div className="graph">
                  <BarChart
                  width={250}
                  height={120}
                  data={this.props.Data}
                  margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip/>
                  <Legend />
                  <Bar type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Bar type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </BarChart>
                {this.props.children}
            </div>
        )
    }
}
export default BarGraph;