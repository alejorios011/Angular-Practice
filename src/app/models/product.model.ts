export class Product {
    id: number = 0;
    title: string = '';
    price: number = 0;
    description: string = '';
    images: string[] = [];
    // Constructor
  constructor(title: string, price: number, description:string, images: string) {
    this.id = Math.floor(Math.random() * 100);
    this.title = title;
    this.price = price;
    this.description = description;
    this.images.push(images);
  }
}