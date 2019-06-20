from django.shortcuts import render
from rest_framework import generics, permissions
from debate.permissions import UserOnlyAccess #, IsOwnerOrReadOnly, IsOwner
from django.contrib.auth.models import User
from login.serializers import UserSerializerWithToken
from django.template import Context
from django.template.loader import get_template
from debate.models import Debate, DebateUserComment
from debate.serializers import DebateSerializer, DebateUserCommentSerializer
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
import json
'''
class DebateMainView(generics.ListCreateAPIView):
    
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    #View all Debate : or just show something else?
    queryset = Debate.objects.all()
    serializer_class = DebateSerializer

    #Is this correct format? Not able to create in main view?

    def show_list(self, request):
        template = get_template('DebateMainList.html')
        context = Context({'debatelist' : Debate.objects.all()})
        return HttpResponse(template.render(context))
'''
class DebateDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (
            permissions.IsAuthenticatedOrReadOnly,
           # IsOwnerOrReadOnly
        )
    queryset = Debate.objects.all()
    serializer_class = DebateSerializer

    def get(self, request, *args, **kwargs):
        debate= self.queryset.get(id = kwargs['pk'])

        serializer = DebateSerializer(debate)
        return Response(serializer.data)

#    def post_detail(self, serializer):
#        template = get_template('DebateDetail.html')
#        context = Context({'User' : User.username})
#        return HttpResponse(template.render(context))

class DebateWrite(generics.ListCreateAPIView):
    queryset = Debate.objects.all()
    permission_classes = (
            permissions.IsAuthenticatedOrReadOnly,
    )
    serializer_class = DebateSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class DebateUserCommentDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (
            permissions.IsAuthenticatedOrReadOnly,
            #IsOwnerOrReadOnly
    )
    queryset = DebateUserComment.objects.all()
    serializer_class = DebateUserCommentSerializer
    def get(self, request, *args, **kwargs):
        comment= self.queryset.get(id = kwargs['pk'])

        serializer = DebateUserCommentSerializer(comment)
        return Response(serializer.data)


class DebateUserCommentWrite(generics.ListCreateAPIView):
    queryset = DebateUserComment.objects.all()
    permission_classes = (
        permissions.AllowAny,
       # IsOwnerOrReadOnly
    )

    serializer_class = DebateUserCommentSerializer

    def perfrom_create(self, serializer):
        serializer.save(user=self.request.user)

@api_view(['GET'])
@permission_classes((permissions.IsAuthenticated, ))
def test(request):
    return JsonResponse({'secret': 42})
