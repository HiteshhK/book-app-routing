export class Book {
  id: string;
  name: string;
  genre: string;
  price: number;

  constructor(id: string, name: string, genre: string, price: number) {
    this.id = id;
    this.genre = genre;
    this.price = price;
    this.name = name;
  }
}
