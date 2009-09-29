#!/bin/bash

#set -x - It prints log

dir_name=`echo kottapalli$1|tr '/' '_'`
echo $dir_name

mkdir kottapalli #It create kottapalli directory to store all articles
issues=`python get_issues.py $*`
python scraper.py $issues
mkdir kottapalli/static

STATIC=/var/www/kottapalli.in/static

cp -r $STATIC/css/ $STATIC/js/ kottapalli/static

for i in $issues
    do
    mkdir -p kottapalli/static/music$i
    mkdir -p kottapalli/static/images$i
    cp  $STATIC/music$i/* kottapalli/static/music$i/
    cp  $STATIC/images$i/* kottapalli/static/images$i/
    done

mv kottapalli $dir_name
zip -r $dir_name $dir_name
rm -rf $dir_name
