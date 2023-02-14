import { Component } from '@angular/core';

@Component({
  selector: 'app-d-chart',
  templateUrl: './d-chart.component.html',
  styleUrls: ['./d-chart.component.scss']
})
export class DChartComponent {
  view = [600, 400];
  width = 700;
  height = 300;
  fitContainer = false;
  // chart options
  showX = true;
  showY = true;
  gradient = true;
  showLegend = true;
  showXLabel = true;
  xLabel = 'Workbasket';
  showYLabel = true;
  yLabel = 'Records';
  timeline = true;
  doughnut = true;
  scolors = ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB'];
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };
  //pie
  showLabels = true;
  public multi = [
    {
      "name": "China",
      "series": [
        {
          "name": "2018",
          "value": 2243772
        },
        {
          "name": "2017",
          "value": 1227770
        }
      ]
    },
    {
      "name": "USA",
      "series": [
        {
          "name": "2018",
          "value": 1126000
        },
        {
          "name": "2017",
          "value": 764666
        }
      ]
    },
    {
      "name": "Norway",
      "series": [
        {
          "name": "2018",
          "value": 296215
        },
        {
          "name": "2017",
          "value": 209122
        }
      ]
    },
    {
      "name": "Japan",
      "series": [
        {
          "name": "2018",
          "value": 257363
        },
        {
          "name": "2017",
          "value": 205350
        }
      ]
    },
    {
      "name": "Germany",
      "series": [
        {
          "name": "2018",
          "value": 196750
        },
        {
          "name": "2017",
          "value": 129246
        }
      ]
    },
    {
      "name": "France",
      "series": [
        {
          "name": "2018",
          "value": 204617
        },
        {
          "name": "2017",
          "value": 149797
        }
      ]
    }
  ];

  onSelect(e: any) {
    console.log('EVENTS', e);
  }

}
