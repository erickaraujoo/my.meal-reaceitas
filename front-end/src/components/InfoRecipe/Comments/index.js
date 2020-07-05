import React from "react";

import { Section } from "./styles";

import ImageStar from "./../../../assets/info_recipe/start.png";

export default function Comments() {
  return (
    <Section>
      <h2>O que você achou dessa receita?</h2>

      <div className="send_feedback">
        <div className="rating_wrapper">
          <input type="radio" name="rating" id="start_1" /><label htmlFor="start_1"></label>
          <input type="radio" name="rating" id="start_2" /><label htmlFor="start_2"></label>
          <input type="radio" name="rating" id="start_3" /><label htmlFor="start_3"></label>
          <input type="radio" name="rating" id="start_4" /><label htmlFor="start_4"></label>
          <input type="radio" name="rating" id="start_5" /><label htmlFor="start_5"></label>
        </div>
        <textarea className="comment" placeholder="Mande seu comentário..."></textarea>
        <button>Enviar</button>
      </div>
      <div className="comments">
        <h3>Comentários (6)</h3>

        <ul>
          <li>
            <div className="photo">
              <img
                src="https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/silueta-generica-large.png"
                alt=""
              />
            </div>
            <div className="triangle" />
            <div className="comment">
              <div className="title">
                <p>Erick Araujo / 29 de Junho de 2020, 10:26 am</p>
                <div className="avaliation">
                  <p>Avaliação: 4.5</p>
                  <img src={ImageStar} alt="" />
                </div>
              </div>
              <div className="text">
                <p>
                  Muito bom a receita, recomendo a todos os profissionais da
                  área!!
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="photo">
              <img
                src="https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/silueta-generica-large.png"
                alt=""
              />
            </div>
            <div className="triangle" />
            <div className="comment">
              <div className="title">
                <p>Erick Araujo / 29 de Junho de 2020, 10:26 am</p>
                <div className="avaliation">
                  <p>Avaliação: 4.5</p>
                  <img src={ImageStar} alt="" />
                </div>
              </div>
              <div className="text">
                <p>
                  Muito bom a receita, recomendo a todos os profissionais da
                  área!!
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="photo">
              <img
                src="https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/silueta-generica-large.png"
                alt=""
              />
            </div>
            <div className="triangle" />
            <div className="comment">
              <div className="title">
                <p>Erick Araujo / 29 de Junho de 2020, 10:26 am</p>
                <div className="avaliation">
                  <p>Avaliação: 4.5</p>
                  <img src={ImageStar} alt="" />
                </div>
              </div>
              <div className="text">
                <p>
                  Muito bom a receita, recomendo a todos os profissionais da
                  área!!
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="photo">
              <img
                src="https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/silueta-generica-large.png"
                alt=""
              />
            </div>
            <div className="triangle" />
            <div className="comment">
              <div className="title">
                <p>Erick Araujo / 29 de Junho de 2020, 10:26 am</p>
                <div className="avaliation">
                  <p>Avaliação: 4.5</p>
                  <img src={ImageStar} alt="" />
                </div>
              </div>
              <div className="text">
                <p>
                  Muito bom a receita, recomendo a todos os profissionais da
                  área!!
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="photo">
              <img
                src="https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/silueta-generica-large.png"
                alt=""
              />
            </div>
            <div className="triangle" />
            <div className="comment">
              <div className="title">
                <p>Erick Araujo / 29 de Junho de 2020, 10:26 am</p>
                <div className="avaliation">
                  <p>Avaliação: 4.5</p>
                  <img src={ImageStar} alt="" />
                </div>
              </div>
              <div className="text">
                <p>
                  Muito bom a receita, recomendo a todos os profissionais da
                  área!!
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Section>
  );
}
