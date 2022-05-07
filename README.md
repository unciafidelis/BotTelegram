# BotTelegram
Bot de telegram con node js - Implementación de FizzBuzz

### Aviso Importante

Se realizó un refactor de todas las clases y pruebas ya que las funciones no eran estáticas
Se descubrió este error gracis al despliegue de la funcion `applyFizzbuzz`que requeria una instancia
que no se creó dado que en el código otorgado se realiza el uso de la clase directa, propiedad que solo se puede
utilizar en métodos estáticos.

En cada función de ExplorerController.js se incluyó la palabra reservada `static` que no se había colocado en el ejercicio
de la semana 4.

#### ExplorerController.js

```javascript
const ExplorerService = require("../services/ExplorerService");
const Reader = require("../utils/Reader");
const FizzBuzz = require("../services/FizzBuzzService");

class ExplorerController {
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonPath("./explorers.json");
        const xByMission = ExplorerService.filterByMission(explorers,mission);
        return xByMission;
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonPath("./explorers.json");
        const xUsersByMission = ExplorerService.getExplorersUsernamesByMission(explorers,mission);
        return xUsersByMission;
    }
    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonPath("./explorers.json");
        const xAmountByMission = ExplorerService.getAmountOfExplorersByMission(explorers,mission);
        return xAmountByMission;
    }
    static getApplyValidationInNumber(number){
        const aValidationInNumber = FizzBuzz.applyValidationInNumber(number);
        return aValidationInNumber;
    }
    static applyFizzbuzz(number){
        return FizzBuzz.applyValidationInNumber(number);
    }
}
module.exports = ExplorerController;
```
La modificación de este archivo y de sus pruebas unitarias en `ExplorerController.test.js` desencadenó la refactorización
de los demás archivos: `ExplorerService.js`, `ExplorerService.test.js`, `FizzBuzzService.js`, `FizzBuzzService.test.js`, `Reader.js`
y `Reader.test.js`.


## Instalación

1. Clonar repo
2. ejecutar la instrucción `npm update`
Se requiere crear el archivo `.env`

.env

```javascript
TOKEN="Aqui va tu token del bot de telegram"
```