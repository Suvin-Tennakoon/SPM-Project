FROM node:16.16.0-alpine as builder

WORKDIR /usr/frontend

COPY package.json ./

RUN npm install --force

COPY . .

RUN npm run build


# 2nd stage
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=builder /usr/frontend/build .

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]