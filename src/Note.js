import React from "react";
import { Card } from "react-bootstrap";

export default function Note({ notes }) {
  const renderList = () => {
    return notes?.map((note, index) => {
      return (
        <Card className="mt-4" key={index}>
          <Card.Body>{note}</Card.Body>
        </Card>
      );
    });
  };

  return <>{renderList()}</>;
}
