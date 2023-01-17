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

Then, we can run it with a custom *tag* (name):

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