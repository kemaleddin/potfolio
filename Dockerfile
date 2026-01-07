# Build stage
FROM node:20-alpine AS build
LABEL version="1.1.0"
LABEL maintainer="kemalettin.sargin@gmail.com"
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Runtime stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
