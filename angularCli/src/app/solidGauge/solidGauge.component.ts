import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './solidGauge.component.html',
  styleUrls: ['./solidGauge.component.css']
})
export class SolidGaugeComponent implements OnInit {
  // @Input() value: string= "0";
  @Input() value:string;
  public chartInst: any;
  // {"series":[{"setData":function(data:any){ return null;}}],
  //               "reflow":function(){return null;}};

  gauge = new Chart({
    chart: {
      type: 'solidgauge'
    },
    title: {
      text:"Solid Gauge",
      y:10
    },
    pane: {
      center: ['50%', '50%'],
      size: '100%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:'#EEE',
        innerRadius: '60%',
        outerRadius: '100%',
        shape: 'arc'
      }
    },
    tooltip: {
      enabled: false
    },
    credits: {
      enabled: false
    },

    // the value axis
    yAxis: {
    min: 0,
    max: 180,
    stops: [
      [0.1, '#55BF3B'], // green
      [0.5, '#DDDF0D'], // yellow
      [0.9, '#DF5353'] // red
    ],
    lineWidth: 0,
    minorTickInterval:0,
    tickColor:"#fff",
    tickAmount: 0,
    labels: {
      y: 16
    }
  },
  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true
      }
    }
  },
  series: [{
    name: 'speed',
    data: [80],
    dataLabels: {
      format: '<div style="text-align:center"><span style="font-size:25px;color:black">{y}</span><br/>' +
      '<span style="font-size:12px;color:silver">km/h</span></div>'
    },
    tooltip: {
      valueSuffix: ' km/h'
    }
  }]
} as any);

constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  iconRegistry.addSvgIcon(
    'rightArrow',
    sanitizer.bypassSecurityTrustResourceUrl('assets/rightArrow.svg'));
  }

  changeValue(){
    let x = [parseInt(this.value)];
    //this.gauge.series[0].tooltip.valueSuffix = this.valueSuffix;
    this.updateSeriesData(x);

  }
  
  updateSeriesData(data:any): void {
    //console.log(this.chart);
    this.gauge.ref$.subscribe(chartInst => {
      chartInst.series[0].setData(data);
    });
  }

  ngOnInit() {
    //this.gauge = this.gauge;
  }

}
