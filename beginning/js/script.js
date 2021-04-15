//Step1

// let favoriteMovies = ["Inception","Final destination","All the best","Bajirao Mastani","Joker"];
// console.log(favoriteMovies[1]);

//step2

// let movies = new Array ("Joker","Final destination","All the best","Bajirao Mastani","Inception");
// console.log(movies[0]);

//Step3
// let movies = new Array ("Joker","Final destination", "BatMan","All the best","Bajirao Mastani","Inception");
// console.log(movies.length);

//Step4

// let movies = [
//            "Inception",
//            "Final destination",
//            "All the best",
//            "Bajirao Mastani",
//            "Joker"];
// delete movies[0];
// console.log(movies);


//Step5
// let movies = ["I can see You","Inception","Final destination","All the best","Bajirao Mastani","Joker","Sarkar"];
// for (let movie in movies) {
//     if (movies.hasOwnProperty(movie)) {
//     console.log(movies[movie]);
//     }
//  }


//Step 6

// let movies = ["I can see You","Inception","Final destination","All the best","Bajirao Mastani","Joker","Sarkar"];
// for (let movie of movies) {
//     console.log(movie);
// }

//Step7

// let movies = ["I can see You","Inception","Final destination","All the best","Bajirao Mastani","Joker","Sarkar"];
// for (let movie of movies) {
    //movie ={` movie.sort()`};
    
    
//     console.log(movie);
// }

//Step 8

// let movies = ["I can see You","Inception","Final destination","All the best","Bajirao Mastani","Joker","Sarkar"];
// console.log(`Movies I like:`)
// console.log("");
// for (let movie of movies) {
   
//     console.log(movie);
// }
// console.log("");
// console.log(`Movies I regret watching:`);
// console.log("");


// let leastFavMovies = ["Super Mario Bros","Catwoman","Das"];
// for (let leastFavmovie of leastFavMovies) {
   
//     console.log( leastFavmovie);
// }


// Step 9

// let movies = ["I can see You","Inception","Final destination","All the best","Bajirao Mastani","Joker","Sarkar"];
// console.log(`Movies I like:`)
// console.log("");
// for (let movie of movies) {
   
//     console.log(movie);
// }
// console.log("");
// console.log(`Movies I regret watching:`);
// console.log("");


// let leastFavMovies = ["Super Mario Bros","Catwoman","Das"];
// for (let leastFavmovie of leastFavMovies) {
   
//     console.log( leastFavmovie);
// }
// movies = movies.concat(leastFavMovies);
// console.log("");
// console.log(` Concat Movies:`)

// console.log(movies.reverse());


// Step 10

// let movies = ["I can see You","Inception","Final destination","All the best","Bajirao Mastani","Joker","Sarkar"];
// console.log(`Movies I like:`)
// console.log("");
// for (let movie of movies) {
   
//     console.log(movie);
// }
// console.log("");
// console.log(`Movies I regret watching:`);
// console.log("");


// let leastFavMovies = ["Super Mario Bros","Catwoman","Das"];
// for (let leastFavmovie of leastFavMovies) {
   
//     console.log( leastFavmovie);
// }
// movies = movies.concat(leastFavMovies);
// console.log("");
// console.log(` Concat Movies:`)

// console.log(movies.reverse());
// console.log(` Last element: `)
// let lastItemOfArray = movies[movies.length - 1]
// console.log(lastItemOfArray);

// Step 11

// let movies = ["I see You","Inception","Final destination","All the best","Bajirao Mastani","Joker","Sarkar"];
// console.log(`Movies I like:`)
// console.log("");
// for (let movie of movies) {
   
//     console.log(movie);
// }
// console.log("");
// console.log(`Movies I regret watching:`);
// console.log("");


// let leastFavMovies = ["Super Mario Bros","Catwoman","Das"];
// for (let leastFavmovie of leastFavMovies) {
   
//     console.log( leastFavmovie);
// }
// movies = movies.concat(leastFavMovies);
// console.log("");
// console.log(` Concat Movies:`)

// console.log(movies.reverse());
// console.log( "First Emement: " + movies[0]);

//step 12

// let leastFavmovies = ["Das", "I see you" , "catwomen"];
// console.log(leastFavmovies);

// let first_indic = leastFavmovies.indexOf('Das');
// console.log(`First index value is : ${first_indic}`);

// leastFavmovies[first_indic] = "All the best";

// let second_indic = leastFavmovies.indexOf('I see you');
// console.log(`First index value is : ${second_indic}`);
// leastFavmovies[second_indic] = "Run";

// let third_indic = leastFavmovies.indexOf('catwomen');
// console.log(`First index value is : ${third_indic}`);
// leastFavmovies[third_indic] = "Bajirao mastani";
// console.log("");

// console.log(`New array of fav movies :`);
// console.log(leastFavmovies);


// Step 13   
// console.log("Step 13");  

// let movies_i_like = [
//         ['I can see You', 1 ] ,
//         ['Inception', 2],
//         ['Final destination',3],
//         ['All the best',4],
//         ['Bajirao Mastani',5],
//         ['Joker',6]
// ];

//     let rank = movies_i_like.filter((item) => {
//         item.filter((ag) => {
//             if(typeof ag==='string') {
//                 console.log(ag);

//             }

//         });
       
        
    
//       }) ;
    
   



// Step 14 
console.log("Step 14");

let employees = ['Paul Richard','Steve Midle', 'Richie Paul', 'Annie Wirk', 'Santy Ross'];

let showEmployees = function(...arr) {

    for(let i=0; i<arr.length ; i++) {


        console.log(arr[i]);
    }
    
};
showEmployees(...employees);



// Step 15 
// console.log("Step 15");
// function filterValues(arr) {
//     arr = arr.filter(myfilter);
//     return arr;
//   }


// function myfilter(value) {
//     if(value !== false || value !== null || value !== 0 || value !== "") {
//         return value;
//       }



// };

// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));



//Step 16
// console.log("Step 16");

// function getRandomItem(a) {
//     //  random index value
//     const randomIndex = Math.floor(Math.random() * a.length);

//     // random item
//     const item = a[randomIndex];

//     return item;
// }

// let array =[20,10,11,17,18,19,90,22,66,51];
//  console.log(`random number =  ${getRandomItem(array)}`);



//Step 17
// console.log("Step 17 \n");

// let arr = [20,60,77,90,12];
// console.log(`Array list = ${arr}`)
// let max = Math.max(...arr);
// console.log(`Largest number in the array is = ${max}`);
  
    
   

   
    
   








