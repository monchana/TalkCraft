from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from debate import views
from django.conf.urls import url

urlpatterns = [
    #Need to make write view page
    #path('main/', views.DebateMainView.as_view()),
    path('write/', views.DebateWrite.as_view()),
    path('detail/<int:pk>/', views.DebateDetail.as_view()),
    path('test/', views.test),
    path('comment/', views.UserCommentWrite.as_view()),
    path('comment/<int:pk>/', views.UserCommentDetail.as_view()),
]

urlpatterns=format_suffix_patterns(urlpatterns)

from rest_framework.authtoken import views
urlpatterns += [
    url(r'^api-token-auth/', views.obtain_auth_token)
]
