import React from "react";
import { useFetchArticlesQuery } from "../services/nytimes-articles-search";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { useLocation, Link, useNavigate } from "react-router-dom";
import SearchBar from "../features/searchTerm/SearchBar";
import { setSearchTerm } from "../features/searchTerm/searchTermSlice";
import { setPage } from "../features/page/pageSlice";

const Articles = () => {
  const term: string = useAppSelector((state: any) => state.searchTerm.term);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const page = parseInt(params.get("page") || "1");

  const { data, isFetching } = useFetchArticlesQuery({
    page: page - 1,
    term,
  });

  const onSearchTermSubmit = (term: string) => {
    dispatch(setSearchTerm(term));
  };

  const onArticleClick = (doc: any) => {
    dispatch(setPage(page));
    navigate(`/details/${doc._id.slice(14)}`);
  };

  return (
    <div className="container">
      <div className="content">
        <SearchBar onSearchTermSubmit={onSearchTermSubmit} />
        <p className="subtitle">Results:</p>
        {isFetching ? (
          ""
        ) : (
          <ul>
            {data!.response.docs.map((doc: any) => (
              <li key={doc.headline.main} onClick={() => onArticleClick(doc)}>
                {doc.headline.main}
              </li>
            ))}
          </ul>
        )}
        <div className="pager-section">
          <Link
            className={`page-nav ${page === 1 ? "page-nav-invisible" : ""}`}
            to={`/articles?page=${page - 1}`}
          >
            &#60; Prev page
          </Link>
          <Link className="page-nav" to={`/articles?page=${page + 1}`}>
            Next page &#62;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Articles;
