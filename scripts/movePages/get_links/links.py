"""
It takes a url and get that page. From that page it gets all the links that start with start_str.
"""

def getPage(url):
    """
    it returns the page data
    """
    import urllib2
    f = urllib2.urlopen(url)
    return f.read().decode('utf-8')

def getLinks(string):
    from BeautifulSoup import BeautifulSoup
    soup = BeautifulSoup(string)
    return [anchor['href'] for anchor in  soup.findAll('a')]

def startWith(seq, start):
    """return a list from given sequence 
    """
    return [s for s in seq if s.startswith(start)]
