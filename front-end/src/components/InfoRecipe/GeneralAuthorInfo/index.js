import React from "react";

import { Section, ImageRecipe } from "./styles";

export default function GeneralAuthorInfo() {
  return (
    <Section>
      <ImageRecipe
        className="image_recipe"
        background={
          'https://s2.glbimg.com/C4_IUcr6slIbCUM_F4QP0VOcaOc=/0x0:749x500/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/38/15/65/estrogonofe_de_carne.jpg'
        }
      />
      <div className="info_author">
        <div className="author">

        </div>
        <div className="experience">

        </div>
        <div className="">

        </div>
      </div>
    </Section>
  );
}
