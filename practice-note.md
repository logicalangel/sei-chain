
## Fix Dependencies

Because of some broken/Moved package we have to add these two lines to replacement part of mod file. after that we will run `go mod tidy` again.

```bash
	nhooyr.io/websocket => github.com/coder/websocket v1.8.7
	github.com/ledgerwatch/interfaces => github.com/erigontech/interfaces v0.0.0
```

## Run a Node

With these commands we will have a new chain and genesis block and off course a account to work with.
```bash
go run ./cmd/seid/main.go init my-local-testnet --chain-id arctic-1
go run ./cmd/seid/main.go keys add my-validator
go run ./cmd/seid/main.go add-genesis-account $(go run ./cmd/seid/main.go keys show my-validator -a) 1000000000usei
go run ./cmd/seid/main.go gentx my-validator 1000000000usei --chain-id arctic-1
go run ./cmd/seid/main.go collect-gentxs
go run ./cmd/seid/main.go start
```
