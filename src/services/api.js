export const apiConfig = {
  base: 'https://revit8apps.netlify.app/.netlify/functions/',
  students: {
    name: 'students',
    url: 'students-read-all',
    method: 'GET',
  },
  staffs: {
    name: 'staffs',
    url: 'staffs-read-all',
    method: 'GET',
  },
  pages: {
    name: 'pages',
    url: 'pages-read-all',
    method: 'GET',
  },
  page: {
    name: 'page',
    url: 'pages-read',
    method: 'GET',
    pages: { about: 263885483222761984, college: 263957332848804363 },
  },
  articles: {
    name: 'articles',
    url: 'articles-read-all',
    method: 'GET',
  },
};
