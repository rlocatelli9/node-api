FROM node:12
LABEL version="1.0"
LABEL Author="Robson Locatelli" 
ENV NODE_ENV=development
COPY . /var/www

WORKDIR /var/www

# Install dependencies

#RUN npm install

# Expose the app port
EXPOSE "3000:3000"
EXPOSE "8080:8080"

CMD ["/bin/bash"]
