const navEmail = document.querySelector('.navbar-email');
const descktopMenu = document.querySelector('.desktop-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const movileMenu = document.querySelector('.movile-menu');
const cardsContainer = document.querySelector('.cards-contairner');
const aside = document.querySelector('.product-detail')


navEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMovileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);





function toogleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    descktopMenu.classList.toggle('inactive');
}
function toogleMovileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    movileMenu.classList.toggle('inactive');
}
function toogleCarritoAside(){
    const isMovileMenuClosed = movileMenu.classList.contains('inactive');

    if(!isMovileMenuClosed){
        movileMenu.classList.add('inactive');
    }else{
        aside.classList.toggle('inactive');

    }

    
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg',
})
productList.push({
    name: 'Pc',
    price: 1200,
    image: 'https://www.pcspecialist.es/images/landing/pcs/gaming-pc/gaming_pc_headline_pcs.jpg',
})
productList.push({
    name: 'Moto',
    price: 2467,
    image: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/11/mejores-motos-deportivas-2022-2882775.jpg?itok=oMQ7rgns',
})
productList.push({
    name: 'Moto',
    price: 2467,
    image: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/11/mejores-motos-deportivas-2022-2882775.jpg?itok=oMQ7rgns',
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg',
})
productList.push({
    name: 'Pc',
    price: 1200,
    image: 'https://www.pcspecialist.es/images/landing/pcs/gaming-pc/gaming_pc_headline_pcs.jpg',
})

function renderProducts(arr){
    for(product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', ('./icons/bt_add_to_cart.svg'));
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);    
        productCard.appendChild(productInfo);
    
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);