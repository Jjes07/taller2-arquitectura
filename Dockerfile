# Use official Node.js image
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Expose port
EXPOSE 80

# Start the app
CMD ["node", "index.js"]