# Use the official Node.js 20 image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

COPY ../../packages/db ../../packages/db

# Install dependencies
RUN npm install --legacy-peer-deps

# Generate Prisma client (if needed)
RUN npx prisma generate

# Copy the rest of your application code
COPY . .

# Copy local package @repo/db (assuming it's in the packages/db directory)


# Build TypeScript code (adjust this as per your TypeScript setup)
RUN npm run build

# Expose port 8080 for the Node.js application
EXPOSE 8080

# Run the web service on container startup
CMD ["npm", "start"]