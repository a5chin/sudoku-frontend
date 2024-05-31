FROM denoland/deno:debian

WORKDIR /app

COPY . .

RUN deno cache main.ts

EXPOSE 8080

CMD ["deno", "run", "--allow-net", "--allow-read", "main.ts"]
