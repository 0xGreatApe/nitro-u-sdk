const IsMainnet = false

const externalAddrs = {
	// https://data.chain.link/eth-usd
	CHAINLINK_ETHUSD_PROXY: "0x62CAe0FA2da220f43a51F86Db2EDb36DcA9A5A08",
	CHAINLINK_BTCUSD_PROXY: "0x0c9973e7a27d00e656B9f153348dA46CaD70d03d",
	CHAINLINK_OHM_PROXY: "0x52C9Eb2Cc68555357221CAe1e5f2dD956bC194E5", // USE LINK-USD for now
	CHAINLINK_OHM_INDEX_PROXY: "0x5f0423B1a6935dc5596e7A24d98532b67A0AeFd8",
	CHAINLINK_FLAG_HEALTH: "0x4da69F028a5790fCCAfe81a75C0D24f46ceCDd69",
	CHAINLINK_SEQUENCER_UPTIME_FEED: "0x4da69F028a5790fCCAfe81a75C0D24f46ceCDd69",
	WST_ETH: "0xEe01c0CD76354C383B8c7B4e65EA88D00B06f36f",
	TELLOR_MASTER: "0x3251838bd813fdf6a97D32781e011cce8D225d59",
	TELLOR_QUERY_ID: "0X0",

	WETH_ERC20: "0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681",
	REN_BTC: "NONE",
	GOHM: "NONE",
}

const gOHMParameters = {
	MCR: "1750000000000000000",
	CCR: "2200000000000000000",
	PERCENT_DIVISOR: 33,
	BORROWING_FEE_FLOOR: 125,
}

const vestaAddresses = {
	ADMIN_MULTI: "0xaD45b73CE1C0cBa2333Fe5f15Ac37df6E08f4111",
	YOU_SAFE: "0xaD45b73CE1C0cBa2333Fe5f15Ac37df6E08f4111", // TODO
	DEPLOYER: "0xaD45b73CE1C0cBa2333Fe5f15Ac37df6E08f4111",
}

const beneficiaries = {
	//CORE TEAM
	"0x56b421C0aAcA80be6447B7C330222C5A1CE27D4f": 2_100_000,
	"0x1e0573136e42F7896870dB0f2bBE76e24852915b": 2_100_000,
	"0xaE87d7c9637CF723d0D52a49Bfa024eC98c17657": 2_100_000,
	"0xaD45b73CE1C0cBa2333Fe5f15Ac37df6E08f4111": 210_000,

	//ANGELS
	"0x9c5083dd4838e120dbeac44c052179692aa5dac5": 1_000_000,
	"0x238eDaB57c91D1DB2f05FE85295B5F32d355567c": 600_000,
	"0x50664edE715e131F584D3E7EaAbd7818Bb20A068": 400_000,
	"0x73fF7a576e99c94a5BA3647ddfBacB5E27DDee8c": 200_000,
	"0x84740F97Aea62C5dC36756DFD9F749412534220E": 200_000,
	"0xd1BB2B2871730BC8EF4D86764148C8975b22ce1E": 40_000,
	"0xd193806c88661b72b74fc9295049ca523b17d791": 40_000,
	"0x5Ce7D83f7Aaac17a0Ad40540B37fC7a0b688FF44": 40_000,
	"0x5E12035d7B1EF1eBf0747c2967C3FB15c5A1102b": 40_000,
	"0x1bdeB77243DF30a65eF3b455E78E24dEbb8cd4b5": 40_000,
	"0xF8F21FfaC3136302af863455864B754c690a4A87": 40_000,
	"0xC45d45b54045074Ed12d1Fe127f714f8aCE46f8c": 40_000,
	"0x0c5a2c72c009252f0e7312f5a1ab87de02be6fbe": 280_000,
	"0xd7d9b4f521640cfefb4279ebca256ae8cdf97e55": 200_000,
	"0x8355248d7a9eb953e9e8e65efdf6b7d3e118eb59": 200_000,
	"0xdec0b52b61465fbe2116e2b997d6fe79bb344990": 40_000,
	"0x1202fBA35cc425c07202BAA4b17fA9a37D2dBeBb": 40_000,
	"0x6D3A2D0beA5a89a2F047473875497e414Ce11382": 40_000,
	"0x72A916702BD97923E55D78ea5A3F413dEC7F7F85": 80_000,
	"0xCa4556244c602b7aF051784c7e83b2070600F88E": 80_000,
	"0x9002F6a9882cB922128a3b34FB56BDc5FdB00163": 120_000,
	"0x7417cc585602d8e225b26e395a1efe40ec4a74a9": 120_000,
	"0xd93ca8a20fe736c1a258134840b47526686d7307": 100_000,
	"0x9de9fBc5DFa267610e7d8ba137FB4fe18cE39900": 100_000,
	"0x6af4a7b0cd9ff7ec82d15d4d662be5a874fa7a48": 100_000,
	"0x5015370cbacbbc97a13239e04dd23b4b0925ec63": 100_000,
	"0xd177031ea95177ebdbb3bfdcebf9bd09d08462fc": 80_000,
	"0xf0d66807004b4080e02026b50da1d3b214d2b4b6": 80_000,
	"0x75d4bdbf6593ed463e9625694272a0ff9a6d346f": 40_000,
	"0x57524e25EC15DdF60D1812062ac56f56610626dB": 40_000,
	"0x3cdfd2e8bc356054646cb2c91046c98be1a8ed61": 40_000,
	"0x5fc4684985c72fc9040b046bc3e2ef0e40992674": 100_000,
	"0x5f350bf5fee8e254d6077f8661e9c7b83a30364e": 40_000,
	"0x28391d08338847aa636d0cef50418ebad740a3de": 40_000,
	"0x2c55B7F6a84Df4d1Ce2D954b741B81568Aeb0552": 40_000,
	"0xcafaba406f29c584abdfea1d6338cbd1c4b6cc34": 40_000,
	"0x4cde7b68b9edac0a630259cd6b2712a18493286f": 40_000,
	"0x534105565F9E7fB227D5F2A9aDb9755eb49bFCC4": 40_000,
	"0xa5595fB3b9E2caE9075D61c5a1c5A6F5A862A1B1": 40_000,
	"0x6067e32439c70f9549ccb31fa858598b54c48899": 40_000,
	"0x191b6dcC45beBA5A4eF4F801c456048437f62e7f": 20_000,
	"0xEA44Fa9aBed34d2768Dc3FD0305c25bC8bb2CAA9": 20_000,
	"0x8f7f78a5e8834A3eCf798A72DfF6923318105C6B": 20_000,
	"0x78915ceb50028538e57d83f3b7d7064bf57b191f": 40_000,
	"0x7fCAf93cc92d51c490FFF701fb2C6197497a80db": 100_000,
	"0xbFeE463b73A6eCd009DF216fe5920f5Af678807B": 160_000,
}

const REDEMPTION_SAFETY = 0
const YOU_TOKEN_ONLY = false

const OUTPUT_FILE = "./mainnetDeployment/goerliDeploymentOutput.json"

const delay = ms => new Promise(res => setTimeout(res, ms))
const waitFunction = async () => {
	return delay(90000) // wait 90s
}

const GAS_PRICE = 1000000000 // 1 Gwei
const TX_CONFIRMATIONS = 1

const ETHERSCAN_BASE_URL = "https://goerli.arbiscan.io/address"

module.exports = {
	externalAddrs,
	vestaAddresses,
	beneficiaries,
	OUTPUT_FILE,
	waitFunction,
	GAS_PRICE,
	TX_CONFIRMATIONS,
	ETHERSCAN_BASE_URL,
	IsMainnet,
	REDEMPTION_SAFETY,
	YOU_TOKEN_ONLY,
	gOHMParameters,
}
