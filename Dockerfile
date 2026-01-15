FROM node:20-slim

RUN apt-get update && apt-get install -y     python3     python3-pip     ffmpeg     && pip3 install -U yt-dlp     && apt-get clean

WORKDIR /app

COPY backend/package.json ./
RUN npm install

COPY backend ./

CMD ["npm", "run", "start"]
