# Trabajo Fin de Grado

This is the project I have to do to finish my studies to become a *Higher Technician in Computer Network Systems Management*.

## Introduction

The goal of this project is to create a Linux server and use Docker technology to deploy different services in containers and docker-compose to define the initial configurations in a single file. In addition we will use Portainer to manage and monitor containers, images, volumes and networks in an intuitive and easy to use graphical interface.

Bitwarden is a password manager and digital vault that offers secure storage, password generation, autofill and password sharing. This service offers a web interface to manage credentials, a web extension and mobile applications. 

NextCloud is a private cloud that allows us to store, synchronize and share files securely, accessing them from any device, anywhere. In addition, NextCloud offers advanced collaboration features, such as real-time document editing, calendar and task management, and the ability to share files and folders with internal and external users. It also provides communication tools, such as chat and video calls, which facilitates collaboration and communication between team members. This way we do not need to use other services such as Google Drive, Microsoft OneDrive or Mega to store our data.

WireGuard VPN is a secure and efficient virtual private network protocol that offers simplicity in configuration and administration. It has fast transfer speed, low resource consumption and end-to-end encryption to ensure privacy. It maintains stable and fast connections in networks with high latency. We can use this VPN to connect to our network if we are in another country and want to have a secure Internet connection.

Pi-Hole is a DNS filtering system that blocks ads and trackers at the network level. It provides protection against unwanted ads and improves web page loading performance by removing ads and trackers. In addition, it offers customization and control through a web interface, and is regularly updated to stay current. We will configure the router so that the local network uses this DNS service by default, i.e. it will be transparent to the user.

After configuring the services on the server, we will use Nginx Proxy Manager as a reverse proxy to handle web requests to the different services and provide SSL certificates to maintain encrypted and secure connections. It provides an intuitive user interface to configure and manage multiple websites and services running behind the proxy. This way we will only have to open ports 80 TCP (HTTP), 443 TCP (HTTPS) and 51820 UDP (VPN) on the router to access all services from the Internet.