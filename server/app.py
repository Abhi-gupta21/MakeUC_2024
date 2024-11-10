from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Integer, String
from flask_cors import CORS

app = Flask(__name__)

# Configure the SQLite database, relative to the app instance folder
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///user-credentials.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False  # Optional: to disable unnecessary warnings

# Initialize the SQLAlchemy extension
db = SQLAlchemy(app)

# Define the User model
class User(db.Model):  # Corrected: db.Model, not db.model
    __tablename__ = "user"  # Specify the table name

    id = db.Column(Integer, primary_key=True)  # Corrected syntax for columns
    name = db.Column(String(100), nullable=False)
    email = db.Column(String(100), unique=True, nullable=False)
    password = db.Column(String(100), nullable=False)

    def __repr__(self):
        return f"<User {self.name}>"

# Create the database tables
# with app.app_context():
#     db.create_all()

# Add a new user to the database
# with app.app_context():
#     new_user = User(name="John Doe", email="j@j.com", password="password")
#     db.session.add(new_user)
#     db.session.commit()

@app.route('/api/submit', methods=['POST'])
def submit_form():
    data = request.get_json()  # Get the JSON data from the request
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    # Create a new user and add to the database
    new_user = User(name=name, email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User added successfully!"}), 201


CORS(app)

if __name__ == '__main__':
    app.run(debug=True)