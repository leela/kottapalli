from BeautifulSoup import BeautifulSoup
import urllib

def read_page(host, path=''):
    """It reads the page in that path. and returns data.
    """
    try:
        path = path.encode('utf-8')
        path = urllib.quote(path)
        file = urllib.urlopen(host+path)
        data = file.read().decode('utf-8')
    except:
        data = ''
    return data

def get_urls(data, startstr=''):
    soup = BeautifulSoup(data)           
    return [u['href'] for u in soup.findAll('a') if u['href'].startswith(startstr)] 

def get_similar_strs(seq, like=''):
    """Seq should be always a list of strings.
    """
    import re
    return [s for s in seq if re.match(like, s)]
