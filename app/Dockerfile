FROM php:8.2.8-apache

# コンテナ内でパッケージをインストールできる
# mysqlに接続するためのパッケージをインストールするコマンド
RUN apt update  \
  && docker-php-ext-install pdo_mysql

EXPOSE 80