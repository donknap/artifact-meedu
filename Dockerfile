FROM ccr.ccs.tencentyun.com/w7team/swoole:fpm-php7.4

RUN echo "https://mirrors.tuna.tsinghua.edu.cn/alpine/v3.18/main" > /etc/apk/repositories && \
    echo "https://mirrors.tuna.tsinghua.edu.cn/alpine/v3.18/community" >> /etc/apk/repositories

RUN apk add --update --no-cache git mysql-client supervisor
ADD ./nginx/default.conf /usr/local/nginx/conf/vhost/

WORKDIR /home

ADD ./start.sh /home
ADD ./admin /home/admin
ADD ./site /home/site
ADD ./h5 /home/h5
ADD ./api /home/api

RUN mkdir /home/admin/storage && ln -s /home/api/storage/app/public/images/ /home/admin/storage/images

RUN mkdir /home/logs/ 
RUN chown -R www:www /home/api
RUN cd /home/api && composer install

RUN echo "*		*	*	*	*	date >> /home/test.log " >> /var/spool/cron/crontabs/root
RUN echo "* * * * * php /home/api/artisan schedule:run" >> /var/spool/cron/crontabs/root
RUN touch /home/api/storage/install.lock
RUN mkdir -p /etc/supervisor.d
ADD ./supervisor/meedu.ini /etc/supervisor.d/

CMD ["sh", "start.sh"]