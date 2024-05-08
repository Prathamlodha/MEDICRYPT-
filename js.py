import pymongo
from datetime import datetime

# Connect to MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["medical_website"]

# Define collections
users_col = db["users"]
patients_col = db["patients"]
doctors_col = db["doctors"]
appointments_col = db["appointments"]
medical_records_col = db["medical_records"]

# Insert sample data
def insert_sample_data():
    # Insert users
    user1_id = users_col.insert_one({"username": "john_doe", "email": "john@example.com", "password": "hashed_password", "role": "patient"}).inserted_id
    user2_id = users_col.insert_one({"username": "emily_smith", "email": "emily@example.com", "password": "hashed_password", "role": "doctor"}).inserted_id

    # Insert patients
    patients_col.insert_one({
        "name": "John Doe",
        "dob": datetime(1980, 1, 1),
        "gender": "Male",
        "contact": "+1234567890",
        "medical_history": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        "user_id": user1_id
    })

    # Insert doctors
    doctors_col.insert_one({
        "name": "Dr. Emily Smith",
        "specialization": "Cardiologist",
        "contact": "+9876543210",
        "availability": ["Monday", "Wednesday", "Friday"],
        "user_id": user2_id
    })

    # Insert appointments
    appointments_col.insert_one({
        "patient_id": patients_col.find_one({"user_id": user1_id})["_id"],
        "doctor_id": doctors_col.find_one({"user_id": user2_id})["_id"],
        "appointment_date": datetime(2024, 5, 4, 10, 0, 0),
        "reason": "Follow-up checkup",
        "status": "Confirmed"
    })

    # Insert medical records
    medical_records_col.insert_one({
        "patient_id": patients_col.find_one({"user_id": user1_id})["_id"],
        "doctor_id": doctors_col.find_one({"user_id": user2_id})["_id"],
        "diagnosis": "Hypertension",
        "treatment_plan": "Prescribed medication and lifestyle changes",
        "prescription": "Medication X, 1 tablet daily for 30 days",
        "lab_results": "Blood pressure: 140/90 mmHg"
    })

# Query sample data
def query_sample_data():
    print("Users:")
    for user in users_col.find():
        print(user)

    print("\nPatients:")
    for patient in patients_col.find():
        print(patient)

    print("\nDoctors:")
    for doctor in doctors_col.find():
        print(doctor)

    print("\nAppointments:")
    for appointment in appointments_col.find():
        print(appointment)

    print("\nMedical Records:")
    for record in medical_records_col.find():
        print(record)

# Delete sample data
def delete_sample_data():
    users_col.delete_many({})
    patients_col.delete_many({})
    doctors_col.delete_many({})
    appointments_col.delete_many({})
    medical_records_col.delete_many({})

# Insert sample data
insert_sample_data()

# Query sample data
query_sample_data()

# Delete sample data
# delete_sample_data()
