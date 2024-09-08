from django.urls import path
from . import views


urlpatterns = [
    path('', views.render_store),
    path('products/<slug>/<product_id>', views.render_product),
    path('products/<slug>/<product_id>/landing-page', views.render_product),
    path('products/<slug>/<product_id>/gallery', views.render_product),
    path('<path:path>/', views.catch_remaining_path)
]