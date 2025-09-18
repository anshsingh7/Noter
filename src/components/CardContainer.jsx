// src/components/CardContainer.jsx
import React from "react";
import Card from "./pages/sub_pages/card";

const CardContainer = ({ items = [], type = "notes" }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id} item={item} type={type} />
      ))}
    </div>
  );
};

export default CardContainer;
