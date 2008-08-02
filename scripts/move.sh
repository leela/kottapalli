
for f in july2008/pictures/*
do
    name=`echo $f | sed 's/ /_/g'`
    mv "$f" $name
done
