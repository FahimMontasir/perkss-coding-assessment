# perkss-coding-assessment

## server-doc

live link https://perkss-assessment.vercel.app/api/v1/workflow

### instruction to run in dev env

```bash
cd server
docker compose -f docker-compose.dev.yml up -d
export NODE_ENV=development
yarn dev
```

### instruction for production build

1. create a .env file with all .env.local properties
2. yarn build
3. vercel

### api endpoints:

1. create a workflow
   <br/>
   post: https://perkss-assessment.vercel.app/api/v1/workflow
   <br/>
   body:

```json
{
  "name": "Management Campaign Approval",
  "initBox": "Start Marketing Campaign",
  "endBox": "Campaign Published",
  "conditionalBoxes": [
    {
      "condition": "Content Review",
      "actions": [
        {
          "actionName": "Content Creation",
          "conditionApplicable": true
        },
        {
          "actionName": "Content Editing",
          "conditionApplicable": true
        },
        {
          "actionName": "Content Approval",
          "conditionApplicable": true
        }
      ]
    },
    {
      "condition": "Design Review",
      "actions": [
        {
          "actionName": "Design Creation",
          "conditionApplicable": true
        }
      ]
    }
  ]
}
```

2. update a workflow
   <br/>
   patch: https://perkss-assessment.vercel.app/api/v1/workflow
   <br/>
   body: same as create workflow but everything is optional field

3. get a workflow get: https://perkss-assessment.vercel.app/api/v1/workflow/workflow_id
   <br/>
   param: \_id

4. get all workflows
   <br>
   get: https://perkss-assessment.vercel.app/api/v1/workflow

5. delete a workflow <br>
   delete: https://perkss-assessment.vercel.app/api/v1/workflow/workflow_id
   <br/>
   param: \_id
