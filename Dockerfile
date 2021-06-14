FROM node:12.19.1 as build

COPY . /app

WORKDIR /app

RUN . ./.env.master && \
    yarn install && \
    yarn build && \
    mkdir -p dist/static/img/ && \
    cp staticdata/img/sharing-image.png dist/static/img/sharing-image.png && \
    cp _redirects dist/ && \
    mkdir /dest && \
    cp -r dist/* /dest/


FROM nginx:latest

COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /dest /usr/share/nginx/html
