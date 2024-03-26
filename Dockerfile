# Use the official Node.js image as a parent image
FROM node:21.6.1

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ./ ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the working directory



# Expose the port that the app runs on
EXPOSE 8018

# Run the server
CMD ["npm", "run", "storybook"]
