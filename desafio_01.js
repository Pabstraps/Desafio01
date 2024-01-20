//se declara clase con el array vacio en el constructor
class ProductManager {
    constructor() {
        this.products = []
    }

    //Metodo para agregar los productos fuera del constructor
    addProduct(title,description,price,thumbnail,code,stock,){
        const newProduct = {
            id: ProductManager.generateId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        //Antes de agregar,revisa si el code ya esta incluido en el array
        const codeExistente = this.products.some(producto => producto.code === newProduct.code);
        if (!codeExistente) {
            this.products.push(newProduct);
            console.log(`Producto con código ${newProduct.code} agregado correctamente.`);
        } else {
            console.log(`Error: Producto con código ${newProduct.code} ya existe.`);
        }
    }

    //Metodo para genear ID autoincrementable
    static generateId() {
        if (!ProductManager.currentId) {
            ProductManager.currentId = 1;
        } else {
            ProductManager.currentId++;
        }
        return ProductManager.currentId;
    }

    //Metodo para mostrar los productos en el array
    getProduct(){
        return this.products
    }

    //Metodo para encontrar si existe el ID en el array
    getProductById(id) {
        if(!this.products.find(product => product.id === id)){
            console.log("Not found")
        } else{
            console.log("Found!")
        }
    }
    
}


//Se crean los productos
const productos = new ProductManager
productos.addProduct("Consola PS5","Version Standard 815GB",10500,"http://ps5.jpg",784469513878,12)
productos.addProduct("Control Xbox Series","Carbon Black",1200,"http://controlXbox.jpg",484184887665,5)
productos.addProduct("Ryzen 7 5800X", "procesador para computadora",4500, "http://AMD.jpg", 784469513878, 8)





