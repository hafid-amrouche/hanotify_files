"""
URL configuration for hanotify_files project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings



urlpatterns = [
    path('', views.home),
    path('admin/', admin.site.urls),
    # used for seller
    path('get-store', views.get_store),
    path('get-product', views.get_product),
    
    path('upload-rich-text-image', views.upload_rich_text_image ),
    path('upload-variant-image', views.upload_variant_image ),
    path('upload-gallery-image', views.upload_gellery_image ),
    path('upload-category-image', views.upload_category_image ),
    path('delete-image', views.delete_image ),
    path('delete-all-gallery-images', views.delete_all_gallery_images),
    path('make-product-directory', views.make_product_directory),
    path('resize', views.resized_image),
    path('save-product', views.save_product),
    path('save-galley-images', views.save_gallery_images),
    path('save-category', views.save_category),
    path('make-user-directory', views.make_user_directory),
    path('delete-product', views.delete_product),
    path('toggle-product-state', views.toggle_product_state),
    path('get-product-for-edit', views.get_product_for_edit),
    path('upload-store-logo', views.upload_store_logo),
    path('save-store', views.save_store),
    path('toggle-store-state', views.toggle_store_state),
    path('get-store-for-edit', views.get_store_for_edit),
    path('update-fb-pixel', views.update_fb_pixels),
    path('update-tiktok-pixels', views.update_tiktok_pixels),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



