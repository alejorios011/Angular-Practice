export class Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];

    constructor(){
        this.id = Math.floor(Math.random() * 100);
        this.title = "";
        this.price = 0;
        this.description = "";
        this.images = [];
    }
}