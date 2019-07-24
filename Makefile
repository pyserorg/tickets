SERVICE = pysertickets
REGGAE_PATH := /usr/local/share/reggae
ENV_FILE = tickets/.defaultip
IP != bin/getip.sh
PORTS = 19000 19001 19002

pre_up:
	@echo "export REACT_NATIVE_PACKAGER_HOSTNAME=${IP}" >${ENV_FILE}

.if exists(provisioners.mk)
.include <provisioners.mk>
.endif
.include <${REGGAE_PATH}/mk/service.mk>
