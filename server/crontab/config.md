Заполнение задач на уведомления
```shell
0 12 * * * wget faughnan.blweb.ru/notify?key=$KEY -O /dev/null
```

Отправка уведомлений
```shell
0 12,13,18,19 * * * wget faughnan.blweb.ru/send-notify -O /dev/null
```

Подгрузка курса валют
```shell
0 12 * * * wget faughnan.blweb.ru/update_today_currency -O /dev/null
```
