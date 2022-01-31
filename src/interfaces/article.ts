export interface Article {
  /**
   *
   * @type {string}
   * @memberof Article
   */
  abstract?: string;
  /**
   *
   * @type {string}
   * @memberof Article
   */
  web_url?: string;
  /**
   *
   * @type {string}
   * @memberof Article
   */
  snippet?: string;
  /**
   *
   * @type {number}
   * @memberof Article
   */
  print_page?: number;
  /**
   *
   * @type {string}
   * @memberof Article
   */
  source?: string;
  /**
   *
   * @type {Array<Multimedia>}
   * @memberof Article
   */
  multimedia?: Array<Multimedia>;
  /**
   *
   * @type {Headline}
   * @memberof Article
   */
  headline?: Headline;
  /**
   *
   * @type {Array<Keyword>}
   * @memberof Article
   */
  keywords?: Array<Keyword>;
  /**
   *
   * @type {string}
   * @memberof Article
   */
  pub_date?: string;
  /**
   *
   * @type {string}
   * @memberof Article
   */
  document_type?: string;
  /**
   *
   * @type {string}
   * @memberof Article
   */
  news_desk?: string;
  /**
   *
   * @type {Byline}
   * @memberof Article
   */
  byline?: Byline;
  /**
   *
   * @type {string}
   * @memberof Article
   */
  type_of_material?: string;
  /**
   *
   * @type {string}
   * @memberof Article
   */
  _id?: string;
  /**
   *
   * @type {number}
   * @memberof Article
   */
  word_count?: number;
  /**
   *
   * @type {number}
   * @memberof Article
   */
  score?: number;
  /**
   *
   * @type {string}
   * @memberof Article
   */
  uri?: string;
}

/**
 *
 * @export
 * @interface Byline
 */
export interface Byline {
  /**
   *
   * @type {string}
   * @memberof Byline
   */
  original?: string;
  /**
   *
   * @type {Array<Person>}
   * @memberof Byline
   */
  person?: Array<Person>;
  /**
   *
   * @type {string}
   * @memberof Byline
   */
  organization?: string;
}

export interface Headline {
  /**
   *
   * @type {string}
   * @memberof Headline
   */
  main?: string;
  /**
   *
   * @type {string}
   * @memberof Headline
   */
  kicker?: string;
  /**
   *
   * @type {string}
   * @memberof Headline
   */
  contentKicker?: string;
  /**
   *
   * @type {string}
   * @memberof Headline
   */
  print_headline?: string;
  /**
   *
   * @type {string}
   * @memberof Headline
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Headline
   */
  seo?: string;
  /**
   *
   * @type {string}
   * @memberof Headline
   */
  sub?: string;
}

export interface Keyword {
  /**
   *
   * @type {string}
   * @memberof Keyword
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Keyword
   */
  value?: string;
  /**
   *
   * @type {number}
   * @memberof Keyword
   */
  rank?: number;
  /**
   *
   * @type {string}
   * @memberof Keyword
   */
  major?: string;
}

export interface Multimedia {
  /**
   *
   * @type {number}
   * @memberof Multimedia
   */
  rank?: number;
  /**
   *
   * @type {string}
   * @memberof Multimedia
   */
  subtype?: string;
  /**
   *
   * @type {string}
   * @memberof Multimedia
   */
  caption?: string;
  /**
   *
   * @type {string}
   * @memberof Multimedia
   */
  credit?: string;
  /**
   *
   * @type {string}
   * @memberof Multimedia
   */
  type?: string;
  /**
   *
   * @type {string}
   * @memberof Multimedia
   */
  url?: string;
  /**
   *
   * @type {number}
   * @memberof Multimedia
   */
  height?: number;
  /**
   *
   * @type {number}
   * @memberof Multimedia
   */
  width?: number;
  /**
   *
   * @type {any}
   * @memberof Multimedia
   */
  legacy?: any;
  /**
   *
   * @type {string}
   * @memberof Multimedia
   */
  cropName?: string;
}

export interface Person {
  /**
   *
   * @type {string}
   * @memberof Person
   */
  firstname?: string;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  middlename?: string;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  lastname?: string;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  qualifier?: string;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  role?: string;
  /**
   *
   * @type {string}
   * @memberof Person
   */
  organization?: string;
  /**
   *
   * @type {number}
   * @memberof Person
   */
  rank?: number;
}
