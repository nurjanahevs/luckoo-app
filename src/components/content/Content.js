import React from "react";
import "./Content.css";
import Banner from '../banner/Banner'

const Content = () => {
  return (
    <div className="container">
      <Banner/>
      <h1>How to use Luckoo.</h1>
      <p className="text-center me-5 ms-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit ipsum quam voluptate aut, aspernatur quod quasi cupiditate modi asperiores eos assumenda autem, nostrum, deserunt adipisci omnis sapiente vel optio eveniet.
      </p>
      <div className="row">
        <div className="column">
          <iframe src="https://www.youtube.com/embed/o1ugNnMyeZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="column scol">
          <img src="https://source.unsplash.com/F5Dxy9i8bxc/800x600"/>
          <img src="https://source.unsplash.com/PC_lbSSxCZE/800x600"/>
        </div>
        <div className="column tcol">
        <img src="https://source.unsplash.com/iPum7Ket2jo/800x600"/>
        <img src="https://source.unsplash.com/E4944K_4SvI/800x600"/>
        </div>
      </div>
      <button class="btn">see more</button>
      <div>
      </div>
    </div>
  );
};

export default Content;
