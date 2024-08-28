from django.db import models
from django.db.models.signals import pre_delete
import os

class Store(models.Model):
    user_id =  models.BigIntegerField()
    id = models.PositiveBigIntegerField(primary_key=True)
    domain = models.TextField(null=True, blank=True)
    active = models.BooleanField(default=True)
    image_url = models.TextField(null=True, blank=True)
    image_path = models.TextField(null=True, blank=True)

class StoreLogo(models.Model): # remove logos with store = None after 24 hours
    store = models.OneToOneField(Store, on_delete=models.CASCADE, null=True, blank=True, related_name='logo')
    url = models.TextField(null=True, blank=True)
    path = models.TextField(null=True, blank=True)
    size = models.PositiveIntegerField(null=True, blank=True)  # Size in bytes
    uploaded_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)

def store_image_pre_delete(sender, instance, **kwargs):
    try:
        os.remove(instance.path)
    except Exception as e:
        print(e)

pre_delete.connect(store_image_pre_delete, StoreLogo)



class Product(models.Model):
    id = models.PositiveBigIntegerField(primary_key=True)
    user_id = models.PositiveBigIntegerField(null=True, blank=True)
    store = models.ForeignKey(Store, on_delete=models.CASCADE, null=True, blank=True)
    active = models.BooleanField(default=True)


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

def image_pre_delete(sender, instance, **kwargs):
    try:
        os.remove(instance.path)
    except Exception as e:
        print(e)

pre_delete.connect(image_pre_delete, ProductImage)

# Create your models here.
class Category(models.Model):
    user_id = models.PositiveBigIntegerField(null=True, blank=True)
    store = models.ForeignKey(Store, on_delete=models.CASCADE, null=True, blank=True)
    id = models.PositiveBigIntegerField(primary_key=True)
    
   

class CetegoryImage(models.Model): # remove logos with category = None after 24 hours
    store = models.ForeignKey(Store, on_delete=models.SET_NULL, null=True, blank=True)
    category = models.OneToOneField(Category, on_delete=models.CASCADE, null=True, blank=True)
    url = models.TextField(null=True, blank=True)
    path = models.TextField(null=True, blank=True)
    size = models.PositiveIntegerField(null=True, blank=True)  # Size in bytes
    uploaded_at = models.DateTimeField(auto_now_add=True, null=True)


def category_image_pre_delete(sender, instance, **kwargs):
    try:
        os.remove(instance.path)
    except Exception as e:
        print(e)

pre_delete.connect(image_pre_delete, CetegoryImage)