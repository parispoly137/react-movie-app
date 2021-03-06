import React from 'react';

function Food(props) {
  console.log(props);
  return (
    <h3>I like {props.fav}!!</h3>
  );

}

function App() {
  return (
    <div>
      <h1>
        Hello
      </h1>
      <Food fav="삼겹살" />
      <Food fav="불고기" />
      <Food fav="치즈김밥" />
      <Food fav="양념치킨" />

    </div>

  );
}

export default App;
