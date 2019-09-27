from rest_framework import viewsets
from .serializers import IssueSerializer, UserSerializer
from .models import Issue, User

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class IssueViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer
