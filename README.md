# BackgroundCSS

uAutoPagerize によって追加されるページ区切り線の表示を調整するための Chrome 拡張機能です。

## 概要

この拡張機能は、uAutoPagerize が挿入する要素に対して微調整の CSS を適用します。
具体的には、以下の調整を行います：

- ページ情報（`.autopagerize_page_info_inner`）を非表示にします。
- 区切り線の枠線（`.autopagerize_page_info`）の色を薄いグレー（`#ccc`）に変更します。

## 特徴

- **軽量**: バックグラウンドスクリプト（Service Worker）から必要な時だけ CSS を注入するため、リソース消費が最小限です。
- **シンプル**: 設定不要で、インストールするだけで動作します。

## インストール方法

1. このリポジトリをクローンするか、ZIP ファイルとしてダウンロードして解凍します。
2. Google Chrome を開き、アドレスバーに `chrome://extensions/` を入力して実行します。
3. 右上の「デベロッパー モード」をオンにします。
4. 「パッケージ化されていない拡張機能を読み込む」ボタンをクリックします。
5. 解凍したフォルダ（`manifest.json` が含まれているフォルダ）を選択します。

## ファイル構成

- [manifest.json](manifest.json): 拡張機能の設定ファイル（Manifest V3）。
- [style.js](style.js): ページの更新を検知し、CSS を注入するメインロジック。

## 動作の仕組み

`chrome.tabs.onUpdated` イベントを監視し、ページ読み込みが完了したタイミングで `chrome.scripting.executeScript` を使用して、対象のドキュメントに `<style>` タグを動的に挿入します。

## ライセンス

MIT License
