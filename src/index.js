import axios from "axios";

// リクエスト先の URL を作る
const search = "cat";
const key = "V6AU97qCSCYVmbIC5UDppEiVM1xnuO9E";
const limit = 3;

const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

// axios でリクエストをする
axios.get(url).then(res => {
  // data を取得できた
  console.log(res.data);
  const data = res.data.data;

  // img の src に入れるための url にアクセスする
  const imageUrl = data[0].images.downsized.url;
  console.log(imageUrl);

  // image 要素を作って、body に追加する
  const img = document.createElement("img");
  img.src = imageUrl;
  document.body.appendChild(img);
});

// import React from 'react';
// import { render } from 'react-dom';
// import Hello from './Hello';

// const styles = {
//   fontFamily: 'sans-serif',
//   textAlign: 'center',
// };

// const App = () => (
//   <div style={styles}>
//     <Hello name="CodeSandbox" />
//     <h2>Start editing to see some magic happen {'\u2728'}</h2>
//   </div>
// );

// render(<App />, document.getElementById('root'));
