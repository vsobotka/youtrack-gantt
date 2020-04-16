from rest_framework.decorators import api_view
from rest_framework.response import Response
from youtrack.connection import Connection as YouTrack
from django.conf import settings
import json

# Create your views here.
@api_view(['GET'])
def issues(request):
    yt = YouTrack(settings.YOUTRACK_BASE_URL,
                  token=settings.YOUTRACK_TOKEN)
    issue = yt.getIssue("2-119920")
    return Response(issue.to_dict())

@api_view(['GET'])
def current_release(request):
    yt = YouTrack(settings.YOUTRACK_BASE_URL,
                  token=settings.YOUTRACK_TOKEN)
    result = yt.getAllIssues(filter='#{Scaler Current Release Plan}', after="0", max="60", withFields=())
    results = json.dumps(result, default=lambda x: x.to_dict())
    return Response(json.loads(results))
