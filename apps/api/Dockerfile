# Use the official Node.js 18 image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose port 8080 for the Node.js application
EXPOSE 8080

# Run the web service on container startup
CMD ["npm", "run", "dev"]