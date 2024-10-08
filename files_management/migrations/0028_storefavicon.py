# Generated by Django 5.0.7 on 2024-09-12 08:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('files_management', '0027_remove_store_image_path_remove_store_image_url'),
    ]

    operations = [
        migrations.CreateModel(
            name='StoreFavicon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.TextField(blank=True, null=True)),
                ('path', models.TextField(blank=True, null=True)),
                ('size', models.PositiveIntegerField(blank=True, null=True)),
                ('uploaded_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('store', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='favicon', to='files_management.store')),
            ],
        ),
    ]
