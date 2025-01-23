// src/components/NewsPage.js
import React, { useEffect, useState } from 'react';

const NewsPage = ({ match }) => {
    const [news, setNews] = useState({});
    const [comments, setComments] = useState([]);

    const fetchNewsDetails = () => {
        // Запрос к API для получения информации о новости
        fetch(`API_URL_FOR_NEWS/${match.params.id}`)
            .then(response => response.json())
            .then(data => setNews(data));
    };

    const fetchComments = () => {
        // Запрос к API для получения комментариев
        fetch(`API_URL_FOR_COMMENTS/${match.params.id}`)
            .then(response => response.json())
            .then(data => setComments(data));
    };

    useEffect(() => {
        fetchNewsDetails();
        fetchComments();
        const intervalId = setInterval(() => {
            fetchComments();
        }, 60000); // Автоматическое обновление каждую минуту
        return () => clearInterval(intervalId); // Очистка при размонтировании
    }, [match.params.id]);

    return (
        <div>
            <h1>{news.title}</h1>
            <p>Автор: {news.author}</p>
            <p>Дата: {new Date(news.date).toLocaleString()}</p>
            <p>Ссылка на новость: <a href={news.link}>{news.link}</a></p>
            <p>Количество комментариев: {comments.length}</p>
            <button onClick={fetchComments}>Обновить комментарии</button>
            <button onClick={() => window.history.back()}>Назад к списку новостей</button>
            <h2>Комментарии:</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <p>{comment.text}</p>
                        <p>Автор: {comment.author}</p>
                        <p>Дата: {new Date(comment.date).toLocaleString()}</p>
                        {/* Здесь можно добавить функционал для подгрузки вложенных комментариев */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsPage;
