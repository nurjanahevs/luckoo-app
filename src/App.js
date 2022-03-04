import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ImageSlider from "./components/banner/Banner";
import Content from "../src/components/content/Content"

const App = () => {
  return (
    <div class="container">
     <ImageSlider/>
      <section class="bubble-holder">
        <div class="bubble-1 bubble-container-fluid bubble-animation-x">
          <div class="bubble-large bubble-animation-y"></div>
        </div>
        <Content/>
        <div class="bubble-2 bubble-container-fluid bubble-animation-x">
          <div class="bubble-large bubble-animation-y"></div>
        </div>

        <div class="bubble-3 bubble-container-fluid bubble-animation-x">
          <div class="bubble-large bubble-animation-y"></div>
        </div>

        <div class="bubble-4 bubble-container bubble-animation-x">
          <div class="bubble-small bubble-animation-y"></div>
        </div>

        <div class="bubble-5 bubble-container bubble-animation-x">
          <div class="bubble-small bubble-animation-y"></div>
        </div>

        <div class="bubble-6 bubble-container bubble-animation-x">
          <div class="bubble-small bubble-animation-y"></div>
        </div>

        <div class="bubble-7 bubble-container bubble-animation-x">
          <div class="bubble-small bubble-animation-y"></div>
        </div>

        <div class="bubble-8 bubble-container bubble-animation-x">
          <div class="bubble-small bubble-animation-y"></div>
        </div>

        <div class="bubble-9 bubble-static"></div>
        <div class="bubble-10 bubble-static"></div>
      </section>
     
    </div>
  );
};

export default App;
