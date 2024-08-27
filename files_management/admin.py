from django.contrib import admin
from .models import ProductImage, Product, Store, Category, CetegoryImage, StoreLogo
# Register your models here.

admin.site.register(ProductImage)
admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Store)
admin.site.register(CetegoryImage)
admin.site.register(StoreLogo)


