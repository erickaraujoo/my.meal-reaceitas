import React from "react";

import { Review } from "./styles";

export default function Reviews() {
  return (
    <Review>
      <h2>O que as pessoas dizem sobre nós?</h2>

      <div className="container_reviews">
        <div>
          <img
            src="https://images.pexels.com/users/avatars/1638660/jill-wellington-390.jpeg?w=256&h=256&fit=crop&crop=faces&auto=compress"
            alt=""
          />
          <h4>Fernandes Mercedez</h4>
          <p>"Gostei bastante do site pois contém diversas receitas!"</p>
        </div>
        <div>
          <img
            src="https://pbs.twimg.com/profile_images/593378416419807232/b8Q_HETJ_400x400.jpg"
            alt=""
          />
          <h4>Mario Souza</h4>
          <p>"Agora consigo buscar as receitas com os ingredientes que eu quero"</p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/users/avatars/372897/max-andrey-744.jpeg?w=256&h=256&fit=crop&crop=faces&auto=compress"
            alt=""
          />
          <h4>Gabriel Portinolli</h4>
          <p>"Agora terei resultado com meus treinos e com as receitas desse site!"</p>
        </div>
      </div>
    </Review>
  );
}
