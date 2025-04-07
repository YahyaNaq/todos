from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from todo.models import Todo, TodoCategory
from todo.serializers import TodoSerializer, TodoCategorySerializer

class TodoViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class TodoCategoryViewSet(ModelViewSet):
    queryset = TodoCategory.objects.all()
    serializer_class = TodoCategorySerializer