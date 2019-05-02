from django.shortcuts import render
from django.http import HttpResponseRedirect
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, permissions, status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes

from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from login.serializers import UserSerializer, UserSerializerWithToken
from login.permissions import IsOwner
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import login
import json

@api_view(['GET'])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

class UserList(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDetail(generics.RetrieveAPIView):
    permission_classes = (IsOwner,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

@api_view(['GET'])
@permission_classes((permissions.IsAuthenticated, ))
def test(request):
    print(request.user)
    return JsonResponse({'secret': 42})

@csrf_exempt
def login_user(request):
    body = json.loads(request.body)
    username = body['username']
    pwd = body['password']

    try: 
        user = User.objects.get(username=username)
        
        if not user.check_password(pwd):
            return HttpResponse(status=404)

        login(request, user)
        token, _ = Token.objects.get_or_create(user=user)

        return JsonResponse({'token': token.key, 'user': user.id})
    except Exception as e:
        return HttpResponse(status=404)
