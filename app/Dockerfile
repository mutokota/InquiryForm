FROM php:8.0.30-apache


# コンテナ内でパッケージをインストールできる
# mysqlに接続するためのパッケージをインストールするコマンド
RUN apt update  \
  && docker-php-ext-install pdo_mysql

RUN curl -sSL https://github.com/mailhog/mhsendmail/releases/download/v0.2.0/mhsendmail_linux_amd64 -o mhsendmail \
  && chmod +x mhsendmail \
  && mv mhsendmail /usr/local/bin/mhsendmail

