# vnd-status / Stunning Status Pages

<p align="center">
  <img src="https://vietnamdong.vercel.app/logo-mark.png" width="100%" alt="LoL">
</p><p align="center">
  <strong>A modern, self-hosted status page for monitoring service availability, uptime, and incidents.</strong>
</p><p align="center">
  <a href="https://github.com/MuxusTL/vnd-status">
    <img src="https://img.shields.io/github/stars/MuxusTL/vnd-status?style=social" alt="GitHub Stars">
  </a>
  <img src="https://img.shields.io/badge/self--hosted-yes-blue" alt="Self-hosted">
  <img src="https://img.shields.io/badge/status-open--source-green" alt="Open Source">
</p><p align="center">
  <a href="https://github.com/MuxusTL/vnd-status">GitHub Repository</a>
  ·
  <a href="https://github.com/MuxusTL/vnd-status/issues">Issues</a>
  ·
  <a href="https://github.com/rajnandan1/kener">Original Project: Kener</a>
</p>---

## What is vnd-status?

vnd-status is a status page project based on "Kener" (https://github.com/rajnandan1/kener), an open-source status page system built with SvelteKit and Node.js.

It provides a foundation for publishing service status, monitoring availability, and communicating incidents through a clean, customizable web interface.

Features

## Monitoring & Availability

- Monitor service availability and uptime
- HTTP endpoint polling and API-based integrations
- Organize monitors into custom sections
- Schedule monitoring checks
- Display service status and availability history

## Customization

- Modern, responsive status page interface
- Custom branding and status page configuration
- Light and dark themes
- Internationalization support inherited from Kener
- Custom domain and embedding capabilities, subject to configuration

## Incident Management

- Publish incidents and service disruptions
- Communicate incident updates
- Provide status information to users
- Use available APIs for incident management

## Deployment

- Self-hosted deployment
- Node.js-based development workflow
- Docker and Docker Compose support
- Configurable environment variables

Features depend on the underlying Kener version and the project's configuration.

Installation

## Requirements

- Node.js and npm compatible with the project
- Git

## Manual Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/MuxusTL/vnd-status.git
cd vnd-status
npm install
cp .env.example .env
npm run dev
```

Configure your environment variables in ".env" before deploying the application.

## Docker

The repository includes Docker-related configuration files for containerized deployment.

Review ""docker-compose.yml"" (docker-compose.yml) and ""Dockerfile"" (Dockerfile) to configure your deployment.

```bash
docker compose up -d
```

For production deployments, configure persistent storage, environment variables, networking, and any required secrets before exposing the service publicly.

## Technologies

- "SvelteKit" (https://kit.svelte.dev/)
- "Node.js" (https://nodejs.org/)
- "shadcn-svelte" (https://www.shadcn-svelte.com/)
- Docker for containerized deployment

## Documentation

- "Project Documentation" (docs/)
- "API Specification — OpenAPI" (openapi.yaml)
- "GitHub Issues" (https://github.com/MuxusTL/vnd-status/issues)
- "Original Kener Documentation" (https://kener.ing/docs/home)

## Contributing

Contributions, bug reports, and suggestions are welcome.

Please open an issue before proposing major changes, and make sure your changes preserve the project's configuration and deployment compatibility.

## Credits

vnd-status is based on "Kener" (https://github.com/rajnandan1/kener).

Thanks to the original Kener developers and open-source contributors for building the foundation this project uses.

- Original repository: https://github.com/rajnandan1/kener
- Original author: "rajnandan1" (https://github.com/rajnandan1)

Please refer to ""LICENSE"" (LICENSE) for licensing terms and retain required copyright and attribution notices.

---

<p align="center">
  Author <a href="https://github.com/MuxusTL">MuxusTL</a>
</p>
