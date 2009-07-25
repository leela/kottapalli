# Kottapalli: Telugu pillala (e) maasa patrika

website: <http://kottapalli.in>

Kottapalli is built using Infogami. 

## Requirements

* web.py
* simplejson
* pyyaml
* psycopg2
* postgresql

## Setup

Get code

    $ git clone git://github.com/leela/kottapalli.git

update submodules

    $ cd kottapalli
    $ ./setup.sh

customize config file

    $ cp conf/sample_kottapalli.yml kottapalli.yml
    $ # edit kottapalli.yml and update db_parameters

do the setup:

    $ ./scripts/server kottapalli.yml install

Finally run the server:
 
    $ ./scripts/server kottapalli.yml
    http://0.0.0.0:8080

