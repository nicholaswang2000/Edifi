from pymongo import MongoClient

class MongoDatabase:
    URI = 'mongodb+srv://EdifiUser:mdb@edifi.v0mq7.mongodb.net/Edifi?retryWrites=true&w=majority'
    DATABASE = None
    
    @staticmethod
    def init():
        client = MongoClient(MongoDatabase.URI)
        MongoDatabase.DATABASE = client.edifi #creates new db named edifi
        
    @staticmethod
    def insert(collection, data):
        MongoDatabase.DATABASE[collection].insert(data)
        
    @staticmethod
    def find(collection, query):
        return MongoDatabase.DATABASE[collection].find(query)
        
    @staticmethod
    def find_one(collection, query):
        return MongoDatabase.DATABASE[collection].find_one(query)

    
        
    