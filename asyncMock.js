const fs = require('fs');

class Contenedor {
    constructor(nombre){
        this.nameFile = `./${nombre}.json`;
    }
    save = async (obj) =>{
        try{
            if (this.getAll()!=false) {
                let dataObj = new Object();
                dataObj = await this.getAll();
                dataObj.push(obj);
                fs.writeFile(this.nameFile, JSON.stringify(dataObj), 'utf-8', (err)=>{if(err) console.log(err)})
            } else {
                console.log('El archivo no existe')
            }
            
        }
        catch (e){
            console.log('Error en la escritura del archivo', e)
        }
    }
    getAll= async () => {
        try{
            const dataReturn = await fs.promises.readFile(this.nameFile, 'utf-8')
            return JSON.parse(dataReturn, null, ' ');
        }
        catch(e){
            console.log('Error al crear o modificar el archivo', e)
        }
    }
    getByid = async (id) => {
        try{
            const dataReturn = await fs.promises.readFile(this.nameFile, 'utf-8');
            return JSON.parse(dataReturn, null, ' ').filter(x=>x.id ==id);
        }
        catch(e){
            console.log('Error al buscar el id', e)
        }
    }
    deleteById = async(id) => {
        try{
            const dataReturn = await fs.promises.readFile(this.nameFile, 'utf-8');
            let readArray = JSON.parse(dataReturn, null, ' ');
            let newArray = readArray.filter(prod=>prod.id!==id)
            console.log(newArray)
            await fs.promises.writeFile(this.nameFile, JSON.stringify(newArray, null, ' '), 'utf-8')
        }
        catch(e){
            console.log('Error al buscar la id', e)
        }
    }

}

module.exports = Contenedor;