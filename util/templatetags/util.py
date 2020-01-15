from django import template
from getenv import env

register = template.Library()


@register.simple_tag
def menu(user):
    # if not user.is_authenticated:
    #     return []

    menu = []

    return menu


@register.simple_tag(name="getenv")
def getenv(envvar, default=''):
    return env(envvar) or default

@register.filter
def isstr(value):
    return isinstance(value, str)


@register.filter
def get_item(dictionary, key):
    return dictionary.get(key)
