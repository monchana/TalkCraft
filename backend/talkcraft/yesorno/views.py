from django.shortcuts import render
from rest_framework import generics, permissions
from yesorno.permissions import UserOnlyAccess, IsOwnerOrReadOnly, IsOwner
from django.contrib.auth.models import User
from login.serializers import UserSerializerWithToken
from django.template import Context
from django.template.loader import get_template
from yesorno.models import YesOrNo, UserComment
from yesorno.serializers import YesOrNoSerializer, UserCommentSerializer
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
import json
'''
class YesOrNoMainView(generics.ListCreateAPIView):
    
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    #View all YesOrNo : or just show something else?
    queryset = YesOrNo.objects.all()
    serializer_class = YesOrNoSerializer

    #Is this correct format? Not able to create in main view?

    def show_list(self, request):
        template = get_template('YesOrNoMainList.html')
        context = Context({'yesornolist' : YesOrNo.objects.all()})
        return HttpResponse(template.render(context))
'''
class YesOrNoDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (
            permissions.IsAuthenticatedOrReadOnly,
            IsOwnerOrReadOnly
        )
    queryset = YesOrNo.objects.all()
    serializer_class = YesOrNoSerializer

    def get(self, request, *args, **kwargs):
        yesorno= self.queryset.get(id = kwargs['pk'])

        serializer = YesOrNoSerializer(yesorno)
        return Response(serializer.data)

#    def post_detail(self, serializer):
#        template = get_template('YesOrNoDetail.html')
#        context = Context({'User' : User.username})
#        return HttpResponse(template.render(context))

class YesOrNoWrite(generics.ListCreateAPIView):
    queryset = YesOrNo.objects.all()
    permission_classes = (
            permissions.IsAuthenticatedOrReadOnly,
    )
    serializer_class = YesOrNoSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class UserCommentDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (
            permissions.IsAuthenticatedOrReadOnly,
            IsOwnerOrReadOnly
    )
    queryset = UserComment.objects.all()
    serializer_class = UserCommentSerializer


class UserCommentWrite(generics.ListCreateAPIView):
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly
    )

    serializer_class = UserCommentSerializer

    def perfrom_create(self, serializer):
        serializer.save(user=self.request.author)

@api_view(['GET'])
@permission_classes((permissions.IsAuthenticated, ))
def test(request):
    return JsonResponse({'secret': 42})
