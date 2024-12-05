
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
    "staging": {
      "protocol": "https",
      "host": "dev.api.notify.com",
      "description": "server description"
    },
    "production": {
      "protocol": "https",
      "host": "api.notify.com",
      "description": "server description"
    }
  },
  "defaultContentType": "application/json",
  "operations": {
    "templateManagement": {
      "title": "Template Management Operations",
      "action": "receive",
      "channel": {
        "title": "Template Management",
        "messages": {
          "TemplatedCreated": {
            "name": "Templated Created",
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
          },
          "TemplatedUpdated": {
            "name": "Templated Updated",
            "title": "A template has been updated",
            "summary": "Async Request for a Entity",
            "payload": "$ref:$.operations.templateManagement.channel.messages.TemplatedCreated.payload",
            "x-parser-unique-object-id": "TemplatedUpdated"
          },
          "TemplatedDeleted": {
            "name": "Templated Deleted",
            "title": "A template has been deleted",
            "summary": "Async Request for a Entity",
            "payload": "$ref:$.operations.templateManagement.channel.messages.TemplatedCreated.payload",
            "x-parser-unique-object-id": "TemplatedDeleted"
          }
        },
        "x-parser-unique-object-id": "templateManagement"
      },
      "x-parser-unique-object-id": "templateManagement"
    },
    "templateAssignment": {
      "title": "Template Assignment Operations",
      "action": "receive",
      "channel": {
        "title": "Template Assignment",
        "messages": {
          "TemplateAssigned": {
            "name": "Templated Assigned",
            "title": "A template has been assigned to a routing plan",
            "summary": "Async Request for a Entity",
            "payload": {
              "type": "object",
              "properties": {
                "templateId": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-4>"
                },
                "routingPlanId": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-5>"
                }
              },
              "x-parser-schema-id": "TemplateAssigned"
            },
            "x-parser-unique-object-id": "TemplateAssigned"
          }
        },
        "x-parser-unique-object-id": "templateAssignment"
      },
      "x-parser-unique-object-id": "templateAssignment"
    }
  },
  "channels": {
    "templateManagement": "$ref:$.operations.templateManagement.channel",
    "templateAssignment": "$ref:$.operations.templateAssignment.channel"
  },
  "components": {
    "messages": {
      "TemplatedCreated": "$ref:$.operations.templateManagement.channel.messages.TemplatedCreated",
      "TemplatedUpdated": "$ref:$.operations.templateManagement.channel.messages.TemplatedUpdated",
      "TemplatedDeleted": "$ref:$.operations.templateManagement.channel.messages.TemplatedDeleted",
      "TemplateAssigned": "$ref:$.operations.templateAssignment.channel.messages.TemplateAssigned"
    },
    "schemas": {
      "Template": "$ref:$.operations.templateManagement.channel.messages.TemplatedCreated.payload",
      "TemplateAssigned": "$ref:$.operations.templateAssignment.channel.messages.TemplateAssigned.payload"
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
  