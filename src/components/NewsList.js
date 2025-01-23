// src/components/NewsList.js
import React, { useEffect, useState } from 'react';

const NewsList = () => {
    const [news, setNews] = useState([]);

    const fetchNews = () => {
        // Здесь сделайте запрос к API для получения новостей
        fetch('API_URL_FOR_NEWS')
            .then(response => response.json())
            .then(data => {
                const sortedNews = data.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 100);
                setNews(sortedNews);
            });
    };

    useEffect(() => {
        fetchNews();
        const intervalId = setInterval(fetchNews, 60000); // Автоматическое обновление каждую минуту
        return () => clearInterval(intervalId); // Очистка при размонтировании
    }, []);

    return (
        <div>
            <h1>Последние новости</h1>
            <button onClick={fetchNews}>Обновить список новостей</button>
            <ul>
                {news.map((item) => (
                    <li key={item.id}>
                        <a href={`/news/${item.id}`}>
                            <h2>{item.title}</h2>
                            <p>Рейтинг: {item.rating}</p>
                            <p>Автор: {item.author}</p>
                            <p>Дата публикации: {new Date(item.date).toLocaleString()}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsList;
