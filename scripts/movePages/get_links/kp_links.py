import links

def get_issues(text):
    """
        It returns the issues list of kottapalli
    """
    from BeautifulSoup import BeautifulSoup 
    soup = BeautifulSoup(text)
    return [anchor['href'] for anchor in soup.findAll('ul', id="issues")[0].findAll('a')]


def main(url):
    issues = get_issues(links.getPage(url)) 
    
    wikiPages = []
    for issue in issues:
        l = links.getLinks(links.getPage(url.strip('/') + issue))
        wikiPages.extend(links.startWith(l, issue))
    return [i.lstrip('/') for i in set(wikiPages)]

def save(seq, fileName):
    f = open(fileName, 'w')
    f.write('\n'.join(seq).encode('utf-8'))

if __name__ == "__main__":
    import sys
    paths = main("http://kottapalli.in")
    save(paths, sys.argv[1])
