async function getdata(){
    const request = await fetch("https://dummyjson.com/products");
    const data = await request.json();
    let posts = data.products;
    console.log(posts);

    const result = posts.map( function(post){
        return `
        <div class="product">
        <h2> ${post.title} </h2>
        <img src=" ${post.thumbnail} "/>
        <p>${post.price}$</p>
        </div>
        `
    }).join('');
    document.querySelector(".posts").innerHTML=result;
}

getdata();