# Docker compose example

This is a very simple app that shows how to use docker and docker compose.

## Artifacts

* customer-service: A nodejs service that exposes a customer API. You can GET a predefined list of customers. Runs on port 3001.
* product-service: A nodejs service that exposes a product API. You can GET a predefined list of products. Runs on port 3002.
* ui: An angular project that makes requests on both customer and product service and displays the list on a simple html file. This will be deployed on an Apache Server (httpd) running on port 80.

CORS is enabled on both customer and product API.

## How to use it

Just run the following command:

docker-compose build && docker-compose up

Then open your browser on http://localhost