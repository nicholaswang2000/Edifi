from database.MongoDatabase import MongoDatabase
from data.Educator import Educator
from data.Speaker import Speaker

MongoDatabase.init()

educator = Educator("Ben Smith", [1, 2, 3], ["science", "math"], "bensmith@test.org")
MongoDatabase.insert('educator', educator.convertToDocument())

speaker = Speaker("Sally Smith", "twitter", "content manager", "sallysmith@test.org")
MongoDatabase.insert('speaker', speaker.convertToDocument())