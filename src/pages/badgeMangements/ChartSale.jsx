import React from "react";
import { BarChart } from '@mui/x-charts/BarChart'
import Chart from "react-apexcharts";
import Box from "@mui/material/Box";

import { Component } from "react";


class ChartSale extends Component {
    constructor(props) {
      super(props);

      this.state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91,30, 40, 45, 50, 49, 60, 70, 91,]
          }
        ]
      };
    }

    render() {
      return (
        <Box className="app">
          <Box className="row">
            <Box className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="500"
              />
            </Box>
          </Box>
        </Box>
      );
    }
  }

export default ChartSale;
