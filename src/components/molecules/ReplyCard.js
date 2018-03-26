import React from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";

export default () => (
  <Card>
    <CardHeader
      title="DanielTreviño"
      subtitle="1 January 2018"
      className="replyCard__title"
    />
    <CardText className="replyCard__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
      pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
      interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam
      dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);
