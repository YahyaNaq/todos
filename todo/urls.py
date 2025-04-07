from django.urls import path, include
from rest_framework.routers import DefaultRouter
from todo.views import TodoViewSet, TodoCategoryViewSet

router = DefaultRouter()
router.register(r'todos', TodoViewSet)
router.register(r'todo-categories', TodoCategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

print(router.urls)  