def get_files(directory):
    import os
    res = []
    for d in os.walk(directory):
        res.extend([os.path.join(d[0], f) for f in d[2]])
    return res

def new_query(q):
    res = {}
    res['create'] = 'unless_exists'
    res['key'] = '/' + q['name']
    res['type'] = {'key' : '/type/article'}
    res['title'] = q['d'].get('title', '')
    res['intro'] = q['d'].get('intro', '')
    res['body'] = q['d'].get('body', '')
    res['category'] = {'key' : '/\xe0\xb0\x95\xe0\xb0\xa5\xe0\xb0\xb2\xe0\xb1\x81'}
    res['issue'] = {'key' : '/'+'/'.join(q['name'].split('/')[:-1])}
    return res

def make_result(filesList):
    res = []
    for path in set(filesList):
        query = new_query(eval(open(path).read()))
        res.append(query)
    return res

def save_in_file(filename, data):
    f = open(filename, 'w')
    f.write(str(data))
    f.close()
    print "queries are saved in "+filename

if __name__ == "__main__":
    import sys
    #res = make_result(get_files('old_pages'))
    #save_in_file('infobaseQueries.txt', make_result(get_files('old_pages')))
    save_in_file(sys.argv[2], make_result(get_files(sys.argv[1])))
