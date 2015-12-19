from flask import Flask, render_template, request
from flask_mail import Mail, Message

# sys.dont_write_bytecode = True
application = Flask(__name__)
mail = Mail(application)
application.config.update(
    DEBUG=True,
    #EMAIL SETTINGS
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=465,
    MAIL_USE_SSL=True,
    MAIL_USERNAME = 'savinay.90@gmail.com',
    MAIL_PASSWORD = 'goldilock3592'
    )
mail=Mail(application)

@application.route("/sendEmail", methods=['POST'])
def index():

    email_id = request.form.get('email')
    name = request.form.get('name')
    phone = request.form.get('phone')
    message = request.form.get('message')
    print email_id, name, phone, message
    msg = Message(
              'Got a message from your website',
           sender='savinay.90@gmail.com',
           recipients=
               ['savinay.90@gmail.com'])
    msg.body = message  + " The sender of the email is : " + email_id + ". His name and phone no are : " + name + ", " + phone
    print msg
    mail.send(msg)
    return "Sent"

@application.route('/')
def hello_savinay():
    print "inside hello"
    return render_template('index.html')

# @application.route('/sendEmail', methods=['POST'])
# def send_email():
#     print "sending email: ", request.method
#     if request.method == 'POST':
#         email_id = request.form.get('email')
#         name = request.form.get('name')
#         phone = request.form.get('phone')
#         message = request.form.get('message')
#         msg = Message("Hello",sender="from@example.com",recipients=["savinay.90@gmail.com"])
#         msg.body = "testing"
#         print msg
#         mail.send(msg)
#         print "mail sent"
#         return json.dumps({'success':True}), 200, {'ContentType':'applicationlication/json'}



#if __name__ == '__main__':
#    application.run(host='0.0.0.0', port = 80)
