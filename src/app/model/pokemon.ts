export class Pokemon {
  id: number;
  name: string;
  type: string;
  hp: number;
  cp: number;
  picture: string;
  created: Date;


  constructor(
    id: number = 0,
    name: string = '',
    type: string = '',
    hp: number = 0,
    cp: number = 0,
    picture: string = '',
    created: Date = new Date()
  ){
    this.id= id;
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.cp = cp;
    this.picture = picture;
    this.created = created;
  }
}
