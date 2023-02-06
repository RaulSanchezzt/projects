# Proyecto Web Casero

En este proyecto, vamos a utilizar una máquina virtual con [Ubuntu Server](https://ubuntu.com/download/server) dónde instalaremos [Docker](https://www.docker.com/) para crear diferentes contenedores dónde se ejecutarán las aplicaciones web [Wordpress](https://wordpress.org/) y [Odoo](https://www.odoo.com/es_ES). 

## Máquina Virtual

### Instalación

Lo primero que tendremos que hacer será crear una máquina virtual con suficientes recursos para nuestro objetivo.

![](assets/1.png)

Elegiremos el idioma Español y continuaremos con la instalación...

![](assets/2.png)

Instalamos el servicio **SSH** para poder conectarnos después desde otro equipo al servidor de una manera más cómoda.

![](assets/3.png)

### Configuración

Esperamos a que se termine de instalar el sistema operativo. Ahora editaremos el archivo de configuración para establecer una dirección **IP** estática a este servidor.

```bash
raul@ubuntu-proyecto-web:~$ sudo nano /etc/netplan/00-installer-config.yaml
```

Escribimos la configuración necesaria...

```yaml
# This is the network config written by 'subiquity'
network:
  ethernets:
    ens33:
      addresses:
      - 192.168.1.222/24
      nameservers:
        addresses: [8.8.8.8, 1.1.1.1]
      routes:
      - to: default
        via: 192.168.1.1
  version: 2
```

Después de guardar el archivo, aplicamos la configuración con el siguiente comando.

```bash
raul@ubuntu-proyecto-web:~$ sudo netplan apply
```

Reiniciamos la máquina y comprobamos que nos podemos conectar mediante **SSH** desde otro equipo.

![](assets/4.png)

## Docker

### Instalación

Primero, nos aseguramos que tenemos el sistema actualizado.

```bash
raul@ubuntu-proyecto-web:~$ sudo apt update
Obj:1 http://archive.ubuntu.com/ubuntu jammy InRelease
Des:2 http://archive.ubuntu.com/ubuntu jammy-updates InRelease [114 kB]
Des:3 http://archive.ubuntu.com/ubuntu jammy-backports InRelease [107 kB]
Des:4 http://archive.ubuntu.com/ubuntu jammy-security InRelease [110 kB]
Descargados 331 kB en 7s (44,6 kB/s)
Leyendo lista de paquetes... Hecho
Creando árbol de dependencias... Hecho
Leyendo la información de estado... Hecho
```

Seguiremos la [documentación oficial](https://docs.docker.com/engine/install/ubuntu/) para instalar todos los componentes necesarios... 

```bash
raul@ubuntu-proyecto-web:~$ sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
Leyendo lista de paquetes... Hecho
Creando árbol de dependencias... Hecho
Leyendo la información de estado... Hecho
lsb-release ya está en su versión más reciente (11.1.0ubuntu4).
fijado lsb-release como instalado manualmente.
ca-certificates ya está en su versión más reciente (20211016ubuntu0.22.04.1).
fijado ca-certificates como instalado manualmente.
curl ya está en su versión más reciente (7.81.0-1ubuntu1.7).
fijado curl como instalado manualmente.
gnupg ya está en su versión más reciente (2.2.27-3ubuntu2.1).
fijado gnupg como instalado manualmente.
Los paquetes indicados a continuación se instalaron de forma automática y ya no son necesarios.
  libflashrom1 libftdi1-2
Utilice «sudo apt autoremove» para eliminarlos.
0 actualizados, 0 nuevos se instalarán, 0 para eliminar y 4 no actualizados.

raul@ubuntu-proyecto-web:~$ sudo mkdir -p /etc/apt/keyrings

raul@ubuntu-proyecto-web:~$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
raul@ubuntu-proyecto-web:~$ echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Ahora actualizamos los repositorios e instalamos...

```bash
raul@ubuntu-proyecto-web:~$ sudo apt-get update
Des:1 https://download.docker.com/linux/ubuntu jammy InRelease [48,9 kB]
Des:2 https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages [12,7 kB]
Obj:3 http://archive.ubuntu.com/ubuntu jammy InRelease
Des:4 http://archive.ubuntu.com/ubuntu jammy-updates InRelease [114 kB]
Des:5 http://archive.ubuntu.com/ubuntu jammy-backports InRelease [107 kB]
Des:6 http://archive.ubuntu.com/ubuntu jammy-security InRelease [110 kB]
Descargados 393 kB en 5s (75,9 kB/s)
Leyendo lista de paquetes... Hecho

raul@ubuntu-proyecto-web:~$ sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
Leyendo lista de paquetes... Hecho
Creando árbol de dependencias... Hecho
Leyendo la información de estado... Hecho
```

Comprobamos que está instalado, usando un contenedor de prueba...

```bash
raul@ubuntu-proyecto-web:~$ sudo docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete
Digest: sha256:aa0cc8055b82dc2509bed2e19b275c8f463506616377219d9642221ab53cf9fe
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.
```

Si ahora ejecutamos cualquier comando, nos aparecerá este error porque no hemos añadido nuestro usuario al grupo de *docker* y no tenemos permisos para usar los comandos.

```bash
raul@ubuntu-proyecto-web:~$ docker ps
permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/containers/json": dial unix /var/run/docker.sock: connect: permission denied
```

Una solución sería usar *docker* con el usuario `root` o, en este caso vamos a añadir al usuario actual al grupo. Después reiniciaremos y nos sacará de nuestra sesión **SSH**...

```bash
raul@ubuntu-proyecto-web:~$ sudo usermod -a -G docker $USER
raul@ubuntu-proyecto-web:~$ sudo reboot now
Connection to 192.168.1.222 closed by remote host.
Connection to 192.168.1.222 closed.
```

### Crear Contenedores

Ahora, crearemos una nueva carpeta y crearemos el archivo `docker-compose.yml` dónde copiaremos el contenido. Luego lo ejecutaremos y esperamos a que termine...

```bash
raul@ubuntu-proyecto-web:~$ mkdir proyecto-web-casero
raul@ubuntu-proyecto-web:~$ cd proyecto-web-casero/
raul@ubuntu-proyecto-web:~/proyecto-web-casero$ vim docker-compose.yml
raul@ubuntu-proyecto-web:~/proyecto-web-casero$ docker compose up -d
[+] Running 11/11
 ⠿ Network proyecto-web-casero_proyecto-web-casero  Created                                                        0.1s
 ⠿ Volume "proyecto-web-casero_wordpress-db-data"   Created                                                        0.0s
 ⠿ Volume "proyecto-web-casero_odoo-web-data"       Created                                                        0.0s
 ⠿ Volume "proyecto-web-casero_odoo-db-data"        Created                                                        0.0s
 ⠿ Volume "proyecto-web-casero_wordpress-web-data"  Created                                                        0.0s
 ⠿ Container MySQL                                  Started                                                        4.0s
 ⠿ Container PostgreSQL                             Started                                                        4.0s
 ⠿ Container PHPPgAdmin                             Started                                                        8.1s
 ⠿ Container Odoo                                   Started                                                        4.8s
 ⠿ Container Wordpress                              Started                                                        8.0s
 ⠿ Container PHPMyAdmin                             Started                                                        8.0s
```

Ahora podemos ver los contenedores que tenemos corriendo...

```docker
raul@ubuntu-proyecto-web:~/proyecto-web-casero$ docker ps
CONTAINER ID   IMAGE                   COMMAND                  CREATED          STATUS          PORTS
                                                              NAMES
34a69e1eedf3   wordpress               "docker-entrypoint.s…"   16 minutes ago   Up 16 minutes   0.0.0.0:80->80/tcp, :::80->80/tcp                                                    Wordpress
9e3556454c52   phpmyadmin/phpmyadmin   "/docker-entrypoint.…"   16 minutes ago   Up 16 minutes   0.0.0.0:8080->80/tcp, :::8080->80/tcp                                                PHPMyAdmin
997b6b895b32   bitnami/phppgadmin      "/opt/bitnami/script…"   16 minutes ago   Up 16 minutes   0.0.0.0:8888->8080/tcp, :::8888->8080/tcp, 0.0.0.0:443->8443/tcp, :::443->8443/tcp   PHPPgAdmin
fbe5337790ad   odoo:14.0               "/entrypoint.sh odoo"    16 minutes ago   Up 16 minutes   8071-8072/tcp, 0.0.0.0:88->8069/tcp, :::88->8069/tcp                                 Odoo
1d4cc5b14e89   postgres:13             "docker-entrypoint.s…"   16 minutes ago   Up 16 minutes   5432/tcp
                                                              PostgreSQL
96cfc3eb9807   mysql:5.7               "docker-entrypoint.s…"   16 minutes ago   Up 16 minutes   3306/tcp, 33060/tcp                                                                  MySQL
```