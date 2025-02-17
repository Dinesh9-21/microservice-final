# 1️⃣ Base Image - Use Node.js for installing dependencies
FROM node:20 as base

WORKDIR /app

# Copy package.json and package-lock.json to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install

# 2️⃣ Build Stage - Use the same Node.js image to run Vite
FROM node:20-slim as vite

WORKDIR /app

# Copy node_modules from the previous stage to avoid reinstalling
COPY --from=base /app/node_modules /app/node_modules

# Copy the rest of the application code
COPY . .

# Expose the default Vite development port
EXPOSE 5173

# Start the development server with host binding for external access
CMD ["npm", "run", "dev", "--", "--host"]
