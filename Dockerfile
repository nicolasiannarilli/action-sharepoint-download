FROM node:alpine
COPY ./* /app/
RUN cd /app && npm install
ENTRYPOINT ["/app/entrypoint.sh"]