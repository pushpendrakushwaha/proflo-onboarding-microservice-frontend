FROM  node:12.9.0 as node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/angProFlo /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/cureassist.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
