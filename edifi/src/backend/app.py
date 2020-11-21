from database.MongoDatabase import MongoDatabase
from data.Educator import Educator

MongoDatabase.init()

educator = Educator("Ben Smith", [1, 2, 3], ["science", "math"], "bensmith@test.org")

MongoDatabase.insert('educator', educator.convertToDocument())

