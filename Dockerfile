# Use the official Node.js image as a base
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if using npm) or yarn.lock (if using Yarn) to the working directory
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# # Build the Next.js app for production
# RUN yarn build

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["yarn", "dev"]
