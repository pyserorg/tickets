#!/bin/sh


DEFAULT_INTERFACE=`netstat -rn | grep default | awk '{print $4}'`
DEFAULT_IP=`ifconfig ${DEFAULT_INTERFACE} | grep 'inet ' | awk '{print $2}'`
echo ${DEFAULT_IP}
