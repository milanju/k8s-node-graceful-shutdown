## Node in k8s deployment with graceful shutdown concept

build: `docker build . -t k8snode:test`
deploy: `kubectl apply -f deployment.yml`

To trigger new deployment, we need to edit spec.template (deployment.yml), for example by changing the version label or specifying new image tag

After editing spec.template: `kubectl apply -f deployment.yml`
Inspect running pods: `kubectl get pod`

We should see the previous version still running, until it reaches the grace period configured (300s) or it kills itself (will happen after 60s, as set in index.js)

We can confirm the shutdown within the node app being initiated by attaching to the running pod & doing a new deploy after (docker ps > get id > docker attach <id>)

We can have many previous versions gracefully shutdown concurrently