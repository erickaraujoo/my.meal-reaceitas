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
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>
        </div>
        <div>
          <img
            src="https://lh4.googleusercontent.com/-xihhXhkFUOs/AAAAAAAAAAI/AAAAAAAAAMY/V5Rd1ofCGgY/photo.jpg"
            alt=""
          />
          <h4>João Gaiola</h4>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/users/avatars/372897/max-andrey-744.jpeg?w=256&h=256&fit=crop&crop=faces&auto=compress"
            alt=""
          />
          <h4>Gabriel Portinolli</h4>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</p>
        </div>
      </div>
    </Review>
  );
}
