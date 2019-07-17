SERVICE = tickets
REGGAE_PATH := /usr/local/share/reggae
ENV_FILE = tickets/.defaultip
IP != bin/getip.sh

pre_up:
	@echo "export REACT_NATIVE_PACKAGER_HOSTNAME=${IP}" >${ENV_FILE}
	@echo "rdr pass proto tcp from any to any port { 19000, 19001 } -> ${SERVICE}.${DOMAIN}" | sudo pfctl -a cbsd -f -

.if exists(provisioners.mk)
.include <provisioners.mk>
.endif
.include <${REGGAE_PATH}/mk/service.mk>
