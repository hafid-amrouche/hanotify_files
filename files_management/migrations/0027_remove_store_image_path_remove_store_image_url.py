# Generated by Django 5.0.7 on 2024-08-29 20:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('files_management', '0026_rename_text_id_store_domain'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='store',
            name='image_path',
        ),
        migrations.RemoveField(
            model_name='store',
            name='image_url',
        ),
    ]