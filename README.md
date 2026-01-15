# Social Downloader (Private Service)

Production-grade, queue-based private media downloader using Node.js, Redis, BullMQ, and yt-dlp.

## Architecture

Frontend -> API -> Redis Queue -> Worker -> yt-dlp -> Storage

## Deploy

Designed for Railway / Render using Docker.

## Services

- API server
- Worker
- Redis

## Legal

Use only for content you own or have rights to.
