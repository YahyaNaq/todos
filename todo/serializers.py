from rest_framework import serializers
from todo.models import Todo, TodoCategory

class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo
        fields = ["id", "title", "description", "category", "is_completed"]

class TodoCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoCategory
        fields = ['id', 'name']
