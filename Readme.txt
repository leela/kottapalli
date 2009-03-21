Kottapalli: Telugu pillala (e) maasa patrika

website: http://kottapalli.in

Kottapalli is built using Infogami. 

How to install: 
    Requuirements:
1. Infogami
2. Webpy
3. Python modules needed: simplejson

How to Install:
a. Get infogami
    $ git clone git://github.com/infogami/infogami.git

b. Install webpy
    http://webpy.org/

c. Get kottapalli
    $ git clone git://github.com/leela/kottapalli.git  

d. create a soft link from infogami/infogami to kottapalli directory

e. Change the db settings in run.py file . 

f.Install kottapalli  
    Follow the install instructions of infogami.
        http://infogami.org/InstallGuide

    Here are the instructions again
        $ DB=infogami
        $ createdb $DB
        $ python run.py --schema | psql $DB
        $ python run.py --createsite
        $ python run.py install

    To run kottapalli on default port: 

    $ python run.py
    http://0.0.0.0:8080
    ...


How to run:
    
    $ python run.py 
    http://0.0.0.0:8080

