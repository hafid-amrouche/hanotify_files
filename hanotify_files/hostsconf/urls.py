from django.urls import path
from . import views


urlpatterns = [
    path('products/<slug>/<product_id>', views.render_product),
    path('', views.render_store),
]