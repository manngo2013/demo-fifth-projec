import React from "react";

function SampleReactMemo(props) {
  console.log("Render SampleReactMemo component");
  return <div>Sameple text: {props.txt}</div>;
}

export default React.memo(SampleReactMemo);
