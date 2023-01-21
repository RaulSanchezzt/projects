# Udemy - Docker Bootcamp Zero to Expert

In this [course](https://www.udemy.com/course/curso-completo-de-docker-de-cero-a-experto/) I have learned what is [Docker](https://www.docker.com/) and how to use it to create **Images**, **Containers**...

## First steps

### Running the first image

Let's run our first [PostgreSQL](https://hub.docker.com/_/postgres) `docker image`.

```docker
$  docker run postgres
Unable to find image 'postgres:latest' locally
latest: Pulling from library/postgres
8740c948ffd4: Pull complete
c8dbd2beab50: Pull complete
05d9dc9d0fbd: Pull complete
ddd89d5ec714: Pull complete
f98bb9f03867: Pull complete
0554611e703f: Pull complete
64e0a8694477: Pull complete
8b868a753f47: Pull complete
12ed9aefbab3: Pull complete
825b08d51ffd: Pull complete
8f272b487267: Pull complete
ba2eed7bd2cc: Pull complete
ff59f63f47d6: Pull complete
Digest: sha256:6b07fc4fbcf551ea4546093e90cecefc9dc60d7ea8c56a4ace704940b6d6b7a3
Status: Downloaded newer image for postgres:latest
Error: Database is uninitialized and superuser password is not specified.
       You must specify POSTGRES_PASSWORD to a non-empty value for the
       superuser. For example, "-e POSTGRES_PASSWORD=password" on "docker run".

       You may also use "POSTGRES_HOST_AUTH_METHOD=trust" to allow all
       connections without a password. This is *not* recommended.

       See PostgreSQL documentation about "trust":
       https://www.postgresql.org/docs/current/auth-trust.html
```

Here we will see an error because we didn't define the necessary environment variables, so let's try again.

```docker
$ docker run -d -e POSTGRES_PASSWORD=password postgres
4be3f2d931c5753e2eaf3e9eee87e6b1223253fa47a29140632a1b84e85a42ee
```

Now we can list the images we have in our system and the containers running.

```docker
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED      SIZE
postgres     latest    9f3ec01f884d   5 days ago   379MB

$ docker ps
CONTAINER ID   IMAGE      COMMAND                  CREATED              STATUS              PORTS      NAMES
4be3f2d931c5   postgres   "docker-entrypoint.s…"   About a minute ago   Up About a minute   5432/tcp   competent_lichterman
```

### Deleting a container

Now, we can delete a container. First, list all the container, `-a` to list stopped too.

```docker
$ docker ps -a
CONTAINER ID   IMAGE               COMMAND                  CREATED         STATUS                        PORTS      NAMES
28fd4365c7bd   postgres:bullseye   "docker-entrypoint.s…"   4 minutes ago   Up 4 minutes                  5432/tcp   naughty_mendel
4be3f2d931c5   postgres            "docker-entrypoint.s…"   22 hours ago    Exited (255) 14 minutes ago   5432/tcp   competent_lichterman
9b597e6fa7e9   postgres            "docker-entrypoint.s…"   22 hours ago    Exited (0) 22 hours ago                  loving_satoshi
49375fa7026d   postgres            "docker-entrypoint.s…"   22 hours ago    Exited (1) 22 hours ago                  kind_hopper

$ docker rm 49375fa7026d
49375fa7026d

$ docker ps -a
CONTAINER ID   IMAGE               COMMAND                  CREATED         STATUS                        PORTS      NAMES
28fd4365c7bd   postgres:bullseye   "docker-entrypoint.s…"   4 minutes ago   Up 4 minutes                  5432/tcp   naughty_mendel
4be3f2d931c5   postgres            "docker-entrypoint.s…"   22 hours ago    Exited (255) 14 minutes ago   5432/tcp   competent_lichterman
9b597e6fa7e9   postgres            "docker-entrypoint.s…"   22 hours ago    Exited (0) 22 hours ago                  loving_satoshi
```

We can force to delete a container that is running.

```docker
$  docker ps -a
CONTAINER ID   IMAGE               COMMAND                  CREATED         STATUS                        PORTS      NAMES
28fd4365c7bd   postgres:bullseye   "docker-entrypoint.s…"   7 minutes ago   Up 7 minutes                  5432/tcp   naughty_mendel
4be3f2d931c5   postgres            "docker-entrypoint.s…"   22 hours ago    Exited (255) 17 minutes ago   5432/tcp   competent_lichterman
9b597e6fa7e9   postgres            "docker-entrypoint.s…"   22 hours ago    Exited (0) 22 hours ago                  loving_satoshi

$ docker rm -f 28fd4365c7bd
28fd4365c7bd

```

### Deleting an image

Let's delete an image. At the beginning we can't delete the image because is being used, so we have to force de deletion using `-f`.

```docker
$ docker image ls
REPOSITORY   TAG        IMAGE ID       CREATED      SIZE
postgres     bullseye   9f3ec01f884d   6 days ago   379MB
postgres     latest     9f3ec01f884d   6 days ago   379MB

$ docker image rm 9f3ec01f884d
Error response from daemon: conflict: unable to delete 9f3ec01f884d (must be forced) - image is referenced in multiple repositories

$ docker image rm -f 9f3ec01f884d
Untagged: postgres:bullseye
Untagged: postgres:latest
Untagged: postgres@sha256:6b07fc4fbcf551ea4546093e90cecefc9dc60d7ea8c56a4ace704940b6d6b7a3
Deleted: sha256:9f3ec01f884db0c4e6b637c730043ad1ac9dcaa684e8fa5b858ddf72a3848ddf
```

### Pulling an image

We can pull images like **Ubuntu**.

```docker
$  docker pull ubuntu
Using default tag: latest
latest: Pulling from library/ubuntu
6e3729cf69e0: Pull complete
Digest: sha256:27cb6e6ccef575a4698b66f5de06c7ecd61589132d5a91d098f7f3f9285415a9
Status: Downloaded newer image for ubuntu:latest
docker.io/library/ubuntu:latest

$ docker image ls
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
ubuntu       latest    6b7dfa7e8fdb   5 weeks ago   77.8MB

$ docker ps -a
CONTAINER ID   IMAGE          COMMAND                  CREATED        STATUS                        PORTS      NAMES
```

Then, we can run it with a custom _tag_ (name):

```docker
$ docker run --name my_ubuntu ubuntu

$ docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED          STATUS                      PORTS     NAMES
e85025da209f   ubuntu    "bash"    16 seconds ago   Exited (0) 16 seconds ago             my_ubuntu
```

### Command execution inside containers

Using the `postgres` container, we can execute commands inside the container. In this case, we are going to create an **interactive shell**.

```docker
$ docker run -d -e POSTGRES_PASSWORD=password postgres
Unable to find image 'postgres:latest' locally
latest: Pulling from library/postgres
8740c948ffd4: Already exists
c8dbd2beab50: Pull complete
05d9dc9d0fbd: Pull complete
ddd89d5ec714: Pull complete
f98bb9f03867: Pull complete
0554611e703f: Pull complete
64e0a8694477: Pull complete
8b868a753f47: Pull complete
12ed9aefbab3: Pull complete
825b08d51ffd: Pull complete
8f272b487267: Pull complete
ba2eed7bd2cc: Pull complete
ff59f63f47d6: Pull complete
Digest: sha256:6b07fc4fbcf551ea4546093e90cecefc9dc60d7ea8c56a4ace704940b6d6b7a3
Status: Downloaded newer image for postgres:latest
36804401c2cd7014bcf811b01fd6dd7d43f563bab7e6431ffaec95f0653ae98f

$ docker ps
CONTAINER ID   IMAGE      COMMAND                  CREATED          STATUS          PORTS      NAMES
36804401c2cd   postgres   "docker-entrypoint.s…"   23 seconds ago   Up 20 seconds   5432/tcp   eager_merkle

$ docker exec -it 36804401c2cd sh
# ls
bin   dev                         etc   lib    media  opt   root  sbin  sys  usr
boot  docker-entrypoint-initdb.d  home  lib64  mnt    proc  run   srv   tmp  var
# whoami
root

```

### Logs of a Container

Finally, we can see the `logs` of a container.

```docker
$ docker ps
CONTAINER ID   IMAGE      COMMAND                  CREATED             STATUS             PORTS      NAMES
36804401c2cd   postgres   "docker-entrypoint.s…"   About an hour ago   Up About an hour   5432/tcp   eager_merkle
7c47832e8aa4   redis      "docker-entrypoint.s…"   2 hours ago         Up 2 hours         6379/tcp   epic_johnson

$ docker logs 36804401c2cd
The files belonging to this database system will be owned by user "postgres".
This user must also own the server process.

The database cluster will be initialized with locale "en_US.utf8".
The default database encoding has accordingly been set to "UTF8".
The default text search configuration will be set to "english".

Data page checksums are disabled.

fixing permissions on existing directory /var/lib/postgresql/data ... ok
creating subdirectories ... ok
selecting dynamic shared memory implementation ... posix
selecting default max_connections ... 100
selecting default shared_buffers ... 128MB
selecting default time zone ... Etc/UTC
creating configuration files ... ok
running bootstrap script ... ok
performing post-bootstrap initialization ... ok
syncing data to disk ... ok


Success. You can now start the database server using:

    pg_ctl -D /var/lib/postgresql/data -l logfile start

initdb: warning: enabling "trust" authentication for local connections
initdb: hint: You can change this by editing pg_hba.conf or using the option -A, or --auth-local and --auth-host, the next time you run initdb.
waiting for server to start....2023-01-17 16:19:39.455 UTC [48] LOG:  starting PostgreSQL 15.1 (Debian 15.1-1.pgdg110+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 10.2.1-6) 10.2.1 20210110, 64-bit
2023-01-17 16:19:39.461 UTC [48] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2023-01-17 16:19:39.474 UTC [51] LOG:  database system was shut down at 2023-01-17 16:19:37 UTC
2023-01-17 16:19:39.481 UTC [48] LOG:  database system is ready to accept connections
 done
server started

/usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*

waiting for server to shut down...2023-01-17 16:19:39.564 UTC [48] LOG:  received fast shutdown request
.2023-01-17 16:19:39.571 UTC [48] LOG:  aborting any active transactions
2023-01-17 16:19:39.572 UTC [48] LOG:  background worker "logical replication launcher" (PID 54) exited with exit code 1
2023-01-17 16:19:39.573 UTC [49] LOG:  shutting down
2023-01-17 16:19:39.578 UTC [49] LOG:  checkpoint starting: shutdown immediate
2023-01-17 16:19:39.613 UTC [49] LOG:  checkpoint complete: wrote 3 buffers (0.0%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.011 s, sync=0.006 s, total=0.040 s; sync files=2, longest=0.003 s, average=0.003 s; distance=0 kB, estimate=0 kB
2023-01-17 16:19:39.616 UTC [48] LOG:  database system is shut down
 done
server stopped

PostgreSQL init process complete; ready for start up.

2023-01-17 16:19:39.687 UTC [1] LOG:  starting PostgreSQL 15.1 (Debian 15.1-1.pgdg110+1) on x86_64-pc-linux-gnu, compiled by gcc (Debian 10.2.1-6) 10.2.1 20210110, 64-bit
2023-01-17 16:19:39.687 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
2023-01-17 16:19:39.687 UTC [1] LOG:  listening on IPv6 address "::", port 5432
2023-01-17 16:19:39.698 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2023-01-17 16:19:39.709 UTC [62] LOG:  database system was shut down at 2023-01-17 16:19:39 UTC
2023-01-17 16:19:39.716 UTC [1] LOG:  database system is ready to accept connections
2023-01-17 16:24:39.808 UTC [60] LOG:  checkpoint starting: time
2023-01-17 16:24:43.890 UTC [60] LOG:  checkpoint complete: wrote 43 buffers (0.3%); 0 WAL file(s) added, 0 removed, 0 recycled; write=4.027 s, sync=0.030 s, total=4.082 s; sync files=11, longest=0.008 s, average=0.003 s; distance=252 kB, estimate=252 kB

```

### Searching images CLI

For example, we can search for **Ubuntu** images.

```docker
$ docker search ubuntu
NAME                             DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
ubuntu                           Ubuntu is a Debian-based Linux operating sys…   15468     [OK]
websphere-liberty                WebSphere Liberty multi-architecture images …   291       [OK]
ubuntu-upstart                   DEPRECATED, as is Upstart (find other proces…   111       [OK]
neurodebian                      NeuroDebian provides neuroscience research s…   98        [OK]
ubuntu/nginx                     Nginx, a high-performance reverse proxy & we…   75
open-liberty                     Open Liberty multi-architecture images based…   56        [OK]
ubuntu/apache2                   Apache, a secure & extensible open-source HT…   52
ubuntu-debootstrap               DEPRECATED; use "ubuntu" instead                50        [OK]
ubuntu/squid                     Squid is a caching proxy for the Web. Long-t…   49
ubuntu/bind9                     BIND 9 is a very flexible, full-featured DNS…   43
ubuntu/mysql                     MySQL open source fast, stable, multi-thread…   41
ubuntu/prometheus                Prometheus is a systems and service monitori…   35
ubuntu/postgres                  PostgreSQL is an open source object-relation…   23
ubuntu/kafka                     Apache Kafka, a distributed event streaming …   20
ubuntu/redis                     Redis, an open source key-value store. Long-…   16
ubuntu/prometheus-alertmanager   Alertmanager handles client alerts from Prom…   8
ubuntu/dotnet-deps               Chiselled Ubuntu for self-contained .NET & A…   6
ubuntu/grafana                   Grafana, a feature rich metrics dashboard & …   6
ubuntu/memcached                 Memcached, in-memory keyvalue store for smal…   5
ubuntu/zookeeper                 ZooKeeper maintains configuration informatio…   5
ubuntu/dotnet-runtime            Chiselled Ubuntu runtime image for .NET apps…   5
ubuntu/telegraf                  Telegraf collects, processes, aggregates & w…   4
ubuntu/cortex                    Cortex provides storage for Prometheus. Long…   3
ubuntu/dotnet-aspnet             Chiselled Ubuntu runtime image for ASP.NET a…   3
ubuntu/cassandra                 Cassandra, an open source NoSQL distributed …   2
```

### Renaming a container

What if we want to change the name of a container?

```docker
$ docker run redis -d

*** FATAL CONFIG FILE ERROR (Redis 7.0.7) ***
Reading the configuration file, at line 2
>>> '"-d"'
Bad directive or wrong number of arguments

$ docker run -d redis
f34762910e01234d8b3293b274ce975d6e63fdb7d2799d339958d7850cad53ae

$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS      NAMES
f34762910e01   redis     "docker-entrypoint.s…"   4 seconds ago   Up 3 seconds   6379/tcp   relaxed_diffie

$ docker rename f34762910e01 new_redis_container

$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS          PORTS      NAMES
f34762910e01   redis     "docker-entrypoint.s…"   24 seconds ago   Up 23 seconds   6379/tcp   new_redis_container
```

### Saving an image

Let's export an image.

```docker
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
redis        latest    5f2e708d56aa   7 days ago    117MB
postgres     latest    9f3ec01f884d   7 days ago    379MB
ubuntu       latest    6b7dfa7e8fdb   5 weeks ago   77.8MB

~
$ docker save ubuntu:latest | gzip > myubuntu.tar.gz

$ ls -l
.rw-r--r-- 30M raul 17 Jan 19:57 myubuntu.tar.gz
```

### Importing an image

Then, we can import an image we have exported previously.

```docker
$ docker load < myubuntu.tar.gz
Loaded image: ubuntu:latest

$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
redis        latest    5f2e708d56aa   7 days ago    117MB
postgres     latest    9f3ec01f884d   7 days ago    379MB
ubuntu       latest    6b7dfa7e8fdb   5 weeks ago   77.8MB
```

### Displaying the resource usage statistics

Finally, we can see the performance in live stream of the containers.

```docker
$ docker stats

CONTAINER ID   NAME                  CPU %     MEM USAGE / LIMIT     MEM %     NET I/O       BLOCK I/O   PIDS
f34762910e01   new_redis_container   0.10%     7.758MiB / 7.616GiB   0.10%     1.23kB / 0B   0B / 0B     5

```

## Intro to Dockerfile

### Creating an image

Building an image of my app.

```docker
$ docker build -t my_app .
[+] Building 128.6s (10/10) FINISHED
 => [internal] load build definition from Dockerfile                                                               0.1s
 => => transferring dockerfile: 160B                                                                               0.0s
 => [internal] load .dockerignore                                                                                  0.1s
 => => transferring context: 2B                                                                                    0.0s
 => [internal] load metadata for docker.io/library/node:12.22.1-alpine3.11                                        43.9s
 => [auth] library/node:pull token for registry-1.docker.io                                                        0.0s
 => [1/4] FROM docker.io/library/node:12.22.1-alpine3.11@sha256:93b71facf11d471ac035acfaf020ecc05297f6a401781caf  63.5s
 => => resolve docker.io/library/node:12.22.1-alpine3.11@sha256:93b71facf11d471ac035acfaf020ecc05297f6a401781cafc  0.1s
 => => sha256:93b71facf11d471ac035acfaf020ecc05297f6a401781cafceae1d0561704ba4 1.43kB / 1.43kB                     0.0s
 => => sha256:5b8504e22687f25e22254d062558aa18d41d3331b64e771a6a0675e93d357e70 1.16kB / 1.16kB                     0.0s
 => => sha256:ba59ff60c386d2dc77f7afc5f9211e410ce80e864415c1bafe0006ef76fece1c 6.53kB / 6.53kB                     0.0s
 => => sha256:ddad3d7c1e96adf9153f8921a7c9790f880a390163df453be1566e9ef0d546e0 2.82MB / 2.82MB                     9.3s
 => => sha256:8a6a62f4b1f37fb03e07275438ef8fd27a421cd1b0790e57f7dbab0c6328f811 24.60MB / 24.60MB                  62.2s
 => => sha256:5c72c204eb2261d221bcc8b34dbb4727d6a6625dc7dadf87425c3fa8fd8bbf36 2.24MB / 2.24MB                     5.9s
 => => sha256:33fce3bc6102e63645ad9b969467728efd17b0cdf8b083b1f505df5af73bd627 281B / 281B                         6.4s
 => => extracting sha256:ddad3d7c1e96adf9153f8921a7c9790f880a390163df453be1566e9ef0d546e0                          0.1s
 => => extracting sha256:8a6a62f4b1f37fb03e07275438ef8fd27a421cd1b0790e57f7dbab0c6328f811                          0.7s
 => => extracting sha256:5c72c204eb2261d221bcc8b34dbb4727d6a6625dc7dadf87425c3fa8fd8bbf36                          0.1s
 => => extracting sha256:33fce3bc6102e63645ad9b969467728efd17b0cdf8b083b1f505df5af73bd627                          0.0s
 => [internal] load build context                                                                                  0.5s
 => => transferring context: 4.62MB                                                                                0.4s
 => [2/4] WORKDIR /app                                                                                             0.2s
 => [3/4] COPY . .                                                                                                 0.1s
 => [4/4] RUN yarn install --production                                                                           19.7s
 => exporting to image                                                                                             0.9s
 => => exporting layers                                                                                            0.9s
 => => writing image sha256:8cb0e8af41969e8474c68da6e8158be95a655d8a8225b9df7695752601b68ef8                       0.0s
 => => naming to docker.io/library/my_app                                                                          0.0s

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
```

Once we have created the image, we can see it listed.

```docker
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
my_app       latest    8cb0e8af4196   39 seconds ago   179MB
redis        latest    5f2e708d56aa   10 days ago      117MB
postgres     latest    9f3ec01f884d   10 days ago      379MB
ubuntu       latest    6b7dfa7e8fdb   6 weeks ago      77.8MB
```

### Running our image

Now we can run a container of my image exposing the port `3000`

```docker
$ docker run -dp 3000:3000 my_app
a0aeebe904dbc0f9a2b2924c6a043ffb86b0ef49d380254371779226a52c661b
```

We can check in the browser that is running on `localhost:3000`!

```docker
$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                    NAMES
a0aeebe904db   my_app    "docker-entrypoint.s…"   4 minutes ago   Up 4 minutes   0.0.0.0:3000->3000/tcp   quirky_booth

```

### Creating a volume

But if we want to make the data of my app persistent, we have to create a **volume**

```docker
$ docker volume create todo-db
todo-db
```

Then, we have to create a new container connected to my new volume.

```docker
$ docker run -dp 3000:3000 -v todo-db:/etc/todos my_app
c8e30553dd6af203317ca2e612dd8b4a6ed57b9e4f373a7c994827082f31824d
```

Finally, we can see the new container and the volumes created.

```docker
$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS         PORTS                    NAMES
c8e30553dd6a   my_app    "docker-entrypoint.s…"   10 seconds ago   Up 9 seconds   0.0.0.0:3000->3000/tcp   bold_lederberg

$ docker volume ls
DRIVER    VOLUME NAME
local     todo-db
```

### Modifying the App

What happens when we want to edit the app? In this case we are going to create another volume with the source code and create a new container with two volumes connected.

```docker
$  docker volume create source
source

$ docker run -dp 3000:3000 -v todo-db:/etc/todos -v source:/app/src my_app
6bd6b94b62cfa13b982ee9e1e6ac0b636a69b1def98a2df23e7a3b244ade3a44
```

Now we can edit our app in production! :D

### Publish on Docker Hub

Finally, we are going to upload the final image to [Docker Hub](https://hub.docker.com/). Let's build the image again.

```docker
$ docker build -t my_app:v2 .
[+] Building 44.5s (10/10) FINISHED
 => [internal] load build definition from Dockerfile                                                               0.1s
 => => transferring dockerfile: 160B                                                                               0.0s
 => [internal] load .dockerignore                                                                                  0.1s
 => => transferring context: 2B                                                                                    0.0s
 => [internal] load metadata for docker.io/library/node:12.22.1-alpine3.11                                        43.7s
 => [auth] library/node:pull token for registry-1.docker.io                                                        0.0s
 => [1/4] FROM docker.io/library/node:12.22.1-alpine3.11@sha256:93b71facf11d471ac035acfaf020ecc05297f6a401781cafc  0.0s
 => [internal] load build context                                                                                  0.5s
 => => transferring context: 7.98kB                                                                                0.5s
 => CACHED [2/4] WORKDIR /app                                                                                      0.0s
 => CACHED [3/4] COPY . .                                                                                          0.0s
 => CACHED [4/4] RUN yarn install --production                                                                     0.0s
 => exporting to image                                                                                             0.0s
 => => exporting layers                                                                                            0.0s
 => => writing image sha256:8cb0e8af41969e8474c68da6e8158be95a655d8a8225b9df7695752601b68ef8                       0.0s
 => => naming to docker.io/library/my_app:v2                                                                       0.0s

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
```

Let's list the images.

```docker
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED             SIZE
my_app       v2        8cb0e8af4196   About an hour ago   179MB
redis        latest    5f2e708d56aa   10 days ago         117MB
postgres     latest    9f3ec01f884d   10 days ago         379MB
ubuntu       latest    6b7dfa7e8fdb   6 weeks ago         77.8MB
```

Then, we have to create a tag to this version.

```docker
$ docker tag 8cb0e8af4196 raulsanchezzt/my_app:v2

$docker images
REPOSITORY             TAG       IMAGE ID       CREATED             SIZE
my_app                 v2        8cb0e8af4196   About an hour ago   179MB
raulsanchezzt/my_app   v2        8cb0e8af4196   About an hour ago   179MB
redis                  latest    5f2e708d56aa   10 days ago         117MB
postgres               latest    9f3ec01f884d   10 days ago         379MB
ubuntu                 latest    6b7dfa7e8fdb   6 weeks ago         77.8MB
```

Finally, push the image to **Docker Hub**.

```docker
$ docker push raulsanchezzt/my_app:v2
The push refers to repository [docker.io/raulsanchezzt/my_app]
5e2c4a0714c1: Pushed
cd85639aa011: Pushed
fe3f4fe648a3: Pushed
de74bd1e76e0: Mounted from library/node
62ec5c862704: Mounted from library/node
0b9cfd251a3b: Mounted from library/node
9a5d14f9f550: Mounted from library/node
v2: digest: sha256:8bf76769926a66603019f526fe8c10c827c7c30963cc9ea32097fead8ac4e510 size: 1787
```