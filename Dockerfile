FROM node:16 as installer
COPY . /juice-shop
WORKDIR /juice-shop
RUN npm i -g typescript ts-node
RUN npm install --production --unsafe-perm
RUN npm dedupe
RUN rm -rf frontend/node_modules

FROM node:16-alpine
ARG BUILD_DATE
ARG VCS_REF
LABEL maintainer="Derian Tungka <derian.tungka@datadoghq.com>" \
    org.opencontainers.image.title="Datadog Fork of OWASP Juice Shop" \
    org.opencontainers.image.description="Probably the most modern and sophisticated insecure web application" \
    org.opencontainers.image.authors="Derian Tungka <derian.tungka@datadoghq.com>"
WORKDIR /juice-shop
RUN addgroup --system --gid 1001 juicer && \
    adduser juicer --system --uid 1001 --ingroup juicer
COPY --from=installer --chown=juicer /juice-shop .
RUN mkdir logs && \
    chown -R juicer logs && \
    chgrp -R 0 ftp/ frontend/dist/ logs/ data/ i18n/ && \
    chmod -R g=u ftp/ frontend/dist/ logs/ data/ i18n/
USER 1001
EXPOSE 3000
CMD ["npm", "start"]
