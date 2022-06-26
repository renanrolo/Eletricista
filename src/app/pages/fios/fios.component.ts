import { Component, OnInit } from '@angular/core';
import { Tabela_Fios_Cobre } from './models/fios-espessura-tabela';

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

  displayedColumns: string[] = ['espessura', 'a1_2', 'a1_3', 'b1_2', 'b1_3'];
  dataSource = Tabela_Fios_Cobre;
  clickedRows = new Set<IFioRow>();
  amperes: number = 0;
  voltagem: boolean = true;
  watts: string = "";
}

export interface IFioRow {
  corrente: number,
  d10: number,
  d20: number,
  d30: number,
  d40: number,
  d50: number,
}