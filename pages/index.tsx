import React from "react";

function HomePage(): JSX.Element {
  [1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
  });

  return <div>Welcome to Next.js!!!!!</div>;
}

export default HomePage;
