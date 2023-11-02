//Ecmascipt 9'dan önce kullanılan bir değişken
var name1 = "Berkay"

// Ecmascipt 9'dan sonra kullanılan bir değişken
let name2 = "Berkay" // let değişken tanımlamak için
const name3 = "Berkay" // Sabit tanımlamak için

console.log(name3)

// var ve let farkları
// var fuction scope, let block scope

function test(){
    if(true){
        var degisken = "Merhaba Dünya"
    }
    if(true){
        console.log(degisken)
    }
}
test()

// var keyword değişkenler tekrar tanımlanabilir ama let tekrar tanımlanamaz
var degisken = "Merhaba Dünya"
var degisken = "Hello world"
console.log(degisken)

// let böyle kullanılabilir
let degisken1 = "degisken"
degisken1 = "degisken2"

// Hoisting: Bir değişkeni önce kullanma sonra tanımlama
degisken = "Merhaba Dünya"
console.log(degisken)
var degisken

// let ve const farkları
// let mutable (değiştirilebilir) const immutable (değiştirilemez)

/* let ad = "Berkay"
const soyadi = "Öztürk"
ad = "Can"
soyadi = "Berkay" */

var agirlik = 50
if(agirlik > 49){
    var miktar = 1.4
    console.log(`${miktar} litre su içmelisin`)
}
console.log(miktar)

// letle yapınca hata verdi.

/* let agirlik = 50
if(agirlik > 49){
    let miktar = 1.4
    console.log(`${miktar} litre su içmelisin`)
}
console.log(miktar) */

// Geleneksel Fonksiyon Tanımlama
function topla(a, b){
    return a+b
}

// Arrow function es9 sonrası
const toplama=(a, b)=>a+b

function test(){
    console.log("Merhaba "+this.adi)
}

const person = {
    adi: "Berkay",
    soyle: test,
}

person.soyle()

const test1=()=>{
    console.log("Merhaba Dünya " + person1.adi)
}

const person1 = {
    adi: "Berkay",
    soyle: test1,
}

person1.soyle()

function addToCart(urun_adi, adet, fiyat){
    console.log(urun_adi)
    console.log(adet)
    console.log(fiyat)
}

addToCart("Elma", 5, 10)
addToCart("Armut", 2, 20)
addToCart("Limon", 3, 15)

let urunler = [{urun_adi: "Elma", adet:5, fiyat:10}, {urun_adi: "Armut", adet:2, fiyat:20}, {urun_adi: "Limon", adet:3, fiyat:15}]

function addToCart(urun){
    console.log(urun.urun_adi)
    console.log(urun.adet)
    console.log(urun.fiyat)
}

console.log(urunler[0])

// Rest Operatörü
function sum(...sayilar){
    let toplam = 0
    for(let i= 0; i < sayilar.length; i++){
        toplam += sayilar[i]
    }
    console.log(toplam)
}

sum(10,20,30,40,50,60,70)

let [icanadolu, marmara, karadeniz] = ["İç Anadolu", "Marmara", "Karadeniz"]
console.log(icanadolu)

let [birinci, ikinci, ucuncu] = [{adi: "İç Anadolu", nufus: "20m"},
                                 {adi: "Marmara", nufus: "10m"},
                                 {adi: "Karadeniz", nufus: "30m"}]

console.log(birinci)

// Conditional ternary operator
let a = 102
if(a < 100){
    console.log("100'den küçük")
}else if(a == 100){
    console.log("100'e eşit")
}else{
    console.log("100'den büyük")
}

const sonuc=a==100?"100'e eşit":"100'e eşit değil"
console.log(sonuc)

function example(){
    return a<100?"100'den küçük":
    a==100?"100'e eşit":
    a >100?"100'den büyük":
    "negatif"
}

console.log(example())

// 1.yol
const sayilar = [1,2,3,4,5,6,7,8,9]
const ciftSayilar = sayilar.filter(function(sayilar){
    return sayilar%2 == 0
})
console.log(ciftSayilar)

// 2.yol
const ciftSayilar2 = sayilar.filter(sayilar=> sayilar % 2 == 0)
console.log(ciftSayilar2)

const sayi=sayilar.find(function(sayilar){
    return sayilar % 2 == 0
})

console.log(sayi)