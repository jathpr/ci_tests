#### eslint helper

`yarn eslint './src/**/*' --ext .js.jsx.ts.tsx --fix`

### jenkins

base on this article `https://rangle.io/blog/running-jenkins-and-persisting-state-locally-using-docker-2/`

install jenkins

`docker image pull jenkins/jenkins:lts` - статический образ

`docker volume create jenkins_local_volume` - создания раздела для хранения настроек дженкинса. Можно заменить на -v флаг при создании контейнера

docker container run -d -p 8089:8080 \
 -v jenkins_local_volume:/var/jenkins_home \
 --name jenkins-local \
 jenkins/jenkins:lts

-d - не занимет текущий процесс
8089 - внешний порт

`http://localhost:8089` - продолжить установку

docker container exec \
 jenkins-local \
 sh -c "cat /var/jenkins_home/secrets/initialAdminPassword"
показывает актуальный пароль что б продолжить настройку

admin/admin
