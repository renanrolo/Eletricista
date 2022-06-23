import { Component, OnInit } from '@angular/core';

const _dataSource: IFioRow[] = [
  { corrente: 1, d10: 1.5, d20: 1.5, d30: 1.5, d40: 1.5, d50: 1.5 },
  { corrente: 2, d10: 1.5, d20: 1.5, d30: 1.5, d40: 1.5, d50: 1.5 },
  { corrente: 3, d10: 1.5, d20: 1.5, d30: 1.5, d40: 1.5, d50: 1.5 },
  { corrente: 4, d10: 1.5, d20: 1.5, d30: 1.5, d40: 1.5, d50: 1.5 },
  { corrente: 5, d10: 1.5, d20: 1.5, d30: 1.5, d40: 1.5, d50: 1.5 },
  { corrente: 7.5, d10: 1.5, d20: 1.5, d30: 1.5, d40: 2.5, d50: 2.5 },
  { corrente: 10, d10: 1.5, d20: 1.5, d30: 2.5, d40: 2.5, d50: 4 },
  { corrente: 12.5, d10: 1.5, d20: 2.5, d30: 2.5, d40: 4, d50: 4 },
  { corrente: 15, d10: 1.5, d20: 2.5, d30: 2.5, d40: 4, d50: 6 },
  { corrente: 17.5, d10: 1.5, d20: 2.5, d30: 4, d40: 4, d50: 6 },
  { corrente: 20, d10: 1.5, d20: 2.5, d30: 4, d40: 6, d50: 6 },
  { corrente: 25, d10: 1.5, d20: 4, d30: 6, d40: 6, d50: 10 },
  { corrente: 30, d10: 2.5, d20: 4, d30: 6, d40: 10, d50: 10 },
  { corrente: 35, d10: 2.5, d20: 4, d30: 6, d40: 10, d50: 10 },
  { corrente: 40, d10: 2.5, d20: 6, d30: 10, d40: 10, d50: 10 },
  { corrente: 45, d10: 2.5, d20: 6, d30: 10, d40: 10, d50: 10 },
  { corrente: 50, d10: 4, d20: 6, d30: 10, d40: 16, d50: 16 },
  { corrente: 60, d10: 4, d20: 10, d30: 10, d40: 16, d50: 25 },
  { corrente: 70, d10: 4, d20: 10, d30: 16, d40: 16, d50: 25 },
  { corrente: 80, d10: 6, d20: 10, d30: 16, d40: 25, d50: 25 },
  { corrente: 100, d10: 6, d20: 16, d30: 25, d40: 25, d50: 35 },
];

@Component({
  selector: 'app-fios',
  templateUrl: './fios.component.html',
  styleUrls: ['./fios.component.scss']
})
export class FiosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.voltagem = true;
  }

  displayedColumns: string[] = ['corrente', 'd10', 'd20', 'd30', 'd40', 'd50',];
  dataSource = _dataSource;
  clickedRows = new Set<IFioRow>();
  amperes: number = 0;
  voltagem: boolean = true;
  watts: string = "";

  onclickedRows(row: IFioRow): void {
    if (this.clickedRows.has(row)) {
      this.clickedRows.delete(row);
    }
    else {
      this.clickedRows.add(row);
    }
  }

  onVoltagemToggle(): void {
    this.calculate();
  }

  search(input: string): void {
    this.watts = input;
    this.calculate();
  }

  calculate(): void {
    this.clickedRows.clear();

    const number = Number(this.watts);

    if (!(number > 0)) {
      this.amperes = 0;
      return;
    }

    this.amperes = this.roundUp(number / this.getVoltage(), 2);

    if (this.amperes > 0) {
      for (let index = 0; index < (this.dataSource.length - 1); index++) {
        const row = this.dataSource[index];
        const nextRow = this.dataSource[index + 1];
        if (row.corrente <= this.amperes && this.amperes < nextRow.corrente) {
          this.clickedRows.add(row);
        }
      }
    }
  }

  getVoltage(): number {
    if (this.voltagem === true) {
      return 127;
    }
    return 220;
  }

  roundUp(num: number, precision: number): number {
    precision = Math.pow(10, precision);
    return Math.ceil(num * precision) / precision;
  }
}

export interface IFioRow {
  corrente: number,
  d10: number,
  d20: number,
  d30: number,
  d40: number,
  d50: number,
}