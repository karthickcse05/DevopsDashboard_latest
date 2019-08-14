import React from 'react';
import {
     AreaChart, Area, XAxis, YAxis, Legend, Tooltip,
  } from 'recharts';

class GraphChart extends React.Component {
    render() {
    return (
        <div className="graph">
              <AreaChart
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
              <Area type="monotone" dataKey="commit" stackId="1" stroke="#8884d8" fill="#8884d8" />
            </AreaChart> 
            {this.props.children}
        </div>
    )
    }
}

export default GraphChart