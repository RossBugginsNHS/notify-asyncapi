
    const schema = {
  "asyncapi": "3.0.0",
  "info": {
    "title": "NHS Notify Template Management",
    "version": "0.0.1",
    "description": "Template Management for NHS Notify\n",
    "contact": {
      "name": "Ross Buggins",
      "email": "ross.buggins@nhs.net"
    },
    "tags": [
      {
        "name": "Templates",
        "description": "Template Management"
      }
    ],
    "externalDocs": {
      "description": "Additional docs",
      "url": "https://nhsdigital.github.io/nhs-notify/"
    }
  },
  "servers": {
    "production": {
      "protocol": "https",
      "host": "api.notify.com",
      "description": "server description"
    }
  },
  "defaultContentType": "application/json",
  "operations": {
    "operation": {
      "title": "Template Created",
      "action": "receive",
      "channel": {
        "title": "raaa",
        "messages": {
          "TemplatedCreated": {
            "name": "TemplatedCreated",
            "title": "A template has been created",
            "summary": "Async Request for a Entity",
            "payload": {
              "type": "object",
              "properties": {
                "templateId": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-1>"
                },
                "name": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-2>"
                },
                "customer": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                }
              },
              "x-parser-schema-id": "Template"
            },
            "x-parser-unique-object-id": "TemplatedCreated"
          }
        },
        "x-parser-unique-object-id": "templateManagements"
      },
      "x-parser-unique-object-id": "operation"
    }
  },
  "channels": {
    "templateManagements": "$ref:$.operations.operation.channel"
  },
  "components": {
    "messages": {
      "TemplatedCreated": "$ref:$.operations.operation.channel.messages.TemplatedCreated"
    },
    "schemas": {
      "Template": "$ref:$.operations.operation.channel.messages.TemplatedCreated.payload"
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":true},"sidebar":{"showOperations":"byDefault"}};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  