from django.shortcuts import render
from rest_framework import generics, permissions
from yesorno.permissions import UserOnlyAccess, IsOwnerOrReadOnly
from django.contrib.auth.models import User
from login.serializers import UserSerializerWithToken
from django.template import Context
from django.template.loader import get_template
from yesorno.models import YesOrNo, UserComment
from yesorno.serializers import YesOrNoSerializer, UserCommentSerializer
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view, permission_classes
import json

class YesOrNoMainView(generics.ListCreateAPIView):
    
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    #View all YesOrNo : or just show something else?
    queryset = YesOrNo.objects.all()
    serializer_class = YesOrNoSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def show_list(self, request):
        template = get_template('YesOrNoMainList.html')
        context = Context({'yesornolist' : YesOrNo.objects.all()})
        return HttpResponse(template.render(context))

class YesOrNoDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (
            permissions.IsAuthenticatedOrReadOnly,
            IsOwnerOrReadOnly
        )
    queryset = YesOrNo.objects.all()
    serializer_class = YesOrNoSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def post_detail(self, serializer):
        template = get_template('YesOrNoDetail.html')
        context = Context({'User' : User.username})
        return HttpResponse(template.render(context))


class UserCommentWrite(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly
    )
@api_view(['GET'])
@permission_classes((permissions.IsAuthenticated, ))
def test(request):
    return JsonResponse({'secret': 42})
