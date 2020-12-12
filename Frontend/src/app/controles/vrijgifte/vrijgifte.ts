export const vrijgifte: Opdrachten[] = [
    { opdracht: 'Opdracht 24', datum: "Dec 12, 2020", markering: 'Voldaan'},
    { opdracht: 'Opdracht 25', datum: "Dec 21, 2020", markering: 'Niet Voldaan'},
    { opdracht: 'Opdracht 26', datum: "Dec 4, 2020", markering: 'Voldaan'},
    { opdracht: 'Opdracht 27', datum: "Dec 12, 2020", markering: 'Voldaan'},
    { opdracht: 'Opdracht 28', datum: "Dec 12, 2020", markering: 'Niet Voldaan'},
    { opdracht: 'Opdracht 29', datum: "Dec 22, 2020", markering: 'Voldaan'},
    { opdracht: 'Opdracht 30', datum: "Dec 12, 2020", markering: 'Voldaan'},
    { opdracht: 'Opdracht 31', datum: "Dec 6, 2020", markering: 'Voldaan'},
    { opdracht: 'Opdracht 32', datum: "Dec 14, 2020", markering: 'Niet Voldaan'},
    { opdracht: 'Opdracht 33', datum: "Dec 12, 2020", markering: 'Voldaan'},
  ];
  
  export interface Opdrachten {
    opdracht: string;
    datum: String;
    markering: string;
  }