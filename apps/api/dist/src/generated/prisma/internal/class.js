"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.3.0",
    "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider     = \"prisma-client\"\n  output       = \"../src/generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id        Int       @id @default(autoincrement())\n  firstName String\n  lastName  String\n  cpf       String?   @unique\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @updatedAt\n  deletedAt DateTime?\n  cars      Car[]\n}\n\nmodel Car {\n  id             Int             @id @default(autoincrement())\n  brand          String?\n  model          String?\n  plate          String          @unique\n  createdAt      DateTime        @default(now())\n  updatedAt      DateTime        @updatedAt\n  deletedAt      DateTime?\n  userId         Int?\n  year           Int?\n  color          String?\n  user           User?           @relation(fields: [userId], references: [id])\n  slots          CarSlot[]\n  parkingRecords ParkingRecord[]\n}\n\nmodel CarSlot {\n  id             Int             @id @default(autoincrement())\n  price          Decimal\n  createdAt      DateTime        @default(now())\n  updatedAt      DateTime        @updatedAt\n  deletedAt      DateTime?\n  carId          Int?\n  car            Car?            @relation(fields: [carId], references: [id])\n  parkingRecords ParkingRecord[]\n}\n\nmodel ParkingRecord {\n  id        Int       @id @default(autoincrement())\n  entryTime DateTime  @default(now())\n  exitTime  DateTime?\n  price     Decimal?\n  carId     Int\n  slotId    Int\n  car       Car       @relation(fields: [carId], references: [id])\n  slot      CarSlot   @relation(fields: [slotId], references: [id])\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"firstName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cpf\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"cars\",\"kind\":\"object\",\"type\":\"Car\",\"relationName\":\"CarToUser\"}],\"dbName\":null},\"Car\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"brand\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"model\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"plate\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"year\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"color\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"CarToUser\"},{\"name\":\"slots\",\"kind\":\"object\",\"type\":\"CarSlot\",\"relationName\":\"CarToCarSlot\"},{\"name\":\"parkingRecords\",\"kind\":\"object\",\"type\":\"ParkingRecord\",\"relationName\":\"CarToParkingRecord\"}],\"dbName\":null},\"CarSlot\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"carId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"car\",\"kind\":\"object\",\"type\":\"Car\",\"relationName\":\"CarToCarSlot\"},{\"name\":\"parkingRecords\",\"kind\":\"object\",\"type\":\"ParkingRecord\",\"relationName\":\"CarSlotToParkingRecord\"}],\"dbName\":null},\"ParkingRecord\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"entryTime\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"exitTime\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"carId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"slotId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"car\",\"kind\":\"object\",\"type\":\"Car\",\"relationName\":\"CarToParkingRecord\"},{\"name\":\"slot\",\"kind\":\"object\",\"type\":\"CarSlot\",\"relationName\":\"CarSlotToParkingRecord\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map