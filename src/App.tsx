import React from "react";
import Heading from "./Components/Heading";
import InputSection from "./Components/InputSection";
import SelectionBox from "./Components/SelectionBox";
import { INPUT_SECTIONS } from "./constants";

function App() {
  return (
    <main>
      <Heading />
      <SelectionBox />
      {INPUT_SECTIONS.map((no) => {
        return <InputSection key={no} />;
      })}
    </main>
  );
}

export default App;
