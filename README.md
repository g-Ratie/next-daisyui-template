# Next.js daisyUI template

このプロジェクトは以下の技術で構築されています。

- Next.js
- TypeScript
- Tailwind CSS
- daisyUI
- Storybook
- husky & lint-staged
- scaffdog

## 構造

```zsh
.
├── .husky
├── .scaffdog
├── .storybook
├── public
└── src
    ├── components
    │   ├── templates
    │   ├── organisms
    │   ├── molecules
    │   └── atoms
    ├── pages
    │   └── api
    └── styles
```

## 使い方

### 開発

以下のコマンドで素早く開発を始めることができます。

```zsh
# package install
yarn

# start localhost
yarn dev

# start storybook
yarn sb
```

### Scaffdog

**新しいコンポーネント（アトミックデザイン）の作成**

新しいコンポーネントを作成する場合、以下の手順に従います。

① シンプルなコンポーネントの場合、最初にこのコマンドを使用します。.

```zsh
yarn sd-gen a
```

その後、scaffdog がいくつかの質問をします。これは Sample コンポーネントを作成する例です。

```zsh
ℹ Output destination directory: "."
? Please select stage. atom # Choose atom (in atom, molecule, organism, template)
? Please enter a component name. sample

🐶 Generated 1 file!

     ✔ src/components/atoms/Sample.tsx

```

② Props 付きコンポーネントの場合

```zsh
yarn sd-gen ap
```

```zsh
ℹ Output destination directory: "."
? Please select stage. atom # Choose atom (in atom, molecule, organism, template)
? Please enter a component name. sample

🐶 Generated 1 file!

     ✔ src/components/atoms/Sample.tsx

```

**新しいページコンポーネントの作**

① シンプルなページコンポーネントの場合

```zsh
yarn sd-gen p
```

```zsh
ℹ Output destination directory: "."
? Please enter a page name. sample

🐶 Generated 1 file!

     ✔ src/pages/sample.tsx

```

② SSR のページコンポーネント

```zsh
yarn sd-gen pp
```

```zsh
ℹ Output destination directory: "."
? Please enter a page name. sample

🐶 Generated 1 file!

     ✔ src/pages/sample.tsx

```
