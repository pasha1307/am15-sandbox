import { Component } from '@angular/core';
import {ChartConfiguration, ChartDataset, ChartOptions, ChartType, Color} from "chart.js";

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.scss']
})
export class MyLineChartComponent {
  public lineChartLegend = true;
  public lineChartPlugins = [];

  chartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Intake',
      'Adjudication',
      'Hearing',
      'Effectuation',
      'Call Center',
      'Correspondence'
    ],
    datasets: [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'November'},
    ]
  }
  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    borderColor: 'rgba(0,0,0,1)',
    backgroundColor: 'rgba(255,0,0,0.3)',
  }

  constructor() { }
}
