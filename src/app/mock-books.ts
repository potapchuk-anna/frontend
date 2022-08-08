import {Book} from "./book";

export const BOOKS: Book[] = [
  {id: 1, title: 'Book', author:'R', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', cover:'dfddf==', genre:'fantasy',reviewsNum:12,rating:5, reviews:[
    {id:1, content:"smth", reviewer:"Anya"},
      {id:2, content:"smth", reviewer:"Anya"}
    ]},
  {id: 2, title: 'A', author:'R', content:'F', cover:'dfddf==', genre:'fantasy',reviewsNum:12,rating:5, reviews:[{id:1, content:"smth", reviewer:"Anya"}]},
  {id: 3, title: 'A', author:'R', content:'F', cover:'dfddf==', genre:'fantasy',reviewsNum:12,rating:5, reviews:[{id:1, content:"smth", reviewer:"Anya"}]},
  {id: 4, title: 'A', author:'R', content:'F', cover:'dfddf==', genre:'fantasy',reviewsNum:12,rating:5,reviews:[{id:1, content:"smth", reviewer:"Anya"}]}
]

export const RECOMMENDED: Book[] = [
  {id: 1, title: 'Book', author:'R', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', cover:'dfddf==', genre:'fantasy',reviewsNum:12,rating:5, reviews:[
      {id:1, content:"smth", reviewer:"Vanya"},
      {id:2, content:"smth", reviewer:"Anya"}
    ]},
  {id: 2, title: 'A', author:'R', content:'F', cover:'dfddf==', genre:'fantasy',reviewsNum:12,rating:5},
  {id: 3, title: 'A', author:'R', content:'F', cover:'dfddf==', genre:'fantasy',reviewsNum:12,rating:5},
  {id: 4, title: 'A', author:'R', content:'F', cover:'dfddf==', genre:'fantasy',reviewsNum:12,rating:5}
]
