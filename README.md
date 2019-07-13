# react-roulette

## ディレクトリ構成

| ディレクトリ  | 補足  |
|:---------------------------|:-----------------------------------------------|
|src/components/  |見た目だけを扱うコンポーネント |
|src/modules/  | action, reducer, constantsをまとめる  |
|src/store/  |state(状態)を保持する |

※ `Ducks` というデザインパターン  
https://webbibouroku.com/Blog/Article/redux-ducks

> Ducks というデザインパターンは、action(action creator), reducer, constants を module というファイルにまとめてしまいます。

## 環境構築

### for Windows

#### CLIコマンドのインストール

##### `node`

下記サイトからインストーラーをダウンロードします。  
http://nodejs.org/

##### `yarn`

下記サイトからインストーラーをダウンロードします。  
https://yarnpkg.com/lang/ja/docs/install/#windows-stable

### for Mac

#### CLIコマンドのインストール

##### `node`
ここでは `nodebrew` を利用して `node` をインストールします。

```bash
brew install nodebrew
```

`nodebrew` より最新の `node` をインストールします。

```bash
nodebrew install latest
```

インストール済みの `node` バージョンを確認します。

```bash
nodebrew list
```

上記で表示された `node` バージョンを使用できるようにします。

```bash
nodebrew use ${version}
```

##### `yarn`
Nodeのパッケージマネージャをインストールします。

```bash
brew install yarn
```

### 依存関係の更新
`package.json` の依存関係をもとに、ライブラリをダウンロードします。<br/>
プロジェクトルートで以下を実行してください。

```bash
yarn
```

### 開発用サーバの起動

```bash
yarn start
```

- コマンドを実行することでブラウザが自動で立ち上がり、画面が表示されます。
  - 起動されない場合は http://localhost:3000/ にアクセスしてください

### 修正ファイルの整形監視
```bash
yarn watch:lint
```

- コマンドを実行することで修正中ファイル保存時に自動的にlintが実行され、ファイルが整形されます。

## パッケージ化

```bash
yarn build
```

## 環境変数
Create React Appの定義に従います。

- [Adding Custom Environment Variables | create react app](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables)
  - `NODE_ENV`
```
