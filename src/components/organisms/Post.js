import React from "react";
import { Image } from "../atoms/Image";
import imageTest from "../../images/stockholm.jpg";

export default () => (
  <div className="page">
    <article className="post">
      <div className="container">
        <div className="post__image">
          <Image src={imageTest} alt="Image" />
        </div>
        <div className="post__heading">
          <div className="post__title">
            <h1>How to drive 12 hours in your taxi without being bored</h1>
          </div>
          <div className="post__meta">
            <div className="post__author">
              <p>Daniel Treviño</p>
            </div>
            <div className="post__division">
              <p>·</p>
            </div>
            <div className="post__date">
              <p>28 March 2018</p>
            </div>
          </div>
        </div>

        <div className="post__content">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        </div>
      </div>
    </article>
  </div>
);
