# Dockerfile for PostgreSQL with locale configuration
# Author: [Jesús Ariel González Bonilla]
# Date: [21-06-2024]

FROM postgres:latest

# Configure locales
RUN localedef -i es_ES -c -f UTF-8 -A /usr/share/locale/locale.alias es_ES.UTF-8

# Set environment variable
ENV LANG es_ES.UTF-8