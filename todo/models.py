from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    created_by = models.ForeignKey(User, on_delete=models.PROTECT, null=True, blank=True, related_name='%(class)s_created_by', editable=False)
    updated_by = models.ForeignKey(User, on_delete=models.PROTECT, null=True, blank=True, related_name='%(class)s_updated_by', editable=False)

    class Meta:
        abstract = True
        default_permissions = ('add', 'view', 'change', 'delete')

class TodoCategory(BaseModel):
    name = models.CharField(max_length=64)

class TodoStatus(BaseModel):
    name = models.CharField(max_length=64)

class Todo(BaseModel):
    title = models.CharField(max_length=64)
    description = models.TextField(max_length=2000, null=True, default=None)
    category = models.ForeignKey(TodoCategory, on_delete=models.PROTECT, null=False)
    due_date = models.DateField(null=True)
    is_completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(null=True, default=None)
    is_favourite = models.BooleanField(default=False)