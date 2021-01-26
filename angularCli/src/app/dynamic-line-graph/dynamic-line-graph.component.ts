import { Component, OnInit, Output, EventEmitter, Input,OnDestroy } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {Subscription ,timer} from 'rxjs';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-dynamic-line-graph',
  templateUrl: './dynamic-line-graph.component.html',
  styleUrls: ['./dynamic-line-graph.component.css']
})
export class DynamicLineGraphComponent implements OnInit,OnDestroy {

  @Input() value:string;
  public chartInst: any;
  private timer;
    // Subscription object
  private sub: Subscription;
  // {"series":[{"setData":function(data:any){ return null;}}],
  //               "reflow":function(){return null;}};

  line = new Chart({
    chart: {
        type: 'spline',
        animation: true, // don't animate in old IE
        marginRight: 10
        // events: {
        //     load: function () {
        //
        //         // set up the updating of the chart each second
        //         console.log("time functioin");
        //         var series = this.series[0];
        //         setInterval(function () {
        //             var x = (new Date()).getTime(), // current time
        //                 y = Math.random();
        //             series.addPoint([x, y], true, true);
        //         }, 1000);
        //     }
        // }
    },
    title: {
        text: 'Live random data'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: 'Value'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                window['highCharts'].dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                window['highCharts'].numberFormat(this.y, 2);
        }
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Random data',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
  } as any);

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'rightArrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/rightArrow.svg'));
    }

    changeValue(){
      //this.gauge.series[0].data = [parseInt(this.value)];
      //this.gauge.series[0].tooltip.valueSuffix = this.valueSuffix;
      //this.updateSeriesData(this.gauge.series[0].data);

    }

    ngOnInit() {
      //this.line = this.line;
      this.line.ref$.subscribe(chartInstance => {
        this.chartInst = chartInstance;
        
      });

      const source = timer(1000, 2000);
        this.sub = source.subscribe(val => {
        // do stuff you want when the interval ticks
        this.addPoint();
      });

    }

    addPoint():void{
      if(this.chartInst){
        var x = (new Date()).getTime(), // current time
            y = Math.random();
        this.chartInst.series[0].addPoint([x, y], true, true);
      }
    }

    ngOnDestroy(){
        console.log("Destroy timer");
        // unsubscribe here
        this.sub.unsubscribe();

    }
}
