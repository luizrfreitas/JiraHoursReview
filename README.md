# JiraHoursReview

node.Dockerfile build:
docker build -f node.Dockerfile -t node-jira-hours-review:1.0.0 .

docker container:
docker run -d -p 3000:3000 -v ./:/usr/src/app --name node-container node-jira-hours-review:1.0.0

docker restart container:
docker restart node-container