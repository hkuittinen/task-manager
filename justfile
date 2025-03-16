# Show available commands.
help:
    just --list

# Build services.
build:
    docker compose --profile "*" build

# Start development.
dev:
    docker compose --profile dev up

# Stop services.
stop:
    docker compose --profile "*" down
