from django.urls import path
from . import views


urlpatterns = [
    path('products/<slug>/<product_id>', views.render_product),
    path('products/<slug>/<product_id>/landing-page', views.render_product),
    path('products/<slug>/<product_id>/gallery', views.render_product),
    path('', views.render_store),
]