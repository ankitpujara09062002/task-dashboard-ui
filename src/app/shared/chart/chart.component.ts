import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  lineChartData = {
    labels: ["12:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00"],
    datasets: [
      {
        label: "Votes",
        data: [170, 180, 200, 190, 210, 250, 250, 260, 250, 255, 270, 280],
        backgroundColor: '#eeeea0',
        borderColor: [
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
        fill: true,
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
    new Chart("lineItemsChart", {
      type: "line",
      data: this.lineChartData,
    });

    new Chart("barChart", {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct"],
        datasets: [
          {
            label: "",
            data: [350, 550, 190, 390, 160, 150, 600, 390, 100, 290, 700],
            backgroundColor: [
              'rgba(255, 91, 90, 1)',
              "rgba(88, 206, 255, 1)",
              "rgba(74, 82, 255, 1)",
              "rgba(0, 162, 138, 1)",
              "rgba(255, 91, 90, 1)",
              "rgba(171, 83, 219, 1)",
              "rgba(255, 188, 84, 1)",
              "rgba(251, 91, 90, 1)",
              "rgba(0, 188, 138, 1)",
              "rgba(88, 206, 255, 1)",
            ],
            borderColor: [
              "ff5b5a",
              "58ceff",
              "4a52ff",
              "00a28a",
              "ff5b5a",
              "ab53db",
              "ffbc54",
              "ff5b5a",

            ],

          }
        ]
      },
    });
  }
}
