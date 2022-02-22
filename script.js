class Mascota {
 constructor(nombre, edad, raza, horas, dueño) {
    this.nombre = nombre
    this.edad = edad
    this.raza = raza 
    this.horas = parseFloat(horas)
    this.dueño = dueño
 }
    total(mascota)  {
        return this.horas * 100
    } 
}
const mascota1 = new Mascota("Paco", 3, "Bulldog", 8, "Jose Luis")
const mascota2 = new Mascota("Lucia", 5, "Golden", 5, "Maria")
const mascota3 = new Mascota("Milo", 1, "Caniche", 4, "Franco")
const mascota4 = new Mascota("Keyla", 2, "Dalmata", 3, "Carlos")
const mascota5= new Mascota("Nono", 7, "Silvestre", 2, "Maximo")

const mascotas = [mascota1, mascota2, mascota3, mascota4, mascota5]

let nombrem = prompt('Ingrese su nombre')
let index = 1
    for (const mascota of mascotas) {
            if (mascota.dueño == nombrem) {
                    alert("Hola "+ (mascota.dueño) + ", ya puede retirar a su perro/a " + (mascota.nombre) +", usted debe " + mascota.total(mascota) + " pesos")
                    break
            }
            if (index == mascotas.length) {
                alert('Usted no tiene perros en la guarderia')
            }
            else  { 
             index += 1
             continue
            }
    }


