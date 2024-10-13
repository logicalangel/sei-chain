go run ./cmd/seid/main.go init my-local-testnet --chain-id sei-testnet
go run ./cmd/seid/main.go keys add my-validator
# shellcheck disable=SC2046
go run ./cmd/seid/main.go add-genesis-account $(go run ./cmd/seid/main.go keys show my-validator -a) 1000000000usei
go run ./cmd/seid/main.go gentx my-validator 1000000000usei --chain-id sei-testnet
go run ./cmd/seid/main.go collect-gentxs
go run ./cmd/seid/main.go start

go run ./cmd/seid/main.go tx wasm store /Users/parya/Development/blockchain_proj/cw-plus/contracts/cw20-base/cw20_base.wasm --from my-validator --chain-id sei-testnet --gas auto --fees 5000usei