from django.http import JsonResponse, HttpResponse
import os, shutil, json
from django.conf import settings
from constants import media_files_domain
from .middleware import user_from_request
from time import sleep
from PIL import Image as IM
from files_management.models import ProductImage, Product, Store, Category, CetegoryImage, StoreLogo
from django.http import FileResponse

# delete user and delete category

def make_store_directory(request):
    if request.method == 'POST' :
        if settings.MESSAGING_KEY == request.POST.get('MESSAGING_KEY'):
            try:
                store_id = request.POST.get('store_id')
                user_id = request.POST.get('user_id')
                text_id = request.POST.get('text_id')
                store_path = f'{settings.MEDIA_ROOT}/users/{user_id}/stores/{store_id}'
                Store.objects.create(
                    id=store_id,
                    user_id=user_id,
                    text_id=text_id
                )
                os.makedirs(store_path, exist_ok=True)
                os.makedirs(f'{store_path}/categories', exist_ok=True)
                return JsonResponse({'Detail': 'Path created'}, status=200)
            except Exception as e:
                print(e)
                
    return JsonResponse({'error': 'Request refused'}, status=405)

def delete_store_directory(request):
    if request.method == 'POST' :
        if settings.MESSAGING_KEY == request.POST.get('MESSAGING_KEY'):
            try:
                user_id = request.POST.get('user_id')
                store_id = request.POST.get('store_id')
                store_path = f'{settings.MEDIA_ROOT}/users/{user_id}/stores/{store_id}'

                try:
                    Store.objects.get(
                        id = store_id,
                    ).delete()
                except Exception as e:
                    print(e)
                
                shutil.rmtree(store_path)
                try:
                    os.remove(f'{settings.JSON_ROOT}/users/stores/{store_id}.json')
                except Exception as e:
                    print(e)   

                return JsonResponse({'Detail': 'Product deleted successfully'}, status=200)
            
            except Exception as e:
                print(e)

def make_product_directory(request):
    if request.method == 'POST' :
        if settings.MESSAGING_KEY == request.POST.get('MESSAGING_KEY'):
            try:
                product_id = request.POST.get('product_id')
                store_id = request.POST.get('store_id')
                user_id = request.POST.get('user_id')
                product_path = f'{settings.MEDIA_ROOT}/users/{user_id}/stores/{store_id}/products/{product_id}'
                Product.objects.create(
                    id=product_id,
                    user_id=user_id,
                    store_id=store_id,
                )
                os.makedirs(product_path, exist_ok=True)
                return JsonResponse({'Detail': 'Path created'}, status=200)
            except Exception as e:
                raise
                
    return JsonResponse({'error': 'Request refused'}, status=405)

def delete_product(request):
    if request.method == 'POST' :
        if settings.MESSAGING_KEY == request.POST.get('MESSAGING_KEY'):
            try:
                product_id = request.POST.get('product_id')
                user_id = request.POST.get('user_id')
                store_id = request.POST.get('product_id')
                product_path = f'{settings.MEDIA_ROOT}/users/{user_id}/stores/{store_id}/products/{product_id}'
                try:
                    Product.objects.get(
                        id = product_id,
                    ).delete()
                except:
                    pass
                
                shutil.rmtree(product_path)
                try:
                    os.remove(f'{settings.JSON_ROOT}/users/products/{product_id}.json')
                except Exception as e:
                    print(e)
                    pass
                
                return JsonResponse({'Detail': 'Product deleted successfully'}, status=200)
            except Exception as e:
                print(e)

def toggle_product_state(request):
    if request.method == 'POST' :
        if settings.MESSAGING_KEY == request.POST.get('MESSAGING_KEY'):
            try:
                product_id = request.POST.get('product_id')
                product = Product.objects.get(id=product_id)
                product.active = request.POST.get('active')
                product.save()   
                return JsonResponse({'Detail': 'Product deleted successfully'}, status=200)
            except Exception as e:
                print(e)
                return JsonResponse({'Detail': 'Product deleted unsuccessfully'}, status=400)

def make_user_directory(request):
    if request.method == 'POST' :
        if settings.MESSAGING_KEY == request.POST.get('MESSAGING_KEY'):
            try:
                user_id = request.POST.get('user_id')
                store = json.loads(request.POST.get('store'))
                os.makedirs(f'{settings.MEDIA_ROOT}/users/{user_id}')
                os.makedirs(f'{settings.MEDIA_ROOT}/users/{user_id}/products')
                os.makedirs(f'{settings.MEDIA_ROOT}/users/{user_id}/stores/')
                os.makedirs(f'{settings.MEDIA_ROOT}/users/{user_id}/stores/{store["id"]}')
                os.makedirs(f'{settings.MEDIA_ROOT}/users/{user_id}/stores/{store["id"]}/categories')
                
                Store.objects.create(
                    id=store['id'],
                    user_id=user_id,
                    text_id=store['id'],
                )
                with open(settings.BASE_DIR / f'json/users/stores/{store["id"]}.json', 'w') as json_file:
                    json.dump(store, json_file)

                return JsonResponse({'detail': 'Path created'}, status=200)
            except Exception as e:
                print(e)
                
    return JsonResponse({'error': 'Request refused'}, status=405)
    
def upload_variant_image(request):
    user_data = user_from_request(request)
    user_id = user_data['user_id']
    sleep(1)
    if request.method == 'POST' :
        if user_id:
            product_id = request.POST.get('product_id')
            product = Product.objects.get(
                id = product_id
            )
            store_id = request.POST.get('store_id')
            image = request.FILES.get('image')
            if image:
                image_pil = IM.open(image)
                width, height = image_pil.size
                if (width > 1080 or height > 1080):
                    return JsonResponse({'error': 'Invalid request'}, status=400)
                if image_pil.format != 'WEBP':
                    return JsonResponse({'error': 'Invalid request'}, status=400)
                
                image_object = ProductImage.objects.create(
                    user_id=user_id,
                    product =  product,
                    type =  'product/varinat-image',
                )
                image_extention = f'users/{user_id}/stores/{store_id}/products/{product_id}/{image_object.id}.webp'     
                image_url = f'{media_files_domain}/{settings.MEDIA_URL}/{image_extention}'
                image_path = os.path.join(settings.MEDIA_ROOT, image_extention.replace('/', '\\'))
                image_pil.save(image_path)
                image_size = os.path.getsize(image_path) / 1024
                image_object.url = image_url
                image_object.path = image_path
                image_object.size = image_size
                image_object.save()
                prev_image = request.POST.get('prev_image')
                if prev_image:
                    try:
                        ProductImage.objects.get(url=prev_image).delete()
                    except:
                        pass
                return JsonResponse({
                    'url': image_url,
                }, status=200)
    return JsonResponse({'error': 'Invalid request'}, status=400)

def upload_rich_text_image(request):
    user_data = user_from_request(request)
    user_id = user_data['user_id']
    sleep(1)
    if request.method == 'POST' :
        if user_id:
            product_id = request.POST.get('product_id')
            product = Product.objects.get(
                id = product_id
            )
            store_id = request.POST.get('store_id')
            image = request.FILES.get('image')
            if image:
                image_pil = IM.open(image)
                width, height = image_pil.size
                if (width > 1080 ):
                    return JsonResponse({'error': 'Invalid request 1'}, status=400)
                if image_pil.format != 'WEBP':
                    return JsonResponse({'error': 'Invalid request 2'}, status=400)
                
                image_object = ProductImage.objects.create(
                    user_id=user_id,
                    product =  product,
                    type='product/rich-text-image',
                )
                image_extention = f'users/{user_id}/stores/{store_id}/products/{product_id}/{image_object.id}.webp'     
                image_url = f'{media_files_domain}/{settings.MEDIA_URL}/{image_extention}'
                image_path = os.path.join(settings.MEDIA_ROOT, image_extention.replace('/', '\\'))
                image_pil.save(image_path)
                image_size = os.path.getsize(image_path) / 1024
                image_object.url = image_url
                image_object.path = image_path
                image_object.size = image_size
                image_object.save()
                prev_image = request.POST.get('prev_image')
                if prev_image:
                    try:
                        ProductImage.objects.get(url=prev_image).delete()
                    except:
                        pass
                return JsonResponse({
                    'url': image_url,
                }, status=200)
    return JsonResponse({'error': 'Invalid request'}, status=400)

def upload_gellery_image(request):
    user_data = user_from_request(request)
    user_id = user_data['user_id']
    sleep(1)
    if request.method == 'POST' :
        if user_id:
            product_id = request.POST.get('product_id')
            product = Product.objects.get(
                id = product_id
            )
            store_id = request.POST.get('store_id')
            image = request.FILES.get('image')
            if image:
                image_pil = IM.open(image)
                width, height = image_pil.size
                if (width > 2048 or height > 2048):
                    return JsonResponse({'error': 'Invalid request'}, status=400)
                if image_pil.format != 'WEBP':
                    return JsonResponse({'error': 'Invalid request'}, status=400)
                
                image_object = ProductImage.objects.create(
                    user_id=user_id,
                    product =  product,
                    type =  'product/gallery-image',
                )
                image_extention = f'users/{user_id}/stores/{store_id}/products/{product_id}/{image_object.id}.webp'     
                image_url = f'{media_files_domain}/{settings.MEDIA_URL}/{image_extention}'
                image_path = os.path.join(settings.MEDIA_ROOT, image_extention.replace('/', '\\'))
                image_pil.save(image_path)
                image_size = os.path.getsize(image_path) / 1024
                image_object.url = image_url
                image_object.path = image_path
                image_object.size = image_size
                image_object.save()
                prev_image = request.POST.get('prev_image')
                if prev_image:
                    try:
                        ProductImage.objects.get(url=prev_image).delete()
                    except:
                        pass
                return JsonResponse({
                    'url': image_url,
                }, status=200)
    return JsonResponse({'error': 'Invalid request'}, status=400)

def upload_category_image(request):
    user_data = user_from_request(request)
    user_id = user_data['user_id']
    sleep(1)
    if request.method == 'POST' :
        if user_id:
            store_id = request.POST.get('store_id')
            store = Store.objects.get(user_id=user_id, id=store_id)
            image = request.FILES.get('image')
            if image:
                image_pil = IM.open(image)
                width, height = image_pil.size
                if (width > 480 or height > 480):
                    return JsonResponse({'error': 'Invalid request 1'}, status=400)
                if image_pil.format != 'WEBP':
                    return JsonResponse({'error': 'Invalid request 2'}, status=400)
                
                catgory_image = CetegoryImage.objects.create(store=store)
                image_extention = f'users/{user_id}/stores/{ store_id }/categories/{catgory_image.id}.webp'     
                image_url = f'{media_files_domain}/{settings.MEDIA_URL}/{image_extention}'
                image_path = os.path.join(settings.MEDIA_ROOT, image_extention.replace('/', '\\'))
                image_pil.save(image_path)
                image_size = os.path.getsize(image_path) / 1024
                catgory_image.url = image_url
                catgory_image.path = image_path
                catgory_image.size = image_size
                catgory_image.save()
                return JsonResponse({
                    'url': image_url,
                }, status=200)
    return JsonResponse({'error': 'Invalid request'}, status=400)

def upload_store_logo(request):
    user_data = user_from_request(request)
    user_id = user_data['user_id']
    sleep(1)
    if request.method == 'POST' :
        if user_id:
            store_id = request.POST.get('store_id')
            store = Store.objects.get(id=store_id, user_id=user_id)
            image = request.FILES.get('image')
            if image:
                image_pil = IM.open(image)
                width, height = image_pil.size
                if (width > 480 or height > 480):
                    return JsonResponse({'error': 'Invalid request'}, status=400)
                
                store_logo = StoreLogo.objects.create()                
                image_extention = f'users/{user_id}/stores/{store_id}/{store_logo.id}.{image_pil.format.lower()}'     
                image_url = f'{media_files_domain}/{settings.MEDIA_URL}/{image_extention}'
                image_path = os.path.join(settings.MEDIA_ROOT, image_extention.replace('/', '\\'))
                image_pil.save(image_path)
                
                store_logo.url = image_url
                store_logo.path = image_path
                store_logo.size = os.path.getsize(image_path) / 1024
                store_logo.save()
                return JsonResponse({
                    'url': image_url,
                }, status=200)
            else: 
                print('No image')
        else: 
            print('No user ID')
    return JsonResponse({'error': 'Invalid request'}, status=400)

def delete_all_gallery_images(request):
    user_data = user_from_request(request)
    user_id = user_data['user_id']
    data = json.loads(request.body)
    sleep(1)
    if request.method == 'POST' :
        if user_data:
            product_id = data.get('product_id')
            images_qeuryset = ProductImage.objects.filter(
                user_id=user_id,
                product_id = product_id,
                type= 'product/gallery-image'
            )
            images_list = list(images_qeuryset.values_list('url', flat=True))
            images_qeuryset.delete()
            return JsonResponse({
                'deletedImages': images_list,
            }, status=200)
    return JsonResponse({'error': 'Invalid request'}, status=400)

def delete_image(request):
    user_data = user_from_request(request)
    user_id = user_data['user_id']
    sleep(1)
    if request.method == 'POST' :
        data =  json.loads(request.body)
        image_url = data.get('image')
        image_type = data.get('type')
        if image_url:
            try:
                if image_type.startswith('product'):
                    print(image_url, user_id)
                    ProductImage.objects.get(
                        user_id = user_id,
                        url=image_url
                    ).delete()

                elif image_type == 'category':
                    store_id = data.get('store_id')
                    store = Store.objects.get(id=store_id, user_id=user_id)
                    CetegoryImage.objects.get(
                        store = store,
                        url=image_url
                    ).delete()

                elif image_type == 'store':
                    store_id = data.get('store_id')
                    store = Store.objects.get(id=store_id, user_id=user_id)
                    StoreLogo.objects.get(store=store).delete()
            except Exception as e:
                print(e)
                pass
            return JsonResponse({
                'detail' : 'Delete successfull'
            }, status=200)
    return JsonResponse({'error': 'Invalid request'}, status=400)

def resized_image(request):
    url = request.GET.get('url')
    width = int(request.GET.get('width'))
    image_path = ProductImage.objects.get(url=url).path
    image = IM.open(image_path)
    image.thumbnail((width, width))
    response = HttpResponse(content_type="image/webp")
    image.save(response, "WEBP")
    return response

def save_product(request):
    data = json.loads(request.POST.get('product_files_data'))
    MESSAGING_KEY = data.get('MESSAGING_KEY')
    if MESSAGING_KEY != settings.MESSAGING_KEY:
        return JsonResponse({'detail': "Wrong credintials"}, status=400)
    
    product_id = data.get('product_id')
    images_urls = data.get('images_urls')
    all_product_images = ProductImage.objects.filter(product_id=product_id)
    all_product_images.filter(url__in = images_urls).update(is_in_use=True)
    all_product_images.exclude(url__in = images_urls).delete()
    with open(settings.BASE_DIR / f'json/users/products/{product_id}.json', 'w') as json_file:
        json.dump(data.get('product_data'), json_file)

    return JsonResponse({}, status=200)

def update_gallery_images(file_path, new_images):
    # Check if the file exists
    if not os.path.exists(file_path):
        # If the file does not exist, create an empty dictionary and write it to the file
        data = {"galleryImages": []}
        with open(file_path, 'w') as json_file:
            json.dump(data, json_file, indent=4)
    else:
        # If the file exists, read the existing data
        with open(file_path, 'r') as json_file:
            data = json.load(json_file)
    
    data['galleryImages'] = new_images

    # Write the updated data back to the file
    with open(file_path, 'w') as json_file:
        json.dump(data, json_file, indent=4)

def save_gallery_images(request):
    data = json.loads(request.POST.get('data'))
    MESSAGING_KEY = data.get('MESSAGING_KEY')
    if MESSAGING_KEY != settings.MESSAGING_KEY:
        return JsonResponse({'detail': "Wrong credintials"}, status=400)
    
    product_id = data.get('product_id')
    gallery_images = data.get('gallery_images')
    update_gallery_images(settings.BASE_DIR / f'json/users/products/{product_id}.json', gallery_images)
    return JsonResponse({'detail': "Images gallery updated successfully"}, status=200)

def save_category(request):
    data = json.loads(request.POST.get('data'))
    MESSAGING_KEY = data.get('MESSAGING_KEY')
    if MESSAGING_KEY != settings.MESSAGING_KEY:
        return JsonResponse({'detail': "Wrong credintials"}, status=400)
    
    store_id = data.get('store_id')
    category_image = data.get('category_image')
    category_image = CetegoryImage.objects.get(url=category_image)
    category = Category.objects.create(
        id = data.get('category_id'),
        store_id=store_id
    )  
    category_image.category = category
    category_image.save()
    CetegoryImage.objects.filter(store_id = store_id, category=None).delete()
    return JsonResponse({}, status=200)

def get_product(request):
    product_id = request.GET.get('product_id')
    product = Product.objects.get(id=product_id)
    if product.active:
        response = FileResponse(open(f'{settings.JSON_ROOT}/users/products/{product.id}.json', 'rb'))
        return response
    else:
        return JsonResponse({'detail': 'File not found'}, status=400)

def get_product_for_edit(request):
    user_data = user_from_request(request)
    user_id = user_data['user_id']
    product_id = request.GET.get('product_id')
    product = Product.objects.get(id=product_id, user_id=user_id)
    try:
        response = FileResponse(open(f'{settings.JSON_ROOT}/users/products/{product.id}.json', 'rb'))
        return response
    except:
        return JsonResponse({'detail': 'File not found'}, status=400)
    
def save_store(request):
    data = request.POST
    store_data = json.loads(data.get('store_data'))
    MESSAGING_KEY = data.get('MESSAGING_KEY')
    if MESSAGING_KEY != settings.MESSAGING_KEY:
        return JsonResponse({'detail': "Wrong credintials"}, status=400)
    
    store_id = data.get('store_id')
    store_logo_url = data.get('store_logo_url')
    store = Store.objects.get(id=store_id)
    store_logo = StoreLogo.objects.get(url = store_logo_url)
    try:
        store.logo.delete()
    except:
        pass
    store_logo.store = store
    store_logo.save()
    with open(settings.BASE_DIR / f'json/users/stores/{store_id}.json', 'w') as json_file:
        json.dump(store_data, json_file)

    return JsonResponse({'detail' : 'success'}, status=200)

def toggle_store_state(request):
    if request.method == 'POST' :
        if settings.MESSAGING_KEY == request.POST.get('MESSAGING_KEY'):
            try:
                store_id = request.POST.get('store_id')
                store = Store.objects.get(id=store_id)
                store.active = request.POST.get('active')
                store.save()   
                return JsonResponse({'Detail': 'Product deleted successfully'}, status=200)
            except Exception as e:
                print(e)
                return JsonResponse({'Detail': 'Product deleted unsuccessfully'}, status=400)
            
def get_store(request):
    data = request.GET
    text_id = data.get('id')
    store = Store.objects.get(text_id = text_id)

    if store.active:
        response = FileResponse(open(f'{settings.JSON_ROOT}/users/stores/{store.id}.json', 'rb'))
        return response
    else:
        return JsonResponse({'detail': 'File not found'}, status=400)

def get_store_for_edit(request):
    user_data = user_from_request(request)
    user_id = user_data['user_id']
    store_id = request.GET.get('store_id')
    store = Store.objects.get(id=store_id, user_id=user_id)
    try:
        response = FileResponse(open(f'{settings.JSON_ROOT}/users/stores/{store.id}.json', 'rb'))
        return response
    except:
        return JsonResponse({'detail': 'File not found'}, status=400)
    
def save_fb_pixel(request):
    data = request.POST
    MESSAGING_KEY = data.get('MESSAGING_KEY')
    if MESSAGING_KEY != settings.MESSAGING_KEY:
        return JsonResponse({'detail': "Wrong credintials"}, status=400)
    
    fb_pixel = data.get('fb_pixel')
    store_id = data.get('store_id')
    
    file_path = settings.BASE_DIR / f'json/users/stores/{store_id}.json'
    with open(file_path, 'r') as json_file:
        data = json.load(json_file)

    # Add or update the 'FBPixel' property
    data['facebookPixelId'] = fb_pixel

    # Save the updated JSON data back to the file
    with open(file_path, 'w') as json_file:
        json.dump(data, json_file)
    return JsonResponse({'detail' : 'success'}, status=200)

def delete_fb_pixel(request):
    data = request.POST
    MESSAGING_KEY = data.get('MESSAGING_KEY')
    if MESSAGING_KEY != settings.MESSAGING_KEY:
        return JsonResponse({'detail': "Wrong credintials"}, status=400)
    
    store_id = data.get('store_id')
    
    file_path = settings.BASE_DIR / f'json/users/stores/{store_id}.json'
    with open(file_path, 'r') as json_file:
        data = json.load(json_file)

    # Add or update the 'FBPixel' property
    try:
        data.pop('facebookPixelId')
    except:
        pass

    # Save the updated JSON data back to the file
    with open(file_path, 'w') as json_file:
        json.dump(data, json_file)
    return JsonResponse({'detail' : 'success'}, status=200)
