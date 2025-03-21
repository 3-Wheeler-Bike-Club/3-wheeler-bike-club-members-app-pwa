import { SchemaItem } from "@ethsign/sp-sdk"

export const attester: `0x${string}` = "0x56aD1c5746cdFCfA1E0B7960b9A95BECb57dF6f8"
export const memberBadgeSchemaID: `0x${string}` = "0x609"
export const memberReceiptSchemaID: `0x${string}` = "0xa"
export const memberCreditScoreSchemaID: `0x${string}` = "0x12"
export const hirePurchaseReceiptSchemaID: `0x${string}` = "0xf"
export const hirePurchaseCreditScoreSchemaID: `0x${string}` = "0x17bc"



export const memberInvoiceSchemaData: SchemaItem[] = [{"name":"amount","type":"uint256"},{"name":"week","type":"string"}]
export const memberReceiptSchemaData: SchemaItem[] = [{"name":"amount","type":"uint256"},{"name":"currency","type":"string"},{"name":"week","type":"string"}, {"name":"score","type":"uint256"}]
export const hirePurchaseReceiptSchemaData: SchemaItem[] = [{"name":"amount","type":"uint256"},{"name":"currency","type":"string"},{"name":"week","type":"string"}, {"name":"score","type":"uint256"}]