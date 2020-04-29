from django.contrib import admin
from .models import Article, Animal


class ArticleAdmin(admin.ModelAdmin):
    list_display = ['title']

class AnimalAdmin(admin.ModelAdmin):
    list_display = ['name']

admin.site.register(Article, ArticleAdmin)
admin.site.register(Animal, AnimalAdmin)
