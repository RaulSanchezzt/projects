# Base Image
FROM node:16.15.0

# Working Directory (App)
WORKDIR /usr/src/app
# Copy files from this directory to the container
COPY . .
# Install node dependencies
RUN npm install package.json
RUN npm install -g truffle@5.5.9

# Expose a port of the container
EXPOSE 3000

# Exec DApp
ENTRYPOINT [ "sh" ]