Разработка интерфейса для сайта Hacker News из двух страниц



Главная страница

Показывает последние 100 новостей в виде списка, отсортированного по дате, самые свежие сверху.

Каждая новость содержит

- название
- рейтинг
- ник автора
- дату публикации
- 
По клику на новость происходит переход на страницу новости

Список новостей должен автоматически обновляться раз в минуту без участия пользователя

На странице должна быть кнопка для принудительного обновления списка новостей

Страница новости

Должна содержать:
ссылку на новость
заголовок новости
дату
автора
счётчик количества комментариев
список комментариев в виде дерева
Корневые комментарии подгружаются сразу же при входе на страницу, вложенные - по клику на корневой.
Список комментариев должен автоматически обновляться раз в минуту без участия пользователя
На странице должна быть кнопка для принудительного обновления списка комментариев
На странице должна быть кнопка для возврата к списку новостей
Технические требования

Приложение разработано с использованием React и Redux
Использован официальный API Hacker News. Вызовы Hacker News API и обработка данных от него производятся напрямую с фронтенда (кроме случая, если вы сделаете опциональное задание про Node.JS).
Роутинг выполнен с использованием React Router v5
Фреймворк UI любой на ваше усмотрение (как пример React Bootstrap или Semantic UI). Можно хоть на голом CSS, главное, чтобы выглядело красиво.
Пакетный менеджер npm
Приложение должно запускаться по адресу localhost:3000 командой npm start
После запуска приложения все переходы по ссылкам не перезагружают страницу
