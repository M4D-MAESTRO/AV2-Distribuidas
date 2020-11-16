FROM node:14
WORKDIR /usr/src/api
# idk if i should use npm or yarn yet
# RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - 
# RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list 
# RUN ln -s http /usr/lib/apt/methods/https
# RUN apt update 
# RUN apt install yarn -y
# COPY yarn.lock ./
COPY migration.sh /usr/local/bin/
COPY package.json ./
RUN npm i
COPY . . 
ENTRYPOINT []