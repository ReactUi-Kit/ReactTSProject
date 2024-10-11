# Use a Node.js image as the base
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the Storybook default port
EXPOSE 6006

# Start Storybook
CMD ["npm", "run", "storybook:no-open"]
