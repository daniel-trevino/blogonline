import React from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";

export default props => (
  <Card>
    <CardHeader
      title={props.name}
      subtitle={props.date}
      className="replyCard__title"
    />
    <CardText className="replyCard__text">{props.content}</CardText>
  </Card>
);
