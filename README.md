# Ethereum-back

### Транзакции:

#### GET /api/transactions - Получить информацию о всех транзакциях.

##### Parameters:

page - Страница с транзакциями.<br/>
limit - Количество элементов для отображения на странице.

```shell

# Успешный ответ
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  Возвращает массив всех транзакций.
}

# Неуспешный ответ
Status: 400 BadRequest
Content-Type: application/json
ResponseBody: {
  "message": <Ошибка от Joi>
}

# Неуспешный ответ

Status: 404 NotFound
Content-Type: application/json
ResponseBody: {
"message": "Not found"
}

```

#### GET /api/transactions/search - Получить информацию о всех транзакциях.

##### Parameters:

page - Страница с транзакциями.<br/>
limit - Количество элементов для отображения на странице.<br/>
search - Поиск данных в транзакциях.<br/>
type - Тип данных.

```shell

# Успешный ответ
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  Возвращает массив выбранных транзакций.
}

# Неуспешный ответ
Status: 400 BadRequest
Content-Type: application/json
ResponseBody: {
  "message": <Ошибка от Joi>
}

# Неуспешный ответ
Status: 404 NotFound
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}

```
