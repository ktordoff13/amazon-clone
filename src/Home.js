import React from "react";
import "./Home.css";
import amazonImage from "./imgs/amazon-image.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img class="home__image" src={amazonImage} alt="amazon-header" />
      <div className="home__row">
        <Product
          id={1}
          title="Chungus"
          price={99.96}
          rating={3}
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FVdraqNodHIo%2Fmaxresdefault.jpg&f=1&nofb=1"
        />
        <Product
          id={2}
          title="Cool Beans"
          price={11.96}
          rating={5}
          image="http://img2.wikia.nocookie.net/__cb20140717154829/lego-star-wars-cretions/images/c/c3/Cool-Beans.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={3}
          title="Cool Tub"
          price={69.69}
          rating={5}
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YISUxy62Y05mby8I4tPHxgHaEt%26pid%3DApi&f=1"
        />
        <Product
          id={4}
          title="Yeah! Science!"
          price={11.96}
          rating={5}
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.plKmfNR6y_35jm93SBKIeAHaEG%26pid%3DApi&f=1"
        />
        <Product
          id={5}
          title="Cool Beans"
          price={11.96}
          rating={5}
          image="http://img2.wikia.nocookie.net/__cb20140717154829/lego-star-wars-cretions/images/c/c3/Cool-Beans.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={6}
          title="Cool Beans"
          price={11.96}
          rating={5}
          image="http://img2.wikia.nocookie.net/__cb20140717154829/lego-star-wars-cretions/images/c/c3/Cool-Beans.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
