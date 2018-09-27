export class Hero {
  id: number;
  name: string;
  imgsrc: string;
  description: string;
  constructor(name: string , imgsrc: string, description: string) {
  this.name = name;
  this.description = description;
  this.imgsrc = imgsrc;
  }
}
