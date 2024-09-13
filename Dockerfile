# Use the official Python image as the base image
FROM python:3.12-slim

# Set the working directory
WORKDIR /server

# Install the required Python packages
RUN pip install flask

# Copy the rest of the application code into the container
COPY . .

# Expose the port that your Flask app listens on
EXPOSE 5000

# Start the Flask app
CMD ["python", "api.py"]