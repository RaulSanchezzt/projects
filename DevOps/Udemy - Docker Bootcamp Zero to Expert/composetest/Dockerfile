FROM python:3.7-alpine

# CREATE A WORK DIRECTORY
WORKDIR /code

# ENV FOR FLASK
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# ADD PROGRAMS
RUN apk update
RUN apk add --no-cache gcc musl-dev linux-headers

# INSTALL DEPENDENCIES
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# EXPOSE A PORT
EXPOSE 5000

# COPY SOURCE CODE
COPY  . .

# RUN APP
CMD ["flask", "run"]