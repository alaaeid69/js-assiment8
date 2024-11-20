var quotes =[
    {
    content:"Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
    author:"Albert Camus",
    image:"https://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_small_2x/public/images/contributor/camus_360x450.jpg?itok=I1FmfvNq&timestamp=1409685824"
   },
   {
    content:"A friend is someone who knows all about you and still loves you.",
    author:"Elbert Hubbard",
    image:"https://upload.wikimedia.org/wikipedia/commons/8/82/Elbert_Hubbard_-_Project_Gutenberg_eText_12933.jpg"
   },
   {
    content:"To live is the rarest thing in the world. Most people exist, that is all.",
    author:"Oscar Wilde",
    image:"https://cdn.britannica.com/21/94621-050-58D29508/Oscar-Wilde-1882.jpg"
   },
     {
    content:"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that",
    author:"Martin Luther King ",
    image:"https://assets.editorial.aetnd.com/uploads/2009/11/hero-crop-gettyimages-459534214.jpg"
   },
   {
    content:"Live as if you were to die tomorrow. Learn as if you were to live forever",
    author:"Mahatma Gandhi",
    image:"https://assets.editorial.aetnd.com/uploads/2010/07/mahatma-gandhi-gettyimages-102701091-2048x2048-1.jpg"
   },
   {
    content:"The fool doth think he is wise, but the wise man knows himself to be a fool",
    author:"William Shakespeare",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCeIL6vioSCVbW_N-H56QXXuwUkLjEWwl-kg&s"
   },
   {
    content:"Life is what happens to us while we are making other plans.",
    author:"Allen Saunders",
    image:"https://i.ebayimg.com/00/s/MTUyOVgxMTE4/z/NU0AAOSwZxxifbG6/$_57.JPG?set_id=8800005007"
   },
   {
    content:"I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.",
    author:"Dr.Seuss",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Theodor_Seuss_Geisel_%2801037v%29.jpg/1200px-Theodor_Seuss_Geisel_%2801037v%29.jpg"
   },
   {
    content:"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author:"Lao Tzu",
    image:"https://gregory.ph/cdn/shop/articles/Tao-Te-Ching-by-Lao-Tzu.jpg?v=1726538184"
   },
   {
    content:"For every minute you are angry you lose sixty seconds of happiness",
    author:"Ralph Waldo Emerson",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYKBJdHuk8hpFwzZezJjEhHUtULDxmMkywfg&s"
   },
   {
    content:"I love deadlines. I love the whooshing noise they make as they go by",
    author:"Douglas Adams",
    image:"https://static.tvtropes.org/pmwiki/pub/images/DouglasAdams_douglasadams_com.jpg"
   }
]
var orderqouete =Array.from(Array(quotes.length).keys());
 shuffle(orderqouete);
 var currentIndex = 0; 



function shuffle(array) {
  var current =array.length;
  var temp ,random;

   while(current >0){
         random = Math.floor(Math.random() * current );
         current --;
         temp =array[current];
         array[current] =array[random];
         array[random] =temp

    
    }
    return array;
}
document.getElementById('click').onclick = function(){
  //if i want to random nums finsh and i want to repeat the shuffle array again
  if (currentIndex >= orderqouete.length) {
    shuffle(orderqouete); 
    currentIndex = 0; 
}

var quoteIndex = orderqouete[currentIndex];
var quote = quotes[quoteIndex];
var cartona = 
` <div class="col-md-3">
<div>
    <img src="${quote.image}" alt=""  class="rounded-circle w-50" height=200px>
</div>
</div>
<div class="col-md-9">
<div>
    <i class="fa-solid fa-quote-left  " width="50px"></i>
    <p class="fs-4" id="content">${quote.content}</p>
    <p class="fs-4" id="author">--${quote.author}</p>
    <i class="fa-solid fa-quote-right"width="50px" ></i>
</div>
</div>
`
document.getElementById('qouteName').innerHTML =cartona

currentIndex++;
}




