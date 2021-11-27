class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;

    }
}

class UI {
    addproduct(product) {
        //acceder a el elementos del div que tiene el nombre product-list
        const productList = document.getElementById('product-list');
        // crear el elemento html 
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
                <div class="card.body">
                    <strong>Product Name</strong>:${product.name}
                    <strong>Product Price</strong>:${product.price}
                    <strong>Product Year</strong>:${product.year}
                    <a href="#" class="btn btn-danger" name="delete" >Delete</a>             
                </div>
            </div>
            `;
        //agregar el elemento html al elemento hijo
        productList.appendChild(element);




    }
    //metodo para vaciar los textbox
    resetForm() {
        document.getElementById('product-form').reset();


    }
    deleteproduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showmessage("Product Deleted Succsssfully", "danger");
        }
    }
    showmessage(message, cssClass) {
       
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-2`;
         //agregar un elemento hijo del div en este caso es
        //texto
        div.appendChild(document.createTextNode(message));

        // seleccionar un elemento del documento html
        const container = document.querySelector(".container");
        const app = document.querySelector("#App");

        //metodo para insertar antes primer espacio del 
        //parentesis=lo que quiero insertar, segundo espacio
        //el elemento anterior  
        container.insertBefore(div, app);

        // Remove the Message after 3 seconds
        setTimeout(function () {
            //llamar el alert y removerlo 
            document.querySelector(".alert").remove();
        }, 3000);



    }

}
//don events
document
    .getElementById("product-form")
    .addEventListener('submit', function (e) {
        e.preventDefault();
        //obtener valores de los texbox
        const name = document.getElementById("name").value,
            price = document.getElementById("price").value,
            year = document.getElementById("year").value;

        const product = new Product(name, price, year);
        const ui = new UI();
        if(name===''||price===''||year===''){
           //con el return termina el codigo aca 
            return ui.showmessage('complet fields please','danger');
        }
        ui.addproduct(product);
        ui.resetForm();
        ui.showmessage('product added successfully', 'success');






    });

document.getElementById('product-list')
    .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteproduct(e.target);

    });
