from django.contrib import admin
from django.urls import path, re_path
from candidates import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/candidates/$', views.candidates_list),
    re_path(r'^api/candidates/(?P<pk>[0-9]+)/$', views.candidates_detail),
]
