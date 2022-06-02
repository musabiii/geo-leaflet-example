// импортируем функцию
// создаем локальные переменные для карты и маркера
// каждый модуль имеет собственное пространство имен
let map = null
let marker = null

// функция принимает позицию - массив с широтой и долготой
// и сообщение, отображаемое над маркером (tooltip)
export function getMap(position, tooltip) {
  // если карта не была инициализирована
  if (map === null) {
    // второй аргумент, принимаемый методом setView - это масштаб (zoom)
    map = L.map('map2').setView(position, 15)
  } //else return

  // что-то типа рекламы
  // без этого карта работать не будет
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)

  // добавляем маркер с сообщением
  L.marker(position).addTo(map).bindPopup(tooltip).openPopup()
}



const currentPosition = ["45.050195", "41.911996"]
// вызываем функцию, передавая ей текущую позицию и сообщение
getMap(currentPosition, 'You are here')
// getMap(["45.011229", "41.920206"], 'You

// // находим кнопку и добавляем к ней обработчик
// document.getElementById('my_position2').onclick = () => {
//     // const currentPosition = [latitude, longitude]
//     const currentPosition = ["45.050195", "41.911996"]
//     // вызываем функцию, передавая ей текущую позицию и сообщение
//     getMap(currentPosition, 'You are here')
//     // getMap(["45.011229", "41.920206"], 'You are here2')

// }

// document.getElementById('some_position').onclick = () => {
//     const currentPosition = ["45.050195", "41.911996"]
//     map.setView(currentPosition, 15)
// }

// document.getElementById('some_position2').onclick = () => {
//     const currentPosition = ["45.011229", "41.920206"]
//     map.setView(currentPosition, 15)
// }

