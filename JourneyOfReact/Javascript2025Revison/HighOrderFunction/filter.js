const array1 = [1,2,3,4,5,6,7,8]

//-----------  filter ---------------------
const filterEven = array1.filter((num) => num%2==0)
console.log(filterEven);// [ 2, 4, 6, 8 ]

console.log(array1.filter((n) => n>=3));//[ 3, 4, 5, 6, 7, 8 ]


const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      yearPublished: 1960,
      genre: "Fiction",
      pages: 281
    },
    {
      title: "1984",
      author: "George Orwell",
      yearPublished: 1949,
      genre: "Dystopian",
      pages: 328
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      yearPublished: 1925,
      genre: "Classic",
      pages: 180
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      yearPublished: 1951,
      genre: "Fiction",
      pages: 214
    }
  ];
  
  console.log(books.filter((name) => name.genre == 'Fiction'));
 
  let bookYear = books.filter((bks) => {return bks.yearPublished >= 1951})
  console.log("hi"+bookYear);
  
  



//-----------  using forEach loop -----
console.log(array1.forEach((n)=> n>=3 )); //undefined


array1.forEach((num) => {
    if(num%2==0){
        console.log(num);
    }
})
// 2
// 4
// 6
// 8

const newArr = [];
array1.forEach((num) => {
    if(num%2==0){
        newArr.push(num)
    }
})
console.log(newArr); // [ 2, 4, 6, 8 ]   , where for this result using filter we can get in one line as above example..
