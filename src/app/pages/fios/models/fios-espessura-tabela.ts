export const FiosEspessuraTabela: IFiosEspessuraTabelaLinha[] = [
    { espessura: 0.5, b1_2: 9, b1_3: 8 },
    { espessura: 0.75, b1_2: 11, b1_3: 10 },
    { espessura: 1, b1_2: 14, b1_3: 12 },
    { espessura: 1.5, b1_2: 17.5, b1_3: 15.5 },
    { espessura: 2.5, b1_2: 24, b1_3: 21 },
    { espessura: 4, b1_2: 32, b1_3: 28 },
    { espessura: 6, b1_2: 41, b1_3: 36 },
    { espessura: 10, b1_2: 57, b1_3: 50 },
    { espessura: 16, b1_2: 76, b1_3: 68 },
    { espessura: 25, b1_2: 101, b1_3: 89 },
    { espessura: 35, b1_2: 125, b1_3: 110 },
    { espessura: 50, b1_2: 151, b1_3: 134 },
    { espessura: 70, b1_2: 192, b1_3: 171 },
    { espessura: 95, b1_2: 232, b1_3: 207 },
    { espessura: 120, b1_2: 269, b1_3: 239 },
    { espessura: 150, b1_2: 309, b1_3: 275 },
    { espessura: 185, b1_2: 353, b1_3: 314 },
    { espessura: 240, b1_2: 415, b1_3: 370 },
    { espessura: 300, b1_2: 477, b1_3: 426 },
    { espessura: 400, b1_2: 571, b1_3: 510 },
    { espessura: 500, b1_2: 656, b1_3: 587 },
    { espessura: 630, b1_2: 758, b1_3: 678 },
    { espessura: 800, b1_2: 881, b1_3: 788 },
    { espessura: 1000, b1_2: 1012, b1_3: 906 },
]

export interface IFiosEspessuraTabelaLinha {
    espessura: number;
    b1_2: number;
    b1_3: number;
}
