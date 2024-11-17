## Next.js

- SSG や ISR、など Page 生成方法は複数ある。

### SSG では

- getStaticPath を使って複数ページの SSG を作成する

  - [].tsx のように[]で囲んで特別なファイルを作成
  - getStaticPaths を利用する

  <table>
    <thead>
    <tr>
      <th>パラメータ</th>
      <th>内容</th>
    </tr>
    </thead>
    <tbody>
      <tr>
      <td>params</td>
      <td>パスパラメータ。SSGの場合はgetStaticPaths関数を別途定義した時に参照可能</td>
      </tr>
      <tr>
      <td>locale</td>
      <td>現在のロケール機能。</td>
      </tr>
      <tr>
      <td>locales</td>
      <td>サポートしているロケールの配列(可能な場合)</td>
      </tr>
      <tr>
        <td>defaultLocales</td>
        <td>デフォルトのロケールのデータ</td>
      </tr>
      <tr>
        <td>preView</td>
        <td>PreView Mode</td>
      </tr>
      <tr>
      <td>preViewData</td>
      <td>Preview ModeでsetPreviewDateによってセットされたデータ。</td>
      </tr>
    </tbody>
  </table>

## SSR

## ISR

## 環境変数

Next.js はビルトインで環境変数のための.env ファイルを処理できる。プロジェクトルートにおいてある環境変数ファイル.env は自動で読み込まれ、コード上で参照できる。

.env
.env.local
.env.${環境名}
.env.${環境名}.local

※.local がついているものは.gitignore に追加されることを意図しており、API キーなどの公開したくない値を保存するために使用する。

.env と.env.local は環境を問わず、常に使用可能
.env.development と.env.development.local は開発サーバーを動かすときに、.env.production や.env.prouction.local はビルド時や本番環境で動かす時に使用する
