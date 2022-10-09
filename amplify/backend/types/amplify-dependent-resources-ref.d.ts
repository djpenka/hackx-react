export type AmplifyDependentResourcesAttributes = {
    "storage": {
        "Students": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        }
    },
    "function": {
        "students": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "students": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}