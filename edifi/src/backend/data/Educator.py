class Educator:
    def __init__(self, name, grades, subjects, email):
        self.name = name
        self.grades = grades
        self.subjects = subjects
        self.email = email
        
    def convertToDocument(self):
        educatorDocument = {
          "name": self.name,
          "grades": self.grades,
          "subjects": self.subjects,
          "email": self.email
        }
        return educatorDocument