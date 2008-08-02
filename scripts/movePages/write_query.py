
#specify your database configuration
# this is required because we are not running infobase server separately. 
# We don't need this, if we have separate infobase server running.
import web
web.config.db_parameters = dict(dbn='postgres', db='kottapalli2', user='leela', pw='')
web.load()

from infogami.infobase.client import Client, Site

#replace infogami.org with your sitename
client = Client(None, 'kottapalli.in')
site = Site(client)

def write_to_databse(fileName):
    """File have queries list. it pushes all the queries to database
    """
    f = open(fileName)
    queries = eval(open(fileName).read())
    for q in queries:
        site.write(q)
    print "Quries are saved:)"

if __name__ == "__main__":
    import sys
    write_to_databse(sys.argv[1])
