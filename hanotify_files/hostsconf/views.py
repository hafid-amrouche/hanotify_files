from django.shortcuts import render
import json
from django.conf import settings
from django.http import JsonResponse

from urllib.parse import urlparse

def extract_domain(url):
    # Parse the URL
    parsed_url = urlparse(url)

    # Extract the domain (netloc)
    domain = parsed_url.netloc

    return domain

# delete user and delete category
def render_store(request, path=None):
    absolute_uri = request.build_absolute_uri()
    domain = extract_domain(absolute_uri)
    print('domainzone:               ', domain)
    try:
        with open(settings.BASE_DIR / f'json/users/stores/{domain}.json', 'r') as json_file:
            return render(request, 'index.html', context={
                'store': json.dumps(json.load(json_file))
            })
    except:
        return JsonResponse({
            'detail': domain
        })
    
def render_product(request, slug, product_id, path=None):
    domain = request.get_host()
    with open(settings.BASE_DIR / f'json/users/stores/{domain}.json', 'r') as json_file:
        store = json.load(json_file)
    
    product_id = product_id
    with open(settings.BASE_DIR / f'json/users/products/{product_id}.json', 'r') as json_file:
        product = json.load(json_file)
    
    return render(request, 'index.html', context={
        'store': json.dumps(store),
        'product': json.dumps(product)
    })