import React from "react";
import Button from "./components/button/button";

export default function NotFound() {
  return (
    <>
      <h1>404 Not Found</h1>
      <p>
        <Button text="トップに戻る" href="/ " />
      </p>
    </>
  );
}
