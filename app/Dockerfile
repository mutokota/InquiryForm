FROM php:8.2.9-apache



# コンテナ内でパッケージをインストールできる
# mysqlに接続するためのパッケージをインストールするコマンド
RUN apt update  \
  && docker-php-ext-install pdo_mysql

RUN curl -sSLO https://github.com/mailhog/mhsendmail/releases/download/v0.2.0/mhsendmail_linux_amd64 \
  && chmod +x mhsendmail_linux_amd64 \
  && mv mhsendmail_linux_amd64 /usr/local/bin/mhsendmail \
  && echo 'sendmail_path = "/usr/local/bin/mhsendmail --smtp-addr=mailhog:1025"' > /usr/local/etc/php/conf.d/sendmail.ini

