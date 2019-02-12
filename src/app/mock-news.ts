import { Article } from './article';

export const ApiArticles: Article[] = Array(10).fill(
  {
    id: null,
    author: 'Test Api Author',
    title: 'Test Api Title',
    description: 'Test Api Description. Test Api Description. Test Api Description.',
    url: 'https://www.ccn.com/bitcoin-price-trades-sideways-as-crypto-market-pines-for-more-volatility',
    urlToImage: 'https://cdn.ccn.com/wp-content/uploads/2018/08/bitcoin-price-stuck-gum.jpg',
    publishedAt: '2019-02-04T23:30:15Z',
    content: 'Test Api Content. Test Api Content. Test Api Content. Test Api Content. Test Api Content. Test  Api Content.'
  });

export const LocalArticles: Article[] = Array(10).fill(
  {
    id: 'Test Id',
    author: 'Test Local Author',
    title: 'Test Local Title',
    description: 'Test Local Description. Test Local Description. Test Local Description.',
    url: 'https://www.ccn.com/bitcoin-price-trades-sideways-as-crypto-market-pines-for-more-volatility',
    urlToImage: 'https://cdn.ccn.com/wp-content/uploads/2018/08/bitcoin-price-stuck-gum.jpg',
    publishedAt: '2019-02-04T23:30:15Z',
    content: 'Test Local Content. Test Local Content. Test Local Content. Test Local Content. Test Local Content. Test Local Content.'
  });

export const ApiArticle: Article = {
  id: null,
  author: 'Test Author',
  title: 'Test Title',
  description: 'Test Description. Test Description. Test Description.',
  url: 'https://www.ccn.com/bitcoin-price-trades-sideways-as-crypto-market-pines-for-more-volatility',
  urlToImage: 'https://cdn.ccn.com/wp-content/uploads/2018/08/bitcoin-price-stuck-gum.jpg',
  publishedAt: '2019-02-04T23:30:15Z',
  content: 'Test Content. Test Content. Test Content. Test Content. Test Content. Test Content.'
};

export const LocalArticle: Article = {
  id: 'Test',
  author: 'Test Author',
  title: 'Test Title',
  description: 'Test Description. Test Description. Test Description.',
  url: 'https://www.ccn.com/bitcoin-price-trades-sideways-as-crypto-market-pines-for-more-volatility',
  urlToImage: null,
  publishedAt: '2019-02-04T23:30:15Z',
  content: 'Test Content. Test Content. Test Content. Test Content. Test Content. Test Content.'
};

export const Sources: string[] = ['Source One', 'Source Two', 'Source with large text'];
