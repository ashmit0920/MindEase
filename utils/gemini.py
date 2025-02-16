from google import genai
import os
from dotenv import load_dotenv

load_dotenv()
GEMINI_KEY = os.getenv("EXPO_PUBLIC_GEMINI_KEY")

prompt = """I want to make an efficient study schedule spread across 3 hours, from 5 PM to 8 PM. Generate a Google Calendar event for it in JSON format.

Use this sample JSON schema for each event:

Event = {
    'summary': 'Meeting with Capstone Team',
    'location': 'Google Meet',
    'description': 'Discuss project updates.',
    'start': {'dateTime': '2025-02-15T10:00:00-07:00', 'timeZone': 'Asia/Kolkata'},
    'end': {'dateTime': '2025-02-15T11:00:00-07:00', 'timeZone': 'Asia/Kolkata'},
    'attendees': [{'email': 'client@example.com'}],
    'reminders': {'useDefault': True},
}"""
# Return: list[Recipe]

client = genai.Client(api_key=GEMINI_KEY)
response = client.models.generate_content(
    model='gemini-2.0-flash',
    contents=prompt,
)

event = response.text
print(event)
