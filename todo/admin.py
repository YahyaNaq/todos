from django.contrib import admin
from todo.models import TodoCategory

# Register your models here.
@admin.register(TodoCategory)
class TodoCategoryAdminView(admin.ModelAdmin):
    list_display = ["name"]