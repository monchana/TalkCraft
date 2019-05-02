from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from login import views
from django.conf.urls import url

urlpatterns = [
    path('current_user/', views.current_user),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    path('users/login/', views.login_user),
    path('test/', views.test),
]

urlpatterns=format_suffix_patterns(urlpatterns)

from rest_framework.authtoken import views
urlpatterns += [
    url(r'^api-token-auth/', views.obtain_auth_token)
]
