let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};

document.querySelector('.home').onmousemove = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });

};


document.querySelector('.home').onmouseleave = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    elm.style.transform = `translateX(0px) translateY(0px)`;

  });

};

var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// const apiUrls = 'https://vehicle-9tfu.onrender.com/api/v1/vehicle'

// async function fetchpost(){
//   try{
//   const response = await fetch(`${apiUrls}/posts`)
//   if(!response.ok){
//     throw new Error(`Network response was not ok:${response.status}`);
//   }
//   return response.json();
// }catch(error){
//   console.log(error);
// }
// }

// function displaypost(){
//   fetchpost().then(data=>{
//     console.log(data);
//     let output = '';
//     data.forEach(post=>{
//       output += `
//       <div class="col-md-4">
//       <div class="card">
//         <div class="card-header">
//           <h3>${post.title}</h3>
//         </div>
//         <div class="card-body">
//           <p>${post.description}</p>
//         </div>
//         <div class="card-footer">
//           <a href="#" class="btn btn-primary">Read more</a>
//         </div>
//       </div>
//     </div>
//       `
//     })
//     document.querySelector('.card').innerHTML = output;
//   })
// }
// async function listPosts(postContainerElementId){
//   const postContainerElementId = document.getElementById(postContainerElementId);
//   if(!postContainerElementId){
//     return;
//   }

//   fetchpost.then(posts=>{
//   }).catch(error=>{
//     console.log(error);
//   }
//   )
// }
// function postElement(post){
//   const anchorElement = document.createElement('a');
//   anchorElement.setAttribute('herf',`${apiUrls}/posts/${post.id}`)
// }