import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import { useParams, Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { useFetchArticlesQuery } from "../services/nytimes-articles-search";
import { Article } from "../interfaces/article";

const ArticleDetails = () => {
  const term: string = useAppSelector((state: any) => state.searchTerm.term);
  const page: number = useAppSelector((state: any) => state.page.value);
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  const { data, isFetching } = useFetchArticlesQuery({
    page: page - 1,
    term,
  });

  useEffect(() => {
    if (!isFetching && data) {
      const doc = data.response.docs.filter(
        (doc: Article) => doc._id === `nyt://article/${id}`
      )[0];
      setArticle(doc);
    }
  }, [data, isFetching, id]);

  return (
    <div className="container">
      <div className="content">
        <Link className="page-nav" to={`/articles?page=${page}`}>
          &#60; Go to results page
        </Link>
        {!article ? (
          ""
        ) : (
          <div>
            <h2>{article.headline?.main}</h2>
            <p className="article-date">
              {article.pub_date
                ? DateTime.fromISO(article.pub_date).toFormat("dd.MM.yyyy")
                : ""}
            </p>
            <p>{article.abstract}</p>
            <a href={article.web_url} target="_blank" rel="noreferrer">
              Read the full article
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleDetails;
