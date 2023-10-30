#!/bin/sh

FILE="/home/api/.env"
cat > ${FILE} <<- EOF
APP_NAME=MeEdu
APP_ENV=production
APP_KEY=base64:s9M5EmBWLWerXU/udZ8biH8GYGKBAEtatGNI2XnzEVM=
APP_DEBUG=false
APP_LOG_LEVEL=debug
APP_URL=${DOMAIN_URL}
APP_LANG=zh

DB_CONNECTION=mysql
DB_HOST=${MYSQL_HOST}
DB_PORT=${MYSQL_PORT}
DB_DATABASE=$MYSQL_DATABASE
DB_USERNAME=${MYSQL_USERNAME}
DB_PASSWORD=${MYSQL_PASSWORD}

BROADCAST_DRIVER=log
CACHE_DRIVER=file
SESSION_DRIVER=file
SESSION_LIFETIME=120
QUEUE_DRIVER=sync

REDIS_HOST=${REDIS_HOST}
REDIS_PASSWORD=${REDIS_PASSWORD}
REDIS_PORT=${REDIS_PORT}

MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME=null

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=

# JWT
JWT_SECRET=hE0GrpZIp2qKXirUtWRFWF0kYMpkShDtsamxy0RtcdUmq8ERIiSOdGtLi2FJnogE

# MeEduCloud
MEEDUCLOUD_DOMAIN=https://meedu.vip
MEEDUCLOUD_USER_ID=
MEEDUCLOUD_PASSWORD=

# MEIMISEARCH
SCOUT_DRIVER=meilisearch
SCOUT_PREFIX=meedu_
SCOUT_QUEUE=false
MEILISEARCH_HOST=
MEILISEARCH_KEY=

# TencentCos
TENCENT_COS_REGION=
TENCENT_COS_APP_ID=
TENCENT_COS_SECRET_ID=
TENCENT_COS_SECRET_KEY=
TENCENT_COS_BUCKET=
TENCENT_COS_CDN=
TENCENT_COS_READ_FROM_CDN=false

CLOSE_DEPRECATED_API=false
EOF

create_database_if_not_exists() {
  # 执行SQL查询
  CHECK_DATABASE_SQL="SELECT COUNT(*) FROM information_schema.schemata WHERE schema_name = '$MYSQL_DATABASE';"
  DATABASE_EXISTS=$(mysql -h"$MYSQL_HOST" -P"${MYSQL_PORT-3306}" -u"$MYSQL_USERNAME" -p"$MYSQL_PASSWORD" -e"$CHECK_DATABASE_SQL" -sN)
  # 如果数据库不存在，创建数据库
  if [ "$DATABASE_EXISTS" -eq 0 ]; then
    mysqladmin -h"$MYSQL_HOST"  -P"${MYSQL_PORT-3306}" -u"$MYSQL_USERNAME" -p"$MYSQL_PASSWORD" create "$MYSQL_DATABASE"
  fi
}

create_database_if_not_exists

MYSQL_CHECK_TABLE='user_video_watch_records '
# 检查表是否存在的SQL查询
CHECK_TABLE_SQL="SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = '$MYSQL_DATABASE' AND table_name = '$MYSQL_CHECK_TABLE';"
# 执行SQL查询
TABLE_EXISTS=$(mysql -h"$MYSQL_HOST" -u"$MYSQL_USERNAME" -p"$MYSQL_PASSWORD" -e"$CHECK_TABLE_SQL" -sN)
# 检查表是否存在
if [ "$TABLE_EXISTS" -eq 0 ]; then
  php /home/api/artisan migrate --force
  php /home/api/artisan install role
  php /home/api/artisan install config
  php /home/api/artisan install administrator -q
  php /home/api/artisan install:lock
else
  echo "表 $TABLE_NAME 存在，不执行SQL文件。"
fi

/usr/bin/supervisord -c /etc/supervisord.conf

crond
nginx
php-fpm
tail -f /dev/null