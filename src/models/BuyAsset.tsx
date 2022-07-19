export default class BuyAsset {
    assetId: string;
    assetAddress: string;
    constructor(
        {
            assetId,
            assetAddress
        } :{
            assetId: string,
            assetAddress: string
        }) {
            this.assetId = assetId;
            this.assetAddress = assetAddress;
    }

    isBuyOrder(): boolean {
        return this.assetAddress === '0x0000000000000000000000000000000000000000';
    }
}