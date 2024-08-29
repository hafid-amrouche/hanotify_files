from django.urls import path, re_path
from . import views


urlpatterns = [
    path('', views.render_store),
    path('products/<slug>/<product_id>', views.render_product),
    re_path(r'^categories/(?P<path>.*)$', views.render_store),
]