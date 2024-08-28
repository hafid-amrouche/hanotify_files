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
from django.urls import path, re_path
from . import views
from django.conf.urls.static import static
from django.conf import settings



urlpatterns = [
    ## Store urls
    path('', views.render_store),
    path('products/<slug>/<product_id>', views.render_product),
    re_path(r'^categories/(?P<path>.*)$', views.render_store),
    
    ## files urls
    path('files/admin/', admin.site.urls),
    path('files/upload-rich-text-image', views.upload_rich_text_image ),
    path('files/upload-variant-image', views.upload_variant_image ),
    path('files/upload-gallery-image', views.upload_gellery_image ),
    path('files/upload-category-image', views.upload_category_image ),
    path('files/delete-image', views.delete_image ),
    path('files/delete-all-gallery-images', views.delete_all_gallery_images),
    path('files/make-product-directory', views.make_product_directory),
    path('files/resize', views.resized_image),
    path('files/save-product', views.save_product),
    path('files/save-galley-images', views.save_gallery_images),
    path('files/save-category', views.save_category),
    path('files/make-user-directory', views.make_user_directory),
    path('files/delete-product', views.delete_product),
    path('files/toggle-product-state', views.toggle_product_state),
    path('files/get-product', views.get_product),
    path('files/get-product-for-edit', views.get_product_for_edit),
    path('files/upload-store-logo', views.upload_store_logo),
    path('files/save-store', views.save_store),
    path('files/toggle-store-state', views.toggle_store_state),
    path('files/get-store', views.get_store),
    path('files/get-store-for-edit', views.get_store_for_edit),
    path('files/save-fb-pixel', views.save_fb_pixel),
    path('files/delete-fb-pixel',views.delete_fb_pixel ),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
