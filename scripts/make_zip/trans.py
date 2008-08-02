from te import d as telugu

def to_unicode(s):
    return unicode(s, 'utf-8')

def dicToUnicode(d):
    res = {}
    for k, v in d.items():
        res[to_unicode(k)] = to_unicode(v)
    return res

def trans_char(src, d):
    """It has to translate last character of src using d and return result.
    """
    res = ''
    #Below 2 lines are for optimization.
    max_char_len = len(max(d.keys(), key=lambda x: len(x)))
    start_index = ((len(src) > max_char_len) and len(src) - max_char_len) or 0
    for i in range(start_index, len(src)):
        if d.has_key(src[i:]):
            return src[:i]+d[src[i:]]
    return src

def trans_string(string, d):
    res = ""
    for i in range(len(string)):
        res = trans_char(res+string[i], d) 
    return res

def reverse_dict(d):
    res={}
    for i in d.items():
        res[i[1]] = i[0] 
    return res

def itrans_char(src, d):
    return trans_char(src, reverse_dict(d))

def itrans_string(string, d):
    input = string
    res = ''
    while input:
        itranschar = itrans_char(input, d)
        input = itranschar[:-1]
        res = itranschar[-1] + res
    return res


if __name__ == "__main__":
    import sys
    t = dicToUnicode(telugu)
    #print trans_char(sys.argv[1], telugu)
    print trans_string(sys.argv[1], t)
    #print itrans_char(sys.argv[1], t)
    #print itrans_string(to_unicode(sys.argv[1]), t)
