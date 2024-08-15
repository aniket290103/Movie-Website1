const movie = [
    {
        title: "Zapatlela 2",
        date: "02/01/1998",
        price: "₹1000",
        rating: "★★★★★",
        cover: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/23193d67917235.5b4b11bb10980.jpg",
    },
    {
        title: "Stree",
        date: "15/05/2016",
        price: "₹250",
        rating: "★★★☆☆",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Stree_-_2018_Movie_Poster.jpg/220px-Stree_-_2018_Movie_Poster.jpg",
    },
    {
        title: "Shaitaan",
        date: "21/08/2022",
        price: "₹300",
        rating: "★★☆☆☆",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Shaitaan_2024_film_theatrical_poster.jpeg/220px-Shaitaan_2024_film_theatrical_poster.jpeg",
    },
    {
        title: "Bhool Bhulaiyaa",
        date: "28/12/2001",
        price: "₹500",
        rating: "★★★☆☆",
        cover: "https://upload.wikimedia.org/wikipedia/en/6/6f/Bhool_bhulaiyaa.jpg",
    },
    {
        title: "Bhoot",
        date: "25/08/2016",
        price: "₹350",
        rating: "★★★☆☆",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Bhoot_Film_Poster.jpg/220px-Bhoot_Film_Poster.jpg",
    },
    {
        title: "Chandramukhi 2",
        date: "18/09/2002",
        price: "₹150",
        rating: "★★☆☆☆",
        cover: "https://upload.wikimedia.org/wikipedia/en/d/de/Chandramukhi_2_poster.jpg",
    },
]

function load() {
    document.querySelector("#result").innerHTML = ""
    movie.map((val, i) => {
        document.querySelector("#result").innerHTML += `
        <div class="w-[18rem] m-5 rounded-md shadow-md  ">
            <img src="${val.cover}" height={100%} width={100%} class="w-[40vh] h-[40vh] rounded-t-md">
            <div class="p-2" >
                <h3 class="text-3xl font-bold"> ${val.title}</h3>
                <p class="text-grey-500 font-medium"> Rating : ${val.rating} </p>
                <p class="text-grey-500 font-medium ">Ticket Price : ${val.price} </p>
                <p class="text-blue-600 font-me₹diuborder-b-4 border-red-800">Releasing On : ${val.date} </p>
                <a href="https://www.justwatch.com/in/movies" target="_blank"><button class="bg-blue-800 text-white w-[100%] p-2 mt-3 rounded-md shadow-lg hover:bg-blue-600 hover:text-white p-2  hover:cursor-pointer"> Book Now </button></a>
            </div>
        </div>

        
        `
        document.querySelector("#result2").innerHTML = ` 
        <footer class="   flex flex-row gap-5 mt-2 " >
        <div class= " h-[5vh] w-[3vw]  bg-black text-white rounded-md shadow border-solid border-2 border-black	  hover:bg-white hover:text-black   rounded-md hover:cursor-pointer   flex justify-center items-center "> < </div>
        <div class= " h-[5vh] w-[3vw]  bg-red-500 text-white rounded-md shadow border-solid border-2 border-black hover:bg-white hover:text-black  rounded-md hover:cursor-pointer flex justify-center items-center"> 1 </div>
        <div class= " h-[5vh] w-[3vw]  bg-black text-white rounded-md shadow border-solid border-2 border-black hover:bg-white hover:text-black  rounded-md hover:cursor-pointer  flex justify-center items-center "> 2 </div>
        <div class= " h-[5vh] w-[3vw]  bg-black text-white rounded-md shadow border-solid border-2 border-black hover:bg-white hover:text-black  rounded-md hover:cursor-pointer   flex justify-center items-center"> 3 </div>
        <div class= " h-[5vh] w-[3vw]  bg-black text-white rounded-md shadow border-solid border-2 border-black hover:bg-white hover:text-black  rounded-md hover:cursor-pointer   flex justify-center items-center"> 4 </div>
        <div class= " h-[5vh] w-[3vw]  bg-black text-white rounded-md shadow border-solid border-2 border-black hover:bg-white hover:text-black  rounded-md hover:cursor-pointer  flex justify-center items-center"> > </div>

        </footer>
         `
        document.querySelector("#result3").innerHTML = `
         <div>  Copyright © 2024. Created by ❤️ 4Kmovies Team ❤️
         </div>
         `
    })
}
