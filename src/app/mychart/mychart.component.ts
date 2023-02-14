import {Component} from '@angular/core';
import {ChartConfiguration} from "chart.js";


@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.scss']
})
export class MychartComponent {
  title = 'Test Chart ng2';
  barChartLegend = true;
  barChartPlugins = [
  //   {
  //   tooltip: {
  //     // Tooltip will only receive click events
  //     events: ['click']
  //   }
  // }
  ];
  chartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'Intake',
      'Adjudication',
      'Hearing',
      'Effectuation',
      'Call Center',
      'Correspondence'
    ],
    datasets: [
      {data: [54, 33, 61,19, 43, 27], label: 'November'},
      {data: [43, 39, 47,29, 53, 37], label: 'December'},
    ]
  }
  // @ts-ignore
  chartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
    color: 'green',
    scales: {
      x: {
        ticks: { color: 'orange' },
      },
      y: {
        min: 5
      }
    },
    plugins: {
      legend: {
        display: false,
      }
    }
  }

}
