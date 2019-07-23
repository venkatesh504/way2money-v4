import { Component, OnInit } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Options } from 'ng5-slider';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  valueTwo: number = 100;
  // step = 1000;
  // options: Options = {
  //   floor: this.step,
  //   ceil: 200000
  // };
  // highValue: number = 90;
  options: Options = {
    ceil: 200000,
    step: 1000,
    showTicksValues: true,
    stepsArray: [
    ]
  };
  index: any;
  config: any;
  step = 1000;
  calculate = false;
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 200000;
  min = 0;
  tickInterval = 10;
  showTicks = false;
  thumbLabel = true;
  value = 0;
  vertical = false;
  sliderChange: boolean;
  tenure = 0;
  weeklyEMI = 0;
  TotalAmount = 0;
  interestAmount = 0;
  interestRate = 2;
  instalment = 0;
  math = 0;
  matts = 0;
  totalText: any;
  closeValue = 'close';
  merchantReview = 'fast and secure service... I really appreciate the way the people helped me while completing the process... They have been great help.. the whole process has been done in 3 hours... thank you very much way2money...';

  // get tickInterval(): number | 'auto' {
  //   return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  // }
  // set tickInterval(value) {
  //   console.log('value________');
  //   this.tickInterval = coerceNumberProperty(value);
  //   console.log('change******');
  // }
  constructor() {
    //
  }
  ngOnInit() {
    this.totalText = this.merchantReview;
    this.merchantReview = this.merchantReview.slice(0, 100);
    // for (let i = 0; i <= 2; i + 1) {
    //       console.log('Hi')
    //       this.options.stepsArray.push({
    //         value: i,
    //         legend: 'h'
    //       });
    //    }
    console.log('OPTIONS NGONINIT', this.options);
    this.tenure = 3;
    this.sliderChange = false;
    console.log('@ngOnInIt()');
  }
  readMore() {
    this.merchantReview = this.totalText;
  }


  readLess() {
    this.merchantReview = this.merchantReview.slice(0, 100);
  }
  selectAmount(value) {
    this.value = value.value;
    this.tenureSelect();
  }
  formatLabel(value) {
    if (value > 0) {
      return Math.round(value / 1000) + 'k';
    } else {
      return 'Select';
    }
  }
  // Tenure Select
  tenureSelect() {
    console.log('Value @tenureSelect()', this.value);
    if (this.value > 0) {
      // setTimeout(() => {}, 500);
      // console.log('Tenure  @tenureSelect()', this.tenure, this.value);
      this.instalment = this.tenure * 4;
      this.interestAmount = (this.value * this.interestRate * this.tenure) / 100;
      this.TotalAmount = this.interestAmount + this.value;
      this.weeklyEMI = this.TotalAmount / this.instalment;
    } else {
      this.value = 0;
    }
  }
}
