# 2020/12/04 社内勉強会で使用

Sentry を理解しデプロイフローで何が必要か、初期化でどんなオプションが入れられるか、エラーをコードベースで送信しないなどを解説した。

[個人的にも多少まとめている。](https://scrapbox.io/tkdn/SentryCLI_webpack_%E3%81%8B%E3%82%89%E9%80%81%E4%BF%A1)

# Quick Start

## Install

```bash
$ yarn
```

## Setup

.env.example を参考に .env を作成

```
NEXT_PUBLIC_SENTRY_DSN= Sentry で DSN を払い出し（プロジェクト作成時に出てくる）
NEXT_PUBLIC_APP_ENV= production | development | local など
SENTRY_ORG= Orgnization 名
SENTRY_PROJECT= Project 名
SENTRY_AUTH_TOKEN= User Settings から API Token が必要（権限は project:release だけで良い）
```

## development

```bash
$ yarn dev
```

## build

```bash
$ yarn build
```

.env の設定が満たされている && git 管理下にある（コミットハッシュを取得する）という条件で SourceMap を Sentry に送信する。

# Sentry CLI finalize

```bash
# 環境変数に適切な SENTRY_AUTH_TOKEN が存在した上で
$ sentry-cli releases deploys ${commit hash}  new --env production
```

で最終的なデプロイ後のトラッキングが始まる。
