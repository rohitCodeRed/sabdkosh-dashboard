import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { ChartDataService } from '../chart-data.service';
import { Chart } from 'angular-highcharts';
import * as windowHighChart from 'highcharts';

@Component({
  selector: 'app-pie-chart-gradientfill',
  templateUrl: './pie-chart-gradientfill.component.html',
  styleUrls: ['./pie-chart-gradientfill.component.css']
})
export class PieChartGradientfillComponent implements OnInit {

  public chartInst: any;
  // {"series":[{"setData":function(data:any){ return null;}}],
  //               "reflow":function(){return null;}};
  
  pie = new Chart({
    colors: windowHighChart.map(windowHighChart.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, new windowHighChart.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
      }),
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in January, 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (windowHighChart.theme && windowHighChart.theme.colors[0]) || 'black'
                },
                connectorColor: 'silver'
            }
        }
    },
    series: [{
        name: 'Share',
        data: [
            { name: 'Chrome', y: 61.41 },
            { name: 'Internet Explorer', y: 11.84 },
            { name: 'Firefox', y: 10.85 },
            { name: 'Edge', y: 4.67 },
            { name: 'Safari', y: 4.18 },
            { name: 'Other', y: 7.05 }
        ]
    }]
  } as any);

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'rightArrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/rightArrow.svg'));
    }

    ngOnInit() {
      this.pie.ref$.subscribe(chartInstance => {
        this.chartInst = chartInstance;
      });
    }

}
