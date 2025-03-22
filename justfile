# Show available commands.
help:
    just --list

# Build services.
build:
    docker compose --profile "*" build

# Start development.
dev:
    docker compose --profile dev up

# Run tests.
test:
    docker compose --profile test up

# Stop services.
stop:
    docker compose --profile "*" down
