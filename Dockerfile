FROM node:14 AS builder
LABEL maintainer="kingofcramers.dev@gmail.com"
WORKDIR /app

COPY package*.json .
RUN npm install

COPY tsconfig.json .eslintrc.js .stylelintrc.json .env.production .
COPY src ./src
COPY public ./public
RUN npm run prod:build

###########
## NGINX ##
###########

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

# Copy built assets from builder stage into html folder for Nginx to serve
COPY --from=builder /app/build .

# Copy configuration so that /graphql endpoint works
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose app on port 80...
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
