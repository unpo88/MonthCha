import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { styled } from "baseui";
import { Input } from "baseui/input";

import { textState, charCountState } from "../states/states";

const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div>
      <Centered>
        <Input
          value={text}
          onChange={onChange}
          placeholder="Test BaseWeb Input"
          clearOnEscape
        />
      </Centered>
      <br />
      Echo: {text}
    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function HomePage(): JSX.Element {
  return <CharacterCounter />;
}

export default HomePage;
