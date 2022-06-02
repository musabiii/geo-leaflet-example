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
    map = L.map('map').setView(position, 15)
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

const currentPosition = ["66.079597", "76.607819"]
// вызываем функцию, передавая ей текущую позицию и сообщение
getMap(currentPosition, 'Мы находимся здесь')
// getMap(["45.011229", "41.920206"], 'You are here2')

// находим кнопку и добавляем к ней обработчик
document.getElementById('my_position').onclick = () => {
    // const currentPosition = [latitude, longitude]
    const currentPosition = ["45.050195", "41.911996"]
    // вызываем функцию, передавая ей текущую позицию и сообщение
    getMap(currentPosition, 'You are here')
    getMap(["45.011229", "41.920206"], 'You are here2')

    const arr = getArr();
    arr.forEach(el=>{
        try {
            getMap([el.location_latitude, el.location_longitude], `Имя:${el.first_name}\n номер ${el.phone_number}`)
        } catch (err) {}
    })
}

document.getElementById('some_position').onclick = () => {
    const currentPosition = ["45.050195", "41.911996"]
    map.setView(currentPosition, 15)
}

document.getElementById('some_position2').onclick = () => {
    const currentPosition = ["45.011229", "41.920206"]
    map.setView(currentPosition, 15)
}


function getArr() {
    return [
        {
          "id": "593473065",
          "first_name": "Никита",
          "full_name": "",
          "email": "",
          "phone_number": "+78652609059",
          "address_city": "Ставрополь",
          "address_street": "переулок Красина",
          "address_house": "8",
          "address_entrance": "",
          "address_floor": "",
          "address_office": "1",
          "address_comment": "",
          "location_latitude": "45.049328",
          "location_longitude": "41.962677",
          "amount_charged": "973",
          "user_id": "94839890",
          "user_agent": "\"Mozilla/5.0 (Linux; Android 7.1.1; GOME 2017M27A Build/N4F26M; wv) AppleWebKit/537.36 (KHTML",
          "created_at": " like Gecko) Version/4.0 Chrome/93.0.4577.62 Mobile Safari/537.36 yandex-taxi/4.51.1.122032 Android/7.1.1 (GOME; GOME 2017M27A) Superapp/Eats EatsKit/3.2.0\"",
          "address_doorcode": "2021-09-16T14:32:40.000Z"
        },
        {
          "id": "664006858",
          "first_name": "мария ц.",
          "full_name": "",
          "email": "",
          "phone_number": "+79000031615",
          "address_city": "Ставрополь",
          "address_street": "улица Короленко",
          "address_house": "20",
          "address_entrance": "1",
          "address_floor": "1",
          "address_office": "4",
          "address_comment": "",
          "location_latitude": "45.037439",
          "location_longitude": "41.932172",
          "amount_charged": "864",
          "user_id": "312874763",
          "user_agent": "\"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML",
          "created_at": " like Gecko) Chrome/94.0.4606.85 YaBrowser/21.11.0.1999 Yowser/2.5 Safari/537.36\"",
          "address_doorcode": "2021-11-21T13:13:04.000Z"
        },
        {
          "id": "605781155",
          "first_name": "Евгения",
          "full_name": "Евгения",
          "email": "xoxlenkova.evgeniya@mail.ru",
          "phone_number": "+79000811018",
          "address_city": "Ставрополь",
          "address_street": "улица Серова",
          "address_house": "537/1",
          "address_entrance": "4",
          "address_floor": "3",
          "address_office": "164",
          "address_comment": "",
          "location_latitude": "45.030362",
          "location_longitude": "42.027285",
          "amount_charged": "897",
          "user_id": "104296454",
          "user_agent": "ios(5.21.0)",
          "created_at": "2021-09-28T18:28:37.000Z",
          "address_doorcode": "164"
        },
        {
          "id": "498272408",
          "first_name": "Светлана",
          "full_name": "Медведева Светлана Алексеевна",
          "email": "svetlana0477@icloud.com",
          "phone_number": "+79001206636",
          "address_city": "Ставрополь",
          "address_street": "улица Мира",
          "address_house": "461",
          "address_entrance": "",
          "address_floor": "",
          "address_office": "",
          "address_comment": "",
          "location_latitude": "45.034177",
          "location_longitude": "41.938406",
          "amount_charged": "1017",
          "user_id": "185293573",
          "user_agent": "ios(5.15.0)",
          "created_at": "2021-06-24T18:38:09.000Z",
          "address_doorcode": ""
        },
        {
          "id": "631039483",
          "first_name": "Мария Обоимова",
          "full_name": "",
          "email": "",
          "phone_number": "+79001225832",
          "address_city": "Ставрополь",
          "address_street": "улица 45-я Параллель",
          "address_house": "36",
          "address_entrance": "",
          "address_floor": "",
          "address_office": "",
          "address_comment": "",
          "location_latitude": "44.998841",
          "location_longitude": "41.914008",
          "amount_charged": "688",
          "user_id": "303965693",
          "user_agent": "ios(5.23.1)",
          "created_at": "2021-10-23T08:52:58.000Z",
          "address_doorcode": ""
        },
        {
          "id": "626902008",
          "first_name": "Александр Аущенко",
          "full_name": "",
          "email": "",
          "phone_number": "+79001246231",
          "address_city": "Ставрополь",
          "address_street": "улица Доваторцев",
          "address_house": "75А",
          "address_entrance": "",
          "address_floor": "",
          "address_office": "",
          "address_comment": "При получении заказа позвонить на номер 89198840589. Находимся у ресторана.",
          "location_latitude": "44.997477",
          "location_longitude": "41.923153",
          "amount_charged": "0",
          "user_id": "292916301",
          "user_agent": "android (2.57.0)",
          "created_at": "2021-10-19T10:03:53.000Z",
          "address_doorcode": ""
        },
        {
          "id": "613615793",
          "first_name": "Диана",
          "full_name": "Диана Чепульченко",
          "email": "diana.latotskaya1993@yandex.ru",
          "phone_number": "+79001383114",
          "address_city": "Ставрополь",
          "address_street": "улица Ленина",
          "address_house": "273",
          "address_entrance": "",
          "address_floor": "2",
          "address_office": "206",
          "address_comment": "\"это гостинница Ставрополь. 2 этаж",
          "location_latitude": " номер 206. прошу донести до номера.\"",
          "location_longitude": "45.038725",
          "amount_charged": "41.954845",
          "user_id": "586",
          "user_agent": "288409674",
          "created_at": "ios(5.21.0)",
          "address_doorcode": "2021-10-06T17:06:05.000Z"
        },
        {
          "id": "609187019",
          "first_name": "валерий",
          "full_name": "",
          "email": "",
          "phone_number": "+79001383408",
          "address_city": "Ставрополь",
          "address_street": "улица Западный Обход",
          "address_house": "64Б",
          "address_entrance": "",
          "address_floor": "",
          "address_office": "",
          "address_comment": "",
          "location_latitude": "45.021953",
          "location_longitude": "41.907612",
          "amount_charged": "470",
          "user_id": "89577175",
          "user_agent": "android (2.56.1)",
          "created_at": "2021-10-02T10:01:13.000Z",
          "address_doorcode": ""
        },]
}