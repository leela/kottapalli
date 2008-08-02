#!/bin/bash
#set -x

rm -rf kottapalli
mkdir kottapalli
python scraper.py $1

mkdir kottapalli/static

STATIC=/var/www/kottapalli.in/static

#cp -r /var/www/kottapalli.in/static/css/ /var/www/kottapalli.in/static/images/ /var/www/kottapalli.in/static/js/ /var/www/kottapalli.in/static/music /var/www/kottapalli.in/static/pictures kottapalli/static/

#cp -r $STATIC/css/ $STATIC/images/ $STATIC/js/ $STATIC/pictures kottapalli/static/
cp -r $STATIC/css/ $STATIC/js/ kottapalli/static
mkdir -p kottapalli/static/music$1
mkdir -p kottapalli/static/images$1
cp  $STATIC/music$1/* kottapalli/static/music$1/
cp  $STATIC/images$1/* kottapalli/static/images$1/
#cp -r $STATIC/music/$1 kottapalli/static/music
#cp -r $STATIC/pictures/$1 kottapalli/static/pictures
zipfile=`python -c "print '$1'.replace('/', '_').strip('_')"`
zip -r ../kp_zip/$zipfile.zip  kottapalli
#zip -r kottapalli_wo_music.zip kottapalli
rm -rf kottapalli
