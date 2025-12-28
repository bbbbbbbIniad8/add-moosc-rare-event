import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../index.css';

// ターゲットとなる既存サイトの要素を取得
const tables = document.getElementsByClassName("row flex");

if (tables.length > 0) {
  // Reactをマウントするための空のコンテナを作成
  const rootContainer = document.createElement("div");
  rootContainer.id = "my-extension-root";
  
  // tables[0] の先頭に追加
  tables[0].prepend(rootContainer);

  // Reactを開始
  ReactDOM.createRoot(rootContainer).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("ターゲット要素が見つかりません。");
}

// 画面全体に対するフラッシュ用の要素（必要に応じて）
const flashDiv = document.createElement("div");
flashDiv.id = "flash-effect";
document.body.appendChild(flashDiv);