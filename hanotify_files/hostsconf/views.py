from django.shortcuts import render
import json
from django.conf import settings

# delete user and delete category
def render_store(request, path=None):
    domain = request.get_host()
    print(domain, request.build_full_url())
    domain = domain.replace(':8080', '') # remove this line
    with open(settings.BASE_DIR / f'json/users/stores/{domain}.json', 'r') as json_file:
        store = json.load(json_file)
    
    return render(request, 'index.html', context={
        'store': json.dumps(store),
        'title': store.get('name'),
        'logo': store.get('logo') or "",
        'description': store.get('description'),
        'image': store.get('logo') or "", # next will be store image
        'url': request.build_absolute_uri()
    })
    
def render_product(request, slug, product_id):
    domain = request.get_host()
    domain = domain.replace(':8080', '')
    with open(settings.BASE_DIR / f'json/users/stores/{domain}.json', 'r') as json_file:
        store = json.load(json_file)
    
    product_id = product_id
    with open(settings.BASE_DIR / f'json/users/products/{product_id}.json', 'r') as json_file:
        product = json.load(json_file)
    
    return render(request, 'index.html', context={
        'store': json.dumps(store),
        'product': json.dumps(product),
        'title': product.get('title'),
        'logo': store.get('logo') or "",
        'description': product.get('miniDescription') or store.get('description'),
        'image': product.get('galleryImages')[0] if product.get('galleryImages')[0] else  (store.get('logo') or ""),
        'url': request.build_absolute_uri()
    })

