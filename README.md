# kube-api-versioning
## Usage
1. Replace in the ingress file `<GARDENER-CLUSTER>.<GARDENER-PROJECT>` accordingly and deploy the yaml files.
```
kubectl apply -f yaml
```
2. Call the following URLs and you will see that the response is different.
- api.ingress.`<GARDENER-CLUSTER>.<GARDENER-PROJECT>`.shoot.canary.k8s-hana.ondemand.com/api/v1/user
- api.ingress.`<GARDENER-CLUSTER>.<GARDENER-PROJECT>`.shoot.canary.k8s-hana.ondemand.com/api/v2/user
