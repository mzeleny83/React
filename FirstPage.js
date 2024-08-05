import React from "react";
import DynamicText from "../components/DynamicText";
import StaticComponent from "../components/StaticComponent";
import Tabs from "../components/Tabs";

const FirstPage = () => {
  const tabs = [
    { name: "First", content: <div>First tab content</div> },
    { name: "Second", content: <div>Second tab content</div> },
    { name: "Third", content: <div>Third tab content</div> },
  ];

  return (
    <div>
      <DynamicText />
      <StaticComponent
        title="Inception"
        image="https://image.url/inception.jpg"
        description="A mind-bending thriller by Christopher Nolan."
      />
      <StaticComponent
        title="The Matrix"
        image="https://image.url/matrix.jpg"
        description="A sci-fi classic that questions reality."
      />
      <Tabs tabs={tabs} />
    </div>
  );
};

export default FirstPage;
