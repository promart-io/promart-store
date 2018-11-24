# Docker descriptor for Dirigible
# License - http://www.eclipse.org/legal/epl-v10.html

ARG DIRIGIBLE_VERSION=latest
FROM dirigiblelabs/dirigible-base-platform-anonymous:$DIRIGIBLE_VERSION

COPY modules/store/target/modules-store-1.0.0-SNAPSHOT.jar $CATALINA_HOME/webapps/ROOT/WEB-INF/lib

EXPOSE 8080
CMD ["catalina.sh", "run"]