from django.contrib.auth.models import User 
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8, style={'input_type':'password'}) #The password should only work with POST or PUT request (not retrievable or read by users)
    class Meta:
        model = User
        fields = ['username','email','password']

    def create(self,validated_data):
        # User.objects.create() ---> only creates a plain instance of the user and deosn't hash the password field 
        # User.objects.create_user() ---> creates the user and hashes the password field. (THIS IS MORE SECURE)

        # If lets say we had some required fields and not required fields we can specify the required fields like below :
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password'],
        )


        # But since we only have required fields we can write it like this instead :
        # user = User.objects.create_user(**validated_data)
        return user
