import json
from django.conf import settings
from files_management.models import Store, Product
from django.http import HttpResponse 
from django.shortcuts import render

# delete user and delete category
def render_store(request):
    domain = request.get_host()
    try:
        store = Store.objects.get(domain = domain)
        if not store.active:
            return render(request, 'empty.html')
    except:
        return render(request, 'empty.html')
    
    
    with open(settings.BASE_DIR / f'json/users/stores/{store.id}.json', 'r') as json_file:
        store = json.load(json_file)
    
    return render(request, 'index.html', context={
        'store': json.dumps(store),
        'title': store.get('name'),
        'favicon': store.get('favicon') or "",
        'description': store.get('description'),
        'lang': store.get('language'),
        'dir': 'rtl' if store.get('language') == 'ar' else 'ltr',
        'image': store.get('logo') or "", # next will be store image
        'url': request.build_absolute_uri(),
    })

def render_product(request, slug, product_id):
    domain = request.get_host()
    domain = domain.replace('8080', '3001')
    try:
        store = Store.objects.get(domain = domain)
    except:
        return HttpResponse(status=200)
    with open(settings.BASE_DIR / f'json/users/stores/{store.id}.json', 'r') as json_file:
        store = json.load(json_file)
    
    product_id = product_id
    try:
        product = Product.objects.get(store = store,  id = product_id)
        if not product.active:
            product = None
    except:
        product = None

    if (product):
        try:
            with open(settings.BASE_DIR / f'json/users/products/{product_id}.json', 'r') as json_file:
                product = json.load(json_file)
        except:
            product = None

    context={
        'store': json.dumps(store),
        'favicon': store.get('favicon') or "",
        'lang': store.get('language'),
        'dir': 'rtl' if store.get('language') == 'ar' else 'ltr',
        'url': request.build_absolute_uri(),
    }

    if product:
        context.update({
            'title': product.get('title'),
            'product': json.dumps(product),
            'description': product.get('miniDescription') or store.get('description'),
            'image': product.get('galleryImages')[0] if product.get('galleryImages') else (store.get('logo') or ""),
        })

    return render(request, 'index.html', context=context)

def catch_remaining_path(request, path):
    return render(request, 'empty.html')