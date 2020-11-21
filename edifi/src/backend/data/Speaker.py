class Speaker:
    def __init__(self, name, company, jobTitle, email):
        self.name = name
        self.company = company
        self.jobTitle = jobTitle
        self.email = email
        
    def convertToDocument(self):
        speakerDocument = {
          "name": self.name,
          "company": self.company,
          "job title": self.jobTitle,
          "email": self.email
        }
        return speakerDocument