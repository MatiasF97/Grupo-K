//Pagina de comprar viaje

//Creando Clase y Objetos
class Lugares 
{
    constructor(id,name,image,description)
    {
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
    }
}

let cordoba = new Lugares(1,'Cordoba','/Lugares/Cordoba.jpg','Córdoba es una ciudad llena de arte y cultura. Puedes visitar museos como el Museo Provincial de Bellas Artes Emilio Caraffa, el Museo Histórico Provincial Marqués de Sobremonte, y el Museo de Arte Religioso Juan de Tejeda, que exhiben una gran cantidad de obras de artistas locales y extranjeros.<br>Córdoba es una ciudad llena de arte y cultura. Puedes visitar museos como el Museo Provincial de Bellas Artes Emilio Caraffa, el Museo Histórico Provincial Marqués de Sobremonte, y el Museo de Arte Religioso Juan de Tejeda, que exhiben una gran cantidad de obras de artistas locales y extranjeros.');
let jujuy = new Lugares(2,'Jujuy','/Lugares/Jujuy.jpg','Jujuy es conocida por sus coloridas fiestas y celebraciones, como la Fiesta Nacional de los Estudiantes y el Carnaval de Jujuy. También puedes visitar las comunidades indígenas de la región, como los Quechua y los Aymara, para aprender sobre sus tradiciones y costumbres.<br>Jujuy cuenta con impresionantes paisajes naturales, como la Quebrada de Humahuaca (declarada Patrimonio de la Humanidad por la UNESCO), el Cerro de los Siete Colores, y las Salinas Grandes. Puedes hacer caminatas por las montañas, visitar las cascadas y ríos de la región, o simplemente disfrutar de las vistas panorámicas.');
let rioNegro = new Lugares(3,'Rio Negro','/Lugares/RioNegro.jpg','Río Negro es una provincia rica en recursos naturales, con una gran variedad de paisajes que van desde las playas del Mar Argentino hasta las montañas de la Cordillera de los Andes. Puedes visitar lugares como el Parque Nacional Nahuel Huapi, el Parque Nacional Los Arrayanes, y el Valle de Los Dinosaurios para disfrutar de la belleza natural de la región.<br>Río Negro es un destino ideal para los amantes de la aventura y los deportes al aire libre. Puedes hacer rafting en el río Limay, pescar truchas en el río Manso, hacer trekking por los senderos del Parque Nacional Nahuel Huapi, y practicar esquí y snowboard en el Cerro Catedral.');
let tierraDelFuego = new Lugares(4,'Tierra del Fuego','/Lugares/TierraDelFuego.jpg','Tierra del Fuego es conocida por su belleza natural, con una gran variedad de paisajes que van desde las montañas de la Cordillera de los Andes hasta los glaciares y los fiordos del Canal Beagle. Puedes visitar lugares como el Parque Nacional Tierra del Fuego, el Glaciar Martial, y el Canal Beagle para disfrutar de la belleza natural de la región.<br>Tierra del Fuego es el hogar de una gran cantidad de animales, incluyendo pingüinos, lobos marinos, ballenas, y aves migratorias. Puedes hacer un tour de avistamiento de fauna para ver estas especies en su hábitat natural.');
let costaAtlantica = new Lugares(5,'Costa Atlantica','/Lugares/CostaAtlantica.jpg','La Costa Atlántica Argentina cuenta con más de 600 kilómetros de playas hermosas, que se extienden desde la provincia de Buenos Aires hasta la provincia de Río Negro. Puedes disfrutar de hermosas playas como Pinamar, Mar del Plata, Villa Gesell, y Monte Hermoso.<br>La Costa Atlántica Argentina es famosa por su deliciosa comida de mar, que incluye platos como pescado frito, mariscos, y paella. Puedes probar la gastronomía local en los muchos restaurantes que se encuentran a lo largo de la costa.<br>La Costa Atlántica Argentina es un destino ideal para los amantes de las actividades acuáticas, como el surf, el windsurf, el kitesurf, y el kayak.');
let mendoza = new Lugares(6,'Mendoza','/Lugares/Mendoza.jpg','Mendoza es conocida por su producción de vinos, especialmente el Malbec. Puedes hacer un tour por las bodegas y viñedos de la región para aprender sobre la cultura del vino y degustar algunos de los mejores vinos de Argentina.<br>Mendoza cuenta con una gran variedad de paisajes naturales, que van desde las montañas de los Andes hasta las llanuras áridas. Puedes visitar lugares como el Parque Provincial Aconcagua, el Valle de Uco, y el Cañón del Atuel para disfrutar de la belleza natural de la región.');

let arrayLugares = [];
arrayLugares.push(cordoba);
arrayLugares.push(jujuy);
arrayLugares.push(rioNegro);
arrayLugares.push(tierraDelFuego);
arrayLugares.push(costaAtlantica);
arrayLugares.push(mendoza);
//Creando Clase y Objetos END

//Armando los Divs
let container = document.querySelector('.container');

for (let i = 0;  i< arrayLugares.length; i++) {
    container.innerHTML += `
                            <div class="row justify-content-center divSection my-5 lugares" id="${arrayLugares[i].id}" hidden="true">
                                <div class="col-md-10 d-flex justify-content-center">
                                    <h2 class="tituloSection"><strong>${arrayLugares[i].name}</strong></h2>
                                </div>
                                <div class="col-md-5 my-5">
                                    <img src="${arrayLugares[i].image}" width="100%">
                                </div>
                                <div class="col-md-5 my-5">
                                    <p>${arrayLugares[i].description}
                                    </p>
                                </div>
                            </div>
                            `
}
//Armando los Divs END

//Funcion para mostrar los divs con el destino especifico
function changeDestino()
{
    //reiniciar valores de precios
    let total = document.querySelector('#pasajeros');
    total.value = 0;
    let precioTotal = document.querySelector('#precio');
    precioTotal.value = 0;
    totalNumber = 0;
    

    let divHidden = document.querySelectorAll('.lugares');
    for (let i = 0; i < divHidden.length; i++) {
        divHidden[i].hidden = "true";
    }
    
    let destinoID = document.querySelector('#destino').selectedIndex;

    let div = document.getElementById(`${destinoID}`);
    div.hidden = "";
}
//Funcion para mostrar los divs con el destino especifico END

//Seteando fecha
let fecha = document.querySelector('#fechaIda');
var date = new Date();

var day = ("0" + date.getDate()).slice(-2);
var month = ("0" + (date.getMonth() + 1)).slice(-2);

var today = date.getFullYear() + "-" + (month) + "-" + (day);
fecha.value = today;
fecha.min = today;
//Seteando fecha END

//Agregando pasajeros
let total = document.querySelector('#pasajeros');
let sumar = document.querySelector('#suma');
let restar = document.querySelector('#resta');
let totalNumber = 0;
let precioTotal = document.querySelector('#precio');

sumar.addEventListener('click',function(){
    let destinoID = document.querySelector('#destino').selectedIndex;
    if (destinoID != 0)
    {
        totalNumber += 1;
        total.value = totalNumber;

        switch (destinoID) {
            case 1:
                precioTotal.value = total.value * 15000;
                break;
            case 2:
                precioTotal.value = total.value * 7500;
                break;
            case 3:
                precioTotal.value = total.value * 11300;
                break;
            case 4:
                precioTotal.value = total.value * 16400;
                break;
            case 5:
                precioTotal.value = total.value * 9500;
                break;
            case 6:
                precioTotal.value = total.value * 8900;
                break;
            default:
                break;
        }
    }
});

restar.addEventListener('click',function(){
    let destinoID = document.querySelector('#destino').selectedIndex;

    if (destinoID != 0)
    {
        if (totalNumber > 0)
        {
            totalNumber -= 1;
            total.value = totalNumber;
            switch (destinoID) {
                case 1:
                    precioTotal.value = total.value * 15000;
                    break;
                case 2:
                    precioTotal.value = total.value * 7500;
                    break;
                case 3:
                    precioTotal.value = total.value * 11300;
                    break;
                case 4:
                    precioTotal.value = total.value * 16400;
                    break;
                case 5:
                    precioTotal.value = total.value * 9500;
                    break;
                case 6:
                    precioTotal.value = total.value * 8900;
                    break;
                default:
                    break;
            }
        }
    }
})
//Agregando pasajeros END

//Comprar
let comprar = document.querySelector('#comprar');
comprar.addEventListener('click', function(){
    let origen = document.querySelector('#origen').selectedIndex;
    let destino = document.querySelector('#destino').selectedIndex;
    let fechaIda = document.querySelector('#fechaIda');
    let pasajeros = document.querySelector('#pasajeros');
    let precioTotal = document.querySelector('#precio');
    
    if ((origen != 0) && (destino != 0) && (fechaIda.value != 0) && (pasajeros.value != 0) && (precioTotal.value != 0))
    {
        alert('Su compra se proceso correctamente');
    }
    else
    {
        alert('ERROR, campos vacios');
    }
})
//Comprar END
//Pagina de comprar viaje END