--Получить список всех категорий (идентификатор, наименование категории);
SELECT id, category
FROM categories c;

--Получить список всех категорий (идентификатор, наименование категории);
SELECT DISTINCT id,
                category
FROM categories
         INNER JOIN articles_categories ON categories.id = articles_categories.category_id;

--Получить список категорий с количеством публикаций (идентификатор, наименование категории, количество публикаций в категории);
SELECT
    id,
    category,
    COUNT(article_id) AS count
FROM
    categories
        INNER JOIN articles_categories ON categories.id = articles_categories.category_id
GROUP BY
    id,
    category;


--Получить список публикаций (идентификатор публикации, заголовок публикации, анонс публикации, дата публикации, имя и фамилия автора, контактный email, количество комментариев, наименование категорий). Сначала свежие публикации;
SELECT
    articles.id,
    articles.title,
    articles.announce,
    articles.created_date,
    authors.firstname,
    authors.lastname,
    authors.email,
    COUNT(comments.id),
    categories.list as categories
FROM
    articles
        INNER JOIN authors ON articles.author_id = authors.id
        INNER JOIN comments ON articles.id = comments.article_id
        INNER JOIN
    (
        SELECT
            articles.id AS "article_id",
            STRING_AGG(categories.category, ', ') AS "list"
        FROM articles_categories
                 LEFT JOIN articles ON articles.id = articles_categories.article_id
                 LEFT JOIN categories ON categories.id = articles_categories.category_id
        GROUP BY
            articles.id
    ) categories ON articles.id = categories.article_id
GROUP BY
    articles.id,
    articles.title,
    articles.announce,
    articles.created_date,
    authors.firstname,
    authors.lastname,
    authors.email,
    categories.list
ORDER BY articles.created_date DESC;

--Получить полную информацию определённой публикации (идентификатор публикации, заголовок публикации, анонс, полный текст публикации, дата публикации, путь к изображению, имя и фамилия автора, контактный email, количество комментариев, наименование категорий);
SELECT
    articles.id,
    articles.title,
    articles.announce,
    articles.full_text,
    articles.created_date,
    articles.picture,
    authors.firstname,
    authors.lastname,
    authors.email,
    COUNT(comments.id),
    categories.list as categories
FROM
    articles
        INNER JOIN authors ON articles.author_id = authors.id
        INNER JOIN comments ON articles.id = comments.article_id
        INNER JOIN
    (
        SELECT
            articles.id AS "article_id",
            STRING_AGG(categories.category, ', ') AS "list"
        FROM articles_categories
                 LEFT JOIN articles ON articles.id = articles_categories.article_id
                 LEFT JOIN categories ON categories.id = articles_categories.category_id
        GROUP BY
            articles.id
    ) categories ON articles.id = categories.article_id
GROUP BY
    articles.id,
    articles.title,
    articles.announce,
    articles.full_text,
    articles.created_date,
    articles.picture,
    authors.firstname,
    authors.lastname,
    authors.email,
    categories.list
ORDER BY articles.id;

--Получить список из 5 свежих комментариев (идентификатор комментария, идентификатор публикации, имя и фамилия автора, текст комментария);

SELECT
    comments.id,
    articles.id,
    authors.firstname,
    authors.lastname,
    comments.comment
FROM
    comments
        INNER JOIN articles ON articles.id = comments.article_id
        INNER JOIN authors ON comments.author_id = authors.id
GROUP BY
    comments.id,
    articles.id,
    authors.firstname,
    authors.lastname,
    comments.comment,
    comments.created_date
ORDER BY
    comments.created_date DESC
LIMIT 5;
--Получить список комментариев для определённой публикации (идентификатор комментария, идентификатор публикации, имя и фамилия автора, текст комментария). Сначала новые комментарии;
SELECT
    comments.id,
    articles.id,
    authors.firstname,
    authors.lastname,
    comments.comment
FROM
    comments
        INNER JOIN articles ON articles.id = comments.article_id
        INNER JOIN authors ON comments.author_id = authors.id
WHERE articles.id = 2
GROUP BY
    comments.id,
    articles.id,
    authors.firstname,
    authors.lastname,
    comments.comment,
    comments.created_date
ORDER BY
    comments.created_date DESC;

--Обновить заголовок определённой публикации на «Как я встретил Новый год»;
UPDATE articles
SET title = 'Как я встретил Новый год'
WHERE articles.id = 1;
