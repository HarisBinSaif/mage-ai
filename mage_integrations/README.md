## Set up

1. Run Mage in a Docker container using `./scripts/dev.sh`.
1. Open another terminal and run:
    ```bash
    docker exec -it mage-ai_server_1 bash
    ```
1. Uninstall the `mage-integrations` package using `pip`:
    ```bash
    pip3 uninstall -y mage-integrations
    ```
1. Change directory into `mage_integrations/`.

## Testing sync locally

Create a files:

```
TEST_CATALOG.json
TEST_CONFIG_S.json
TEST_STATE.json

TEST_CONFIG_D.json
TEST_STATE
```

Run

### Discover streams

```bash
python3 mage_integrations/sources/chargebee/__init__.py \
  --config mage_integrations/TEST_CONFIG1.json \
  --discover \
  --discover_streams
```

### Get schema

```bash
python3 mage_integrations/sources/salesforce/__init__.py \
  --config mage_integrations/TEST_CONFIG1.json \
  --discover \
  --selected_streams '["Account"]' > mage_integrations/TEST_CATALOG.json
```

### Count records

```bash
python3 mage_integrations/sources/chargebee/__init__.py \
  --config mage_integrations/TEST_CONFIG1.json \
  --catalog mage_integrations/TEST_CATALOG.json \
  --state mage_integrations/TEST_STATE.json \
  --count_records \
  --selected_streams '["user_activity", "user_with_emails"]'
```

```bash
python3 mage_integrations/sources/postgresql/__init__.py \
  --config mage_integrations/TEST_CONFIG1.json \
  --catalog mage_integrations/TEST_CATALOG.json \
  --query_json '{"_end_date": null, "_execution_date": "2022-11-17T21:05:53.341319", "_execution_partition": "444/20221117T210443", "_start_date": null, "_limit": 1000, "_offset": 0}' \
  --state mage_integrations/TEST_STATE.json
```

```bash
python3 mage_integrations/sources/salesforce/__init__.py \
  --config mage_integrations/TEST_CONFIG1.json \
  --catalog mage_integrations/TEST_CATALOG.json \
  --state mage_integrations/TEST_STATE.json | python3 mage_integrations/destinations/bigquery/__init__.py \
  --config mage_integrations/TEST_CONFIG2.json \
  --debug \
  --state mage_integrations/STATE
```
