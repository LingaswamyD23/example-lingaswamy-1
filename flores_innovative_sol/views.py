from email import message
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.core.mail import send_mail


# Create your views here.
def index(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        number = request.POST.get('tel')
        company = request.POST.get('company_name')
        message = request.POST.get('message')

        data = {
            'name':name,
            'email':email,
            'subject':subject,
            'number':number,
            'company':company,
            'message':message
        }
        message = '''
        
        Name :{}
        Phone number :{}
        Company/student :{}
        New message :{}
        From :{}
        '''.format(data['name'],data['number'],data['company'],data['message'],data['email'])
        send_mail(data['subject'],message,'',['support@floresinnovatives.com'])
        

    return render(request, 'index.html',{})

