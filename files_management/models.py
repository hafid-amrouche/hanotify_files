from django.db import models
from django.db.models.signals import pre_delete
import os, shutil
from django.conf import settings


## store
class Store(models.Model):
    user_id =  models.BigIntegerField()
    id = models.PositiveBigIntegerField(primary_key=True)
    domain = models.TextField(null=True, blank=True)
    active = models.BooleanField(default=True)

def post_delete_store(sender, instance, **kwargs):
    store = instance
    try:
        store_media_path = f'{settings.MEDIA_ROOT}/users/{store.user_id}/stores/{store.id}'
        shutil.rmtree(store_media_path)

    except Exception as e:
        print(e)

    try:
        store_json = f'{settings.JSON_ROOT}/users/stores/{store.id}.json'
        os.remove(store_json)
    except Exception as e:
        print(e)

    try:
        store_json = f'{settings.JSON_ROOT}/users/terms-of-service/{store.id}.json'
        os.remove(store_json)
    except Exception as e:
        print(e)

    try:
        store_json = f'{settings.JSON_ROOT}/users/thank-you/{store.id}.json'
        os.remove(store_json)
    except Exception as e:
        print(e)

    try:
        store_json = f'{settings.JSON_ROOT}/users/privacy-policy/{store.id}.json'
        os.remove(store_json)
    except Exception as e:
        print(e)

pre_delete.connect(post_delete_store, Store)


## post delete images classes function

def store_image_pre_delete(sender, instance, **kwargs):
    try:
        os.remove(instance.path)
    except Exception as e:
        print(e)

## store logo
class StoreLogo(models.Model): # remove logos with store = None after 24 hours
    store = models.OneToOneField(Store, on_delete=models.CASCADE, null=True, blank=True, related_name='logo')
    url = models.TextField(null=True, blank=True)
    path = models.TextField(null=True, blank=True)
    size = models.PositiveIntegerField(null=True, blank=True)  # Size in bytes
    uploaded_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)

pre_delete.connect(store_image_pre_delete, StoreLogo)

## store favicon
class StoreFavicon(models.Model): # remove favicons with store = None after 24 hours
    store = models.OneToOneField(Store, on_delete=models.CASCADE, null=True, blank=True, related_name='favicon')
    url = models.TextField(null=True, blank=True)
    path = models.TextField(null=True, blank=True)
    size = models.PositiveIntegerField(null=True, blank=True)  # Size in bytes
    uploaded_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)

pre_delete.connect(store_image_pre_delete, StoreFavicon)

## Product
class Product(models.Model):
    id = models.PositiveBigIntegerField(primary_key=True)
    user_id = models.PositiveBigIntegerField(null=True, blank=True)
    store = models.ForeignKey(Store, on_delete=models.CASCADE, null=True, blank=True, related_name='products')
    active = models.BooleanField(default=True)

def post_delete_product(sender, instance, **kwargs):
    product = instance

    try:
        product_json = f'{settings.JSON_ROOT}/users/products/{product.id}.json'
        os.remove(product_json)

    except Exception as e:
        print(e)

    try:
        store_path = f'{settings.MEDIA_ROOT}/users/{product.user_id}/stores/{product.store.id}/products/{product.id}'
        shutil.rmtree(store_path)
    except Exception as e:
        print(e)

pre_delete.connect(post_delete_product, Product)


# Create your models here.
class ProductImage(models.Model):  # remove logos with is_in_use = false after 24 hours
    user_id = models.PositiveBigIntegerField(null=True, blank=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, blank=True)
    is_in_use = models.BooleanField(default=False)
    type =  models.TextField()
    url = models.TextField(null=True, blank=True)
    path = models.TextField(null=True, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    size = models.PositiveIntegerField(null=True, blank=True)  # Size in bytes

pre_delete.connect(store_image_pre_delete, ProductImage)

# Create your models here.
class Category(models.Model):
    user_id = models.PositiveBigIntegerField(null=True, blank=True)
    store = models.ForeignKey(Store, on_delete=models.CASCADE, null=True, blank=True, related_name='categories')
    id = models.PositiveBigIntegerField(primary_key=True)

class CetegoryImage(models.Model): # remove logos with category = None after 24 hours
    store = models.ForeignKey(Store, on_delete=models.SET_NULL, null=True, blank=True)
    category = models.OneToOneField(Category, on_delete=models.CASCADE, null=True, blank=True, related_name='image')
    url = models.TextField(null=True, blank=True)
    path = models.TextField(null=True, blank=True)
    size = models.PositiveIntegerField(null=True, blank=True)  # Size in bytes
    uploaded_at = models.DateTimeField(auto_now_add=True, null=True)

pre_delete.connect(store_image_pre_delete, CetegoryImage)

class StoreImage(models.Model):  # remove logos with is_in_use = false after 24 hours
    store = models.ForeignKey(Store, null=True, blank=True, on_delete=models.CASCADE)
    is_in_use = models.BooleanField(default=False)
    type =  models.TextField()
    url = models.TextField(null=True, blank=True)
    path = models.TextField(null=True, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    size = models.PositiveIntegerField(null=True, blank=True)  # Size in bytes

pre_delete.connect(store_image_pre_delete, StoreImage)
