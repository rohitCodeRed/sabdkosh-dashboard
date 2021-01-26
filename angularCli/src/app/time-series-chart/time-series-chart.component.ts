import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { ChartDataService } from '../chart-data.service';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-time-series-chart',
  templateUrl: './time-series-chart.component.html',
  styleUrls: ['./time-series-chart.component.css']
})
export class TimeSeriesChartComponent implements OnInit {

  @Input() value:string;
  public chartInst: any;
  // {"series":[{"setData":function(data:any){ return null;}}],
  //               "reflow":function(){return null;}};
  public url:string = "https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json";
  public data:Array<any>;

  //console.log("color",window['highCharts'].Color(window['highCharts'].getOptions().colors[0]).setOpacity(0).get('rgba'));

  line = new Chart({
           chart: {
               zoomType: 'x'
           },
           title: {
               text: 'USD to EUR exchange rate over time'
           },
           subtitle: {
               text:'Pinch the chart to zoom in'
           },
           xAxis: {
               type: 'datetime'
           },
           yAxis: {
               title: {
                   text: 'Exchange rate'
               }
           },
           legend: {
               enabled: false
           },
           plotOptions: {
               area: {
                   fillColor: {
                       linearGradient: {
                           x1: 0,
                           y1: 0,
                           x2: 0,
                           y2: 1
                       },
                       stops: [
                           [0, '#2f7ed8'],
                           [1, '#2f7ed8']
                       ]
                   },
                   marker: {
                       radius: 2
                   },
                   lineWidth: 1,
                   states: {
                       hover: {
                           lineWidth: 1
                       }
                   },
                   threshold: null
               }
           },

           series: [{
               type: 'area',
               name: 'USD to EUR',
               data: []
           }]
  });

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private chartDataService: ChartDataService) {
    iconRegistry.addSvgIcon(
      'rightArrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/rightArrow.svg'));
    }

    ngOnInit() {
     //this.line = this.line;
     //console.log("color",window['highCharts'].getOptions().colors[0]);
      //this.getData();
      this.line.ref$.subscribe(chartInstance => {
        this.chartInst = chartInstance;
        this.getData(this.chartInst);
      });
    }

    getData(ChartObj):void {
      this.chartDataService.getChartData(this.url)
      .subscribe(Data => {
        // console.log("data",Data);

        if(ChartObj){
          ChartObj.update({
            plotOptions: {area: {
              fillColor: {
                stops: [
                    [0, '#2f7ed8'],
                    [1, 'rgba(47, 126, 216, 0)']
                ]
              }
            }},
            series:[{
              data: Data
          }]});
        }

      });

    }

}
