import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calc-amp',
  templateUrl: './calc-amp.component.html',
  styleUrls: ['./calc-amp.component.scss']
})
export class CalcAmpComponent implements OnInit {

  amperes: number = 0;
  voltagem: boolean = true;
  watts: string = "";

  get getAmperesText(): string {
    if (this.amperes >= 2) {
      return `${this.amperes} ampères`
    }

    return `${this.amperes} ampère`
  }

  constructor() { }

  ngOnInit(): void {
  }

  onVoltagemToggle(): void {
    this.calculate();
  }

  onChangeWatts(input: string) {
    this.watts = input;
    this.calculate();
  }

  calculate(): void {
    const number = Number(this.watts);

    if (!(number > 0)) {
      this.amperes = 0;
      return;
    }

    this.amperes = this.roundUp(number / this.getVoltage(), 2);
  }

  roundUp(num: number, precision: number): number {
    precision = Math.pow(10, precision);
    return Math.ceil(num * precision) / precision;
  }

  getVoltage(): number {
    if (this.voltagem === true) {
      return 127;
    }
    return 220;
  }
}
