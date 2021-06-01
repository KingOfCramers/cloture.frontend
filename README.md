# 🏛️ ClotureFrontend

This is the frontend for Cloture.

## Development

1. ```
    cat << EOF > .development.env
      REACT_APP_API=http://localhost:3005
      REACT_APP_MIN_DATE=1980-06-19T04:00:00.000+00:00
    EOF
   ```
2. `npm install`
3. `npm run dev:start`

## Production

#### Build Docker Image

1. ```
    cat << EOF > .production.env
      REACT_APP_GOOGLE_ANALYTICS=XXX
      REACT_APP_API=http://location-of-api-server:port
      REACT_APP_MIN_DATE=1980-06-19T04:00:00.000+00:00
    EOF
   ```
1. `docker build -t your_docker_name/cloture_frontend:latest .`
1. `docker push your_docker_name/cloture_frontend:latest`

#### Run Docker Container In Production

1. `ssh -i ~/.ssh/your_public_key user@ip`
2. `docker run -dit -p 80:80 your_docker_name/cloture_frontend:latest`
