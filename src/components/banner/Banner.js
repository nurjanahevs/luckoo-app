import React from "react";
import Slider from "react-slick";
import "./Banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
import Header from "../header/Header";

function ImageSlider() {
  let settings = {
    dot: true,
    infinite: true,
    speed:500,
    slideToShow:2,
    slideToScroll: 1,
    cssEase: "linier",
    
  };
  return (
    <div className="container">
      <div className="mb-3">
      <Header />
      </div>
      <h1 className="text-center">Welcome to Luckoo.</h1>
      <p className="text-center me-5 ms-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit ipsum quam voluptate aut, aspernatur quod quasi cupiditate modi asperiores eos assumenda autem, nostrum, deserunt adipisci omnis sapiente vel optio eveniet.</p>
      <Slider {...settings}>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img className="slides" src="https://images.unsplash.com/photo-1572048572872-2394404cf1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" />
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img className="slides" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img className="slides" src="https://images.unsplash.com/photo-1437964706703-40b90bdf563b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img className="slides" src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;

// const Banner = () => {
//   return (
//     <div class="container-fluid">
//       <Header />
//       <h1 class="text-center mt-2 mb-3">Welcome to Luckoo</h1>
//       <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
//         <div class="carousel-indicators">
//           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//           <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//         </div>
//         <div class="carousel-inner">
//           <div class="carousel-item active">
//             <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="d-block w-100" alt="..." />
//           </div>
//           <div class="carousel-item">
//             <img src="https://images.unsplash.com/photo-1572048572872-2394404cf1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" class="d-block w-100" alt="..." />
//           </div>
//           <div class="carousel-item">
//             <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block w-100" alt="..." />
//           </div>
//         </div>
//         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Previous</span>
//         </button>
//         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Banner;
