# develop stage
FROM node:14.17.0-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .

# build stage
FROM develop-stage as build-stage
RUN yarn build

# production stage
FROM nginx:1.15.7-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html/dist

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/app.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
