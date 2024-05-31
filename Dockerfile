FROM denoland/deno:debian

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .

RUN deno cache main.ts

EXPOSE 8080

CMD ["deno", "run", "-A", "main.ts"]
