import sys
import utils
import os

def get_issue_names(seq):
    """Here seq will have aal elemants from which we can get issues.
    """
    res = []
    for i in seq:
        issue = os.path.join('/', '/'.join(i.lstrip('/').split('/', 2)[:2]))
        if issue not in res:
            res.append(issue)
    return list(set(res))

issues = sys.argv[1:]
if not issues:
    site="http://kottapalli.in"
    main_page = utils.read_page(site)
    urls = utils.get_urls(main_page)
    issues = get_issue_names(utils.get_similar_strs(urls, '/\d{4}/\d{2}'))
else:
    #Filter the given urls for our need
    issues = utils.get_similar_strs(issues, '/\d{4}/\d{2}$')
print ' '.join(issues)
