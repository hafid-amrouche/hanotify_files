from django_hosts import patterns, host
from django.conf import settings

host_patterns = patterns('',
    host(r'^files\..*', settings.ROOT_URLCONF, name='files'),
    host(r'^[^.]+', 'hanotify_files.hostsconf.urls', name='wildcard'),  
)