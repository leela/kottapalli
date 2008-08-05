"""
Downloads all the pages of kottapalli.in.
"""
from BeautifulSoup import BeautifulSoup
import urllib2, urllib
import trans
from te import d as telugu
import re
import utils
import os

site = "http://kottapalli.in"

def get_page(path):
    try:
        path = path.encode('utf-8')
        path = urllib.quote(path)
        file = urllib2.urlopen(site+path)
        data = file.read().decode('utf-8')
    except:
        data = ''
    return data
    
def get_urls(data, subUrl):
    soup = BeautifulSoup(data)
    urls = [u['href'] for u in soup.findAll('a') if u['href'].startswith(subUrl)]
    return urls
	
def save(path, subUrl):
	data = get_page(path)
	data = convert_links(data, subUrl)
	fileName = urls[path]
	f = open(os.path.join("kottapalli/", fileName.lstrip('/')), 'w')
	f.write(data)
	f.close()
	return fileName

def convert_links(data, subUrl):
	soup = BeautifulSoup(data)
	for a in soup.findAll('a'):
		if re.match(subUrl, a['href']) or a['href'] == '/':
		    a['href'] = urls[a['href']]
	return str(soup).replace('/static/', 'static/')

urls = {}

def should_save(u):
    split_link = urls[u][::-1].split('#', 1)
    if len(split_link) == 2 and unicode(split_link[1][::-1].rstrip('_')+'.html') in urls.values(): return False
    return True

def save_url(url):
	if url == '/':
		urls[url] = "index.html"
	else:    
		urls[url] = trans.itrans_string(url.replace('/', '_'), trans.dicToUnicode(telugu)) + ".html"

def get_issue(subUrl):
	links = get_urls(get_page(subUrl), subUrl)
	for u in links:
		save_url(u)
	for u in set(links):
            if should_save(u):
		save(u, '/\d{4}/\d{2}')

def main(issues):
    save_url('/')
    links = get_urls(get_page('/'), '/')
    for u in links:
        save_url(u)
    save('/', subUrl='/')
    for i in issues:
        get_issue(i)

def encrypt(string):
    """
    main(encrypt(sys.argv[1]))
    """
    months = {'january':'01',
              'february':'02', 
              'march':'03',
              'april': '04',
              'may': '05',
              'june':'06', 
              'july':'07',
              'august':'08',
              'september':'09',
              'october':'10',
              'november':'11',
              'december':'12'
            }
    return "/20"+string[-2:]+"/"+months[string[:-2].strip()]

import sys
"""
Input should be in montyear format(/2008/07)
"""
main(sys.argv[1:])
