# Ethereum-back

### Транзакции:

#### GET /api/transactions - Получить информацию о всех транзакциях.

##### Parameters:

page - Страница с транзакциями.
limit - Количество элементов для отображения на странице.

```shell

# Успешный ответ
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  Возвращает массив всех транзакций.
}

```

#### GET /api/transactions/search - Получить информацию о всех транзакциях.

##### Parameters:

page - Страница с транзакциями.
limit - Количество элементов для отображения на странице.
search - Поиск данных в транзакциях.
type - Тип данных.

```shell

# Успешный ответ
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  Возвращает массив выбранных транзакций.
}

```
