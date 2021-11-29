    
from google.cloud import firestore
import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("src\service-account-file.json")
firebase_admin.initialize_app(cred)

db = firestore.Client(project='trash-app-3bcd8')

doc_ref = db.collection(u'users').document(u'alovelace')
doc_ref.set({
    u'firstName': u'Ada',
    u'last': u'Lovelace',
    u'born': 1815
})
