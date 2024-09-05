from django.shortcuts import render
import json
from django.conf import settings
from files_management.models import Store

# delete user and delete category
def render_store(request, path=None):
    domain = request.get_host()
    domain = domain.replace(':8080', '') # remove this line
    store = Store.objects.get(domain = domain)
    with open(settings.BASE_DIR / f'json/users/stores/{store.id}.json', 'r') as json_file:
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
    store = Store.objects.get(domain = domain)
    with open(settings.BASE_DIR / f'json/users/stores/{store.id}.json', 'r') as json_file:
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
        'image': product.get('galleryImages')[0] if product.get('galleryImages') else (store.get('logo') or ""),
        'url': request.build_absolute_uri()
    })

