from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class ProtectedView(APIView):
    permission_classes=[IsAuthenticated]

    def get(self,request):
        reponse = {
            'status':'Request was permitted'
        }
        return Response(reponse, status=status.HTTP_200_OK)