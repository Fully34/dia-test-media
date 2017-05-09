# Gaia Backend Test Node App

## Running Locally

Install app dependencies:

```
npm install
```

Start the app server:

```
npm run start
```

Once the server is running, test the singular included API by opening the following URL in your browser:

```
http://localhost:5000/terms/26681/longest-preview-media-url
```

### Changing the port

The port of the web application server can be changed by modifying the `PORT` variable in the `.env` file.

```
# By default, the port is 5000
PORT=8080
```

### Debugging

A script endpoint is available for starting the node app with node-inspect:

```
npm run debug
```

### Unit tests and linting

To run the included suite of unit tests:

```
npm run test
```

To check linting:

```
npm run lint
```

## Running with Docker

A Dockerfile has been provided for building a docker image for the app running on Node.js/boron. 

To build the image, run this command from the project working directory (where Dockerfile is located):

```
docker build -t gaia-backend-test:latest .
```

To run the image:

```
docker run -p <local port>:<node app port> -d gaia-backend-test:latest
```

The `<node app port>` will be routed through the `<local port>`. By default, the node app port is `5000`.

```
docker run -p 8081:5000 -d gaia-backend-test:latest
```

Once the docker image is mounted, you can test it by accessing the API endpoint:

```
http://localhost:8081/terms/26681/longest-preview-media-url
```
