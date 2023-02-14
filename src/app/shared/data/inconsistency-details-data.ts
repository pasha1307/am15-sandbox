export interface InconDetail {
  id: number;
  name: string;
  inconType: string;
  serco: string;
  resolved: string;
  expDate: string;
  reasonInsuff: string;
  elDate: string;
  infoNeeded: string;
}

export const INCON_DATA: InconDetail[] = [
  {
    id: 1,
    name: 'John',
    inconType: 'Citizenship Incon',
    serco: 'Open',
    resolved: 'yes',
    expDate: '01/01/24',
    reasonInsuff: 'Docs appear altered or forged',
    elDate: '02/01/24',
    infoNeeded: 'Proof you are not in VA'
  },
]
