from .views import  RegisterView, LoginAPIView, LogoutAPIView
from django.urls import path
from rest_framework_simplejwt.views import (TokenRefreshView,)

app_name='accounts'

urlpatterns = [
    path('register/', RegisterView.as_view(), name="register"),
    path('login/', LoginAPIView.as_view(), name="login"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', LogoutAPIView.as_view(), name="logout"),

]
