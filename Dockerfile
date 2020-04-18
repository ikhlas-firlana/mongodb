FROM mongo:4.0.2
ADD ./mongod.conf /etc/
ADD ./start.sh /
ENTRYPOINT [ "tail", "-f", "/dev/null" ];
