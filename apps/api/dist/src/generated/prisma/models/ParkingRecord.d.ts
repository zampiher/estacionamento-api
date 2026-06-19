import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ParkingRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$ParkingRecordPayload>;
export type AggregateParkingRecord = {
    _count: ParkingRecordCountAggregateOutputType | null;
    _avg: ParkingRecordAvgAggregateOutputType | null;
    _sum: ParkingRecordSumAggregateOutputType | null;
    _min: ParkingRecordMinAggregateOutputType | null;
    _max: ParkingRecordMaxAggregateOutputType | null;
};
export type ParkingRecordAvgAggregateOutputType = {
    id: number | null;
    price: runtime.Decimal | null;
    carId: number | null;
    slotId: number | null;
};
export type ParkingRecordSumAggregateOutputType = {
    id: number | null;
    price: runtime.Decimal | null;
    carId: number | null;
    slotId: number | null;
};
export type ParkingRecordMinAggregateOutputType = {
    id: number | null;
    entryTime: Date | null;
    exitTime: Date | null;
    price: runtime.Decimal | null;
    carId: number | null;
    slotId: number | null;
};
export type ParkingRecordMaxAggregateOutputType = {
    id: number | null;
    entryTime: Date | null;
    exitTime: Date | null;
    price: runtime.Decimal | null;
    carId: number | null;
    slotId: number | null;
};
export type ParkingRecordCountAggregateOutputType = {
    id: number;
    entryTime: number;
    exitTime: number;
    price: number;
    carId: number;
    slotId: number;
    _all: number;
};
export type ParkingRecordAvgAggregateInputType = {
    id?: true;
    price?: true;
    carId?: true;
    slotId?: true;
};
export type ParkingRecordSumAggregateInputType = {
    id?: true;
    price?: true;
    carId?: true;
    slotId?: true;
};
export type ParkingRecordMinAggregateInputType = {
    id?: true;
    entryTime?: true;
    exitTime?: true;
    price?: true;
    carId?: true;
    slotId?: true;
};
export type ParkingRecordMaxAggregateInputType = {
    id?: true;
    entryTime?: true;
    exitTime?: true;
    price?: true;
    carId?: true;
    slotId?: true;
};
export type ParkingRecordCountAggregateInputType = {
    id?: true;
    entryTime?: true;
    exitTime?: true;
    price?: true;
    carId?: true;
    slotId?: true;
    _all?: true;
};
export type ParkingRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingRecordWhereInput;
    orderBy?: Prisma.ParkingRecordOrderByWithRelationInput | Prisma.ParkingRecordOrderByWithRelationInput[];
    cursor?: Prisma.ParkingRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ParkingRecordCountAggregateInputType;
    _avg?: ParkingRecordAvgAggregateInputType;
    _sum?: ParkingRecordSumAggregateInputType;
    _min?: ParkingRecordMinAggregateInputType;
    _max?: ParkingRecordMaxAggregateInputType;
};
export type GetParkingRecordAggregateType<T extends ParkingRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateParkingRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParkingRecord[P]> : Prisma.GetScalarType<T[P], AggregateParkingRecord[P]>;
};
export type ParkingRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingRecordWhereInput;
    orderBy?: Prisma.ParkingRecordOrderByWithAggregationInput | Prisma.ParkingRecordOrderByWithAggregationInput[];
    by: Prisma.ParkingRecordScalarFieldEnum[] | Prisma.ParkingRecordScalarFieldEnum;
    having?: Prisma.ParkingRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParkingRecordCountAggregateInputType | true;
    _avg?: ParkingRecordAvgAggregateInputType;
    _sum?: ParkingRecordSumAggregateInputType;
    _min?: ParkingRecordMinAggregateInputType;
    _max?: ParkingRecordMaxAggregateInputType;
};
export type ParkingRecordGroupByOutputType = {
    id: number;
    entryTime: Date;
    exitTime: Date | null;
    price: runtime.Decimal | null;
    carId: number;
    slotId: number;
    _count: ParkingRecordCountAggregateOutputType | null;
    _avg: ParkingRecordAvgAggregateOutputType | null;
    _sum: ParkingRecordSumAggregateOutputType | null;
    _min: ParkingRecordMinAggregateOutputType | null;
    _max: ParkingRecordMaxAggregateOutputType | null;
};
type GetParkingRecordGroupByPayload<T extends ParkingRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParkingRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParkingRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParkingRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParkingRecordGroupByOutputType[P]>;
}>>;
export type ParkingRecordWhereInput = {
    AND?: Prisma.ParkingRecordWhereInput | Prisma.ParkingRecordWhereInput[];
    OR?: Prisma.ParkingRecordWhereInput[];
    NOT?: Prisma.ParkingRecordWhereInput | Prisma.ParkingRecordWhereInput[];
    id?: Prisma.IntFilter<"ParkingRecord"> | number;
    entryTime?: Prisma.DateTimeFilter<"ParkingRecord"> | Date | string;
    exitTime?: Prisma.DateTimeNullableFilter<"ParkingRecord"> | Date | string | null;
    price?: Prisma.DecimalNullableFilter<"ParkingRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    carId?: Prisma.IntFilter<"ParkingRecord"> | number;
    slotId?: Prisma.IntFilter<"ParkingRecord"> | number;
    car?: Prisma.XOR<Prisma.CarScalarRelationFilter, Prisma.CarWhereInput>;
    slot?: Prisma.XOR<Prisma.CarSlotScalarRelationFilter, Prisma.CarSlotWhereInput>;
};
export type ParkingRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    entryTime?: Prisma.SortOrder;
    exitTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrderInput | Prisma.SortOrder;
    carId?: Prisma.SortOrder;
    slotId?: Prisma.SortOrder;
    car?: Prisma.CarOrderByWithRelationInput;
    slot?: Prisma.CarSlotOrderByWithRelationInput;
};
export type ParkingRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ParkingRecordWhereInput | Prisma.ParkingRecordWhereInput[];
    OR?: Prisma.ParkingRecordWhereInput[];
    NOT?: Prisma.ParkingRecordWhereInput | Prisma.ParkingRecordWhereInput[];
    entryTime?: Prisma.DateTimeFilter<"ParkingRecord"> | Date | string;
    exitTime?: Prisma.DateTimeNullableFilter<"ParkingRecord"> | Date | string | null;
    price?: Prisma.DecimalNullableFilter<"ParkingRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    carId?: Prisma.IntFilter<"ParkingRecord"> | number;
    slotId?: Prisma.IntFilter<"ParkingRecord"> | number;
    car?: Prisma.XOR<Prisma.CarScalarRelationFilter, Prisma.CarWhereInput>;
    slot?: Prisma.XOR<Prisma.CarSlotScalarRelationFilter, Prisma.CarSlotWhereInput>;
}, "id">;
export type ParkingRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    entryTime?: Prisma.SortOrder;
    exitTime?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrderInput | Prisma.SortOrder;
    carId?: Prisma.SortOrder;
    slotId?: Prisma.SortOrder;
    _count?: Prisma.ParkingRecordCountOrderByAggregateInput;
    _avg?: Prisma.ParkingRecordAvgOrderByAggregateInput;
    _max?: Prisma.ParkingRecordMaxOrderByAggregateInput;
    _min?: Prisma.ParkingRecordMinOrderByAggregateInput;
    _sum?: Prisma.ParkingRecordSumOrderByAggregateInput;
};
export type ParkingRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.ParkingRecordScalarWhereWithAggregatesInput | Prisma.ParkingRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.ParkingRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ParkingRecordScalarWhereWithAggregatesInput | Prisma.ParkingRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ParkingRecord"> | number;
    entryTime?: Prisma.DateTimeWithAggregatesFilter<"ParkingRecord"> | Date | string;
    exitTime?: Prisma.DateTimeNullableWithAggregatesFilter<"ParkingRecord"> | Date | string | null;
    price?: Prisma.DecimalNullableWithAggregatesFilter<"ParkingRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    carId?: Prisma.IntWithAggregatesFilter<"ParkingRecord"> | number;
    slotId?: Prisma.IntWithAggregatesFilter<"ParkingRecord"> | number;
};
export type ParkingRecordCreateInput = {
    entryTime?: Date | string;
    exitTime?: Date | string | null;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    car: Prisma.CarCreateNestedOneWithoutParkingRecordsInput;
    slot: Prisma.CarSlotCreateNestedOneWithoutParkingRecordsInput;
};
export type ParkingRecordUncheckedCreateInput = {
    id?: number;
    entryTime?: Date | string;
    exitTime?: Date | string | null;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    carId: number;
    slotId: number;
};
export type ParkingRecordUpdateInput = {
    entryTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exitTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    car?: Prisma.CarUpdateOneRequiredWithoutParkingRecordsNestedInput;
    slot?: Prisma.CarSlotUpdateOneRequiredWithoutParkingRecordsNestedInput;
};
export type ParkingRecordUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    entryTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exitTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    carId?: Prisma.IntFieldUpdateOperationsInput | number;
    slotId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ParkingRecordCreateManyInput = {
    id?: number;
    entryTime?: Date | string;
    exitTime?: Date | string | null;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    carId: number;
    slotId: number;
};
export type ParkingRecordUpdateManyMutationInput = {
    entryTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exitTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type ParkingRecordUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    entryTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exitTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    carId?: Prisma.IntFieldUpdateOperationsInput | number;
    slotId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ParkingRecordListRelationFilter = {
    every?: Prisma.ParkingRecordWhereInput;
    some?: Prisma.ParkingRecordWhereInput;
    none?: Prisma.ParkingRecordWhereInput;
};
export type ParkingRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ParkingRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entryTime?: Prisma.SortOrder;
    exitTime?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    carId?: Prisma.SortOrder;
    slotId?: Prisma.SortOrder;
};
export type ParkingRecordAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    carId?: Prisma.SortOrder;
    slotId?: Prisma.SortOrder;
};
export type ParkingRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entryTime?: Prisma.SortOrder;
    exitTime?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    carId?: Prisma.SortOrder;
    slotId?: Prisma.SortOrder;
};
export type ParkingRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entryTime?: Prisma.SortOrder;
    exitTime?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    carId?: Prisma.SortOrder;
    slotId?: Prisma.SortOrder;
};
export type ParkingRecordSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    carId?: Prisma.SortOrder;
    slotId?: Prisma.SortOrder;
};
export type ParkingRecordCreateNestedManyWithoutCarInput = {
    create?: Prisma.XOR<Prisma.ParkingRecordCreateWithoutCarInput, Prisma.ParkingRecordUncheckedCreateWithoutCarInput> | Prisma.ParkingRecordCreateWithoutCarInput[] | Prisma.ParkingRecordUncheckedCreateWithoutCarInput[];
    connectOrCreate?: Prisma.ParkingRecordCreateOrConnectWithoutCarInput | Prisma.ParkingRecordCreateOrConnectWithoutCarInput[];
    createMany?: Prisma.ParkingRecordCreateManyCarInputEnvelope;
    connect?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
};
export type ParkingRecordUncheckedCreateNestedManyWithoutCarInput = {
    create?: Prisma.XOR<Prisma.ParkingRecordCreateWithoutCarInput, Prisma.ParkingRecordUncheckedCreateWithoutCarInput> | Prisma.ParkingRecordCreateWithoutCarInput[] | Prisma.ParkingRecordUncheckedCreateWithoutCarInput[];
    connectOrCreate?: Prisma.ParkingRecordCreateOrConnectWithoutCarInput | Prisma.ParkingRecordCreateOrConnectWithoutCarInput[];
    createMany?: Prisma.ParkingRecordCreateManyCarInputEnvelope;
    connect?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
};
export type ParkingRecordUpdateManyWithoutCarNestedInput = {
    create?: Prisma.XOR<Prisma.ParkingRecordCreateWithoutCarInput, Prisma.ParkingRecordUncheckedCreateWithoutCarInput> | Prisma.ParkingRecordCreateWithoutCarInput[] | Prisma.ParkingRecordUncheckedCreateWithoutCarInput[];
    connectOrCreate?: Prisma.ParkingRecordCreateOrConnectWithoutCarInput | Prisma.ParkingRecordCreateOrConnectWithoutCarInput[];
    upsert?: Prisma.ParkingRecordUpsertWithWhereUniqueWithoutCarInput | Prisma.ParkingRecordUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: Prisma.ParkingRecordCreateManyCarInputEnvelope;
    set?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
    disconnect?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
    delete?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
    connect?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
    update?: Prisma.ParkingRecordUpdateWithWhereUniqueWithoutCarInput | Prisma.ParkingRecordUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?: Prisma.ParkingRecordUpdateManyWithWhereWithoutCarInput | Prisma.ParkingRecordUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: Prisma.ParkingRecordScalarWhereInput | Prisma.ParkingRecordScalarWhereInput[];
};
export type ParkingRecordUncheckedUpdateManyWithoutCarNestedInput = {
    create?: Prisma.XOR<Prisma.ParkingRecordCreateWithoutCarInput, Prisma.ParkingRecordUncheckedCreateWithoutCarInput> | Prisma.ParkingRecordCreateWithoutCarInput[] | Prisma.ParkingRecordUncheckedCreateWithoutCarInput[];
    connectOrCreate?: Prisma.ParkingRecordCreateOrConnectWithoutCarInput | Prisma.ParkingRecordCreateOrConnectWithoutCarInput[];
    upsert?: Prisma.ParkingRecordUpsertWithWhereUniqueWithoutCarInput | Prisma.ParkingRecordUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: Prisma.ParkingRecordCreateManyCarInputEnvelope;
    set?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
    disconnect?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
    delete?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
    connect?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
    update?: Prisma.ParkingRecordUpdateWithWhereUniqueWithoutCarInput | Prisma.ParkingRecordUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?: Prisma.ParkingRecordUpdateManyWithWhereWithoutCarInput | Prisma.ParkingRecordUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: Prisma.ParkingRecordScalarWhereInput | Prisma.ParkingRecordScalarWhereInput[];
};
export type ParkingRecordCreateNestedManyWithoutSlotInput = {
    create?: Prisma.XOR<Prisma.ParkingRecordCreateWithoutSlotInput, Prisma.ParkingRecordUncheckedCreateWithoutSlotInput> | Prisma.ParkingRecordCreateWithoutSlotInput[] | Prisma.ParkingRecordUncheckedCreateWithoutSlotInput[];
    connectOrCreate?: Prisma.ParkingRecordCreateOrConnectWithoutSlotInput | Prisma.ParkingRecordCreateOrConnectWithoutSlotInput[];
    createMany?: Prisma.ParkingRecordCreateManySlotInputEnvelope;
    connect?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
};
export type ParkingRecordUncheckedCreateNestedManyWithoutSlotInput = {
    create?: Prisma.XOR<Prisma.ParkingRecordCreateWithoutSlotInput, Prisma.ParkingRecordUncheckedCreateWithoutSlotInput> | Prisma.ParkingRecordCreateWithoutSlotInput[] | Prisma.ParkingRecordUncheckedCreateWithoutSlotInput[];
    connectOrCreate?: Prisma.ParkingRecordCreateOrConnectWithoutSlotInput | Prisma.ParkingRecordCreateOrConnectWithoutSlotInput[];
    createMany?: Prisma.ParkingRecordCreateManySlotInputEnvelope;
    connect?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
};
export type ParkingRecordUpdateManyWithoutSlotNestedInput = {
    create?: Prisma.XOR<Prisma.ParkingRecordCreateWithoutSlotInput, Prisma.ParkingRecordUncheckedCreateWithoutSlotInput> | Prisma.ParkingRecordCreateWithoutSlotInput[] | Prisma.ParkingRecordUncheckedCreateWithoutSlotInput[];
    connectOrCreate?: Prisma.ParkingRecordCreateOrConnectWithoutSlotInput | Prisma.ParkingRecordCreateOrConnectWithoutSlotInput[];
    upsert?: Prisma.ParkingRecordUpsertWithWhereUniqueWithoutSlotInput | Prisma.ParkingRecordUpsertWithWhereUniqueWithoutSlotInput[];
    createMany?: Prisma.ParkingRecordCreateManySlotInputEnvelope;
    set?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
    disconnect?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
    delete?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
    connect?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
    update?: Prisma.ParkingRecordUpdateWithWhereUniqueWithoutSlotInput | Prisma.ParkingRecordUpdateWithWhereUniqueWithoutSlotInput[];
    updateMany?: Prisma.ParkingRecordUpdateManyWithWhereWithoutSlotInput | Prisma.ParkingRecordUpdateManyWithWhereWithoutSlotInput[];
    deleteMany?: Prisma.ParkingRecordScalarWhereInput | Prisma.ParkingRecordScalarWhereInput[];
};
export type ParkingRecordUncheckedUpdateManyWithoutSlotNestedInput = {
    create?: Prisma.XOR<Prisma.ParkingRecordCreateWithoutSlotInput, Prisma.ParkingRecordUncheckedCreateWithoutSlotInput> | Prisma.ParkingRecordCreateWithoutSlotInput[] | Prisma.ParkingRecordUncheckedCreateWithoutSlotInput[];
    connectOrCreate?: Prisma.ParkingRecordCreateOrConnectWithoutSlotInput | Prisma.ParkingRecordCreateOrConnectWithoutSlotInput[];
    upsert?: Prisma.ParkingRecordUpsertWithWhereUniqueWithoutSlotInput | Prisma.ParkingRecordUpsertWithWhereUniqueWithoutSlotInput[];
    createMany?: Prisma.ParkingRecordCreateManySlotInputEnvelope;
    set?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
    disconnect?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
    delete?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
    connect?: Prisma.ParkingRecordWhereUniqueInput | Prisma.ParkingRecordWhereUniqueInput[];
    update?: Prisma.ParkingRecordUpdateWithWhereUniqueWithoutSlotInput | Prisma.ParkingRecordUpdateWithWhereUniqueWithoutSlotInput[];
    updateMany?: Prisma.ParkingRecordUpdateManyWithWhereWithoutSlotInput | Prisma.ParkingRecordUpdateManyWithWhereWithoutSlotInput[];
    deleteMany?: Prisma.ParkingRecordScalarWhereInput | Prisma.ParkingRecordScalarWhereInput[];
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ParkingRecordCreateWithoutCarInput = {
    entryTime?: Date | string;
    exitTime?: Date | string | null;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    slot: Prisma.CarSlotCreateNestedOneWithoutParkingRecordsInput;
};
export type ParkingRecordUncheckedCreateWithoutCarInput = {
    id?: number;
    entryTime?: Date | string;
    exitTime?: Date | string | null;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    slotId: number;
};
export type ParkingRecordCreateOrConnectWithoutCarInput = {
    where: Prisma.ParkingRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingRecordCreateWithoutCarInput, Prisma.ParkingRecordUncheckedCreateWithoutCarInput>;
};
export type ParkingRecordCreateManyCarInputEnvelope = {
    data: Prisma.ParkingRecordCreateManyCarInput | Prisma.ParkingRecordCreateManyCarInput[];
    skipDuplicates?: boolean;
};
export type ParkingRecordUpsertWithWhereUniqueWithoutCarInput = {
    where: Prisma.ParkingRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParkingRecordUpdateWithoutCarInput, Prisma.ParkingRecordUncheckedUpdateWithoutCarInput>;
    create: Prisma.XOR<Prisma.ParkingRecordCreateWithoutCarInput, Prisma.ParkingRecordUncheckedCreateWithoutCarInput>;
};
export type ParkingRecordUpdateWithWhereUniqueWithoutCarInput = {
    where: Prisma.ParkingRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParkingRecordUpdateWithoutCarInput, Prisma.ParkingRecordUncheckedUpdateWithoutCarInput>;
};
export type ParkingRecordUpdateManyWithWhereWithoutCarInput = {
    where: Prisma.ParkingRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.ParkingRecordUpdateManyMutationInput, Prisma.ParkingRecordUncheckedUpdateManyWithoutCarInput>;
};
export type ParkingRecordScalarWhereInput = {
    AND?: Prisma.ParkingRecordScalarWhereInput | Prisma.ParkingRecordScalarWhereInput[];
    OR?: Prisma.ParkingRecordScalarWhereInput[];
    NOT?: Prisma.ParkingRecordScalarWhereInput | Prisma.ParkingRecordScalarWhereInput[];
    id?: Prisma.IntFilter<"ParkingRecord"> | number;
    entryTime?: Prisma.DateTimeFilter<"ParkingRecord"> | Date | string;
    exitTime?: Prisma.DateTimeNullableFilter<"ParkingRecord"> | Date | string | null;
    price?: Prisma.DecimalNullableFilter<"ParkingRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    carId?: Prisma.IntFilter<"ParkingRecord"> | number;
    slotId?: Prisma.IntFilter<"ParkingRecord"> | number;
};
export type ParkingRecordCreateWithoutSlotInput = {
    entryTime?: Date | string;
    exitTime?: Date | string | null;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    car: Prisma.CarCreateNestedOneWithoutParkingRecordsInput;
};
export type ParkingRecordUncheckedCreateWithoutSlotInput = {
    id?: number;
    entryTime?: Date | string;
    exitTime?: Date | string | null;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    carId: number;
};
export type ParkingRecordCreateOrConnectWithoutSlotInput = {
    where: Prisma.ParkingRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingRecordCreateWithoutSlotInput, Prisma.ParkingRecordUncheckedCreateWithoutSlotInput>;
};
export type ParkingRecordCreateManySlotInputEnvelope = {
    data: Prisma.ParkingRecordCreateManySlotInput | Prisma.ParkingRecordCreateManySlotInput[];
    skipDuplicates?: boolean;
};
export type ParkingRecordUpsertWithWhereUniqueWithoutSlotInput = {
    where: Prisma.ParkingRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.ParkingRecordUpdateWithoutSlotInput, Prisma.ParkingRecordUncheckedUpdateWithoutSlotInput>;
    create: Prisma.XOR<Prisma.ParkingRecordCreateWithoutSlotInput, Prisma.ParkingRecordUncheckedCreateWithoutSlotInput>;
};
export type ParkingRecordUpdateWithWhereUniqueWithoutSlotInput = {
    where: Prisma.ParkingRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.ParkingRecordUpdateWithoutSlotInput, Prisma.ParkingRecordUncheckedUpdateWithoutSlotInput>;
};
export type ParkingRecordUpdateManyWithWhereWithoutSlotInput = {
    where: Prisma.ParkingRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.ParkingRecordUpdateManyMutationInput, Prisma.ParkingRecordUncheckedUpdateManyWithoutSlotInput>;
};
export type ParkingRecordCreateManyCarInput = {
    id?: number;
    entryTime?: Date | string;
    exitTime?: Date | string | null;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    slotId: number;
};
export type ParkingRecordUpdateWithoutCarInput = {
    entryTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exitTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    slot?: Prisma.CarSlotUpdateOneRequiredWithoutParkingRecordsNestedInput;
};
export type ParkingRecordUncheckedUpdateWithoutCarInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    entryTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exitTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    slotId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ParkingRecordUncheckedUpdateManyWithoutCarInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    entryTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exitTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    slotId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ParkingRecordCreateManySlotInput = {
    id?: number;
    entryTime?: Date | string;
    exitTime?: Date | string | null;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    carId: number;
};
export type ParkingRecordUpdateWithoutSlotInput = {
    entryTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exitTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    car?: Prisma.CarUpdateOneRequiredWithoutParkingRecordsNestedInput;
};
export type ParkingRecordUncheckedUpdateWithoutSlotInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    entryTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exitTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    carId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ParkingRecordUncheckedUpdateManyWithoutSlotInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    entryTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    exitTime?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    carId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ParkingRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    entryTime?: boolean;
    exitTime?: boolean;
    price?: boolean;
    carId?: boolean;
    slotId?: boolean;
    car?: boolean | Prisma.CarDefaultArgs<ExtArgs>;
    slot?: boolean | Prisma.CarSlotDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parkingRecord"]>;
export type ParkingRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    entryTime?: boolean;
    exitTime?: boolean;
    price?: boolean;
    carId?: boolean;
    slotId?: boolean;
    car?: boolean | Prisma.CarDefaultArgs<ExtArgs>;
    slot?: boolean | Prisma.CarSlotDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parkingRecord"]>;
export type ParkingRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    entryTime?: boolean;
    exitTime?: boolean;
    price?: boolean;
    carId?: boolean;
    slotId?: boolean;
    car?: boolean | Prisma.CarDefaultArgs<ExtArgs>;
    slot?: boolean | Prisma.CarSlotDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["parkingRecord"]>;
export type ParkingRecordSelectScalar = {
    id?: boolean;
    entryTime?: boolean;
    exitTime?: boolean;
    price?: boolean;
    carId?: boolean;
    slotId?: boolean;
};
export type ParkingRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "entryTime" | "exitTime" | "price" | "carId" | "slotId", ExtArgs["result"]["parkingRecord"]>;
export type ParkingRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    car?: boolean | Prisma.CarDefaultArgs<ExtArgs>;
    slot?: boolean | Prisma.CarSlotDefaultArgs<ExtArgs>;
};
export type ParkingRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    car?: boolean | Prisma.CarDefaultArgs<ExtArgs>;
    slot?: boolean | Prisma.CarSlotDefaultArgs<ExtArgs>;
};
export type ParkingRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    car?: boolean | Prisma.CarDefaultArgs<ExtArgs>;
    slot?: boolean | Prisma.CarSlotDefaultArgs<ExtArgs>;
};
export type $ParkingRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ParkingRecord";
    objects: {
        car: Prisma.$CarPayload<ExtArgs>;
        slot: Prisma.$CarSlotPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        entryTime: Date;
        exitTime: Date | null;
        price: runtime.Decimal | null;
        carId: number;
        slotId: number;
    }, ExtArgs["result"]["parkingRecord"]>;
    composites: {};
};
export type ParkingRecordGetPayload<S extends boolean | null | undefined | ParkingRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ParkingRecordPayload, S>;
export type ParkingRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ParkingRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParkingRecordCountAggregateInputType | true;
};
export interface ParkingRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ParkingRecord'];
        meta: {
            name: 'ParkingRecord';
        };
    };
    findUnique<T extends ParkingRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, ParkingRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ParkingRecordClient<runtime.Types.Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ParkingRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ParkingRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingRecordClient<runtime.Types.Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ParkingRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, ParkingRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__ParkingRecordClient<runtime.Types.Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ParkingRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ParkingRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ParkingRecordClient<runtime.Types.Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ParkingRecordFindManyArgs>(args?: Prisma.SelectSubset<T, ParkingRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ParkingRecordCreateArgs>(args: Prisma.SelectSubset<T, ParkingRecordCreateArgs<ExtArgs>>): Prisma.Prisma__ParkingRecordClient<runtime.Types.Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ParkingRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, ParkingRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ParkingRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ParkingRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ParkingRecordDeleteArgs>(args: Prisma.SelectSubset<T, ParkingRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__ParkingRecordClient<runtime.Types.Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ParkingRecordUpdateArgs>(args: Prisma.SelectSubset<T, ParkingRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__ParkingRecordClient<runtime.Types.Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ParkingRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, ParkingRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ParkingRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, ParkingRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ParkingRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ParkingRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ParkingRecordUpsertArgs>(args: Prisma.SelectSubset<T, ParkingRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__ParkingRecordClient<runtime.Types.Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ParkingRecordCountArgs>(args?: Prisma.Subset<T, ParkingRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParkingRecordCountAggregateOutputType> : number>;
    aggregate<T extends ParkingRecordAggregateArgs>(args: Prisma.Subset<T, ParkingRecordAggregateArgs>): Prisma.PrismaPromise<GetParkingRecordAggregateType<T>>;
    groupBy<T extends ParkingRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ParkingRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: ParkingRecordGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ParkingRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ParkingRecordFieldRefs;
}
export interface Prisma__ParkingRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    car<T extends Prisma.CarDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CarDefaultArgs<ExtArgs>>): Prisma.Prisma__CarClient<runtime.Types.Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    slot<T extends Prisma.CarSlotDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CarSlotDefaultArgs<ExtArgs>>): Prisma.Prisma__CarSlotClient<runtime.Types.Result.GetResult<Prisma.$CarSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ParkingRecordFieldRefs {
    readonly id: Prisma.FieldRef<"ParkingRecord", 'Int'>;
    readonly entryTime: Prisma.FieldRef<"ParkingRecord", 'DateTime'>;
    readonly exitTime: Prisma.FieldRef<"ParkingRecord", 'DateTime'>;
    readonly price: Prisma.FieldRef<"ParkingRecord", 'Decimal'>;
    readonly carId: Prisma.FieldRef<"ParkingRecord", 'Int'>;
    readonly slotId: Prisma.FieldRef<"ParkingRecord", 'Int'>;
}
export type ParkingRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingRecordSelect<ExtArgs> | null;
    omit?: Prisma.ParkingRecordOmit<ExtArgs> | null;
    include?: Prisma.ParkingRecordInclude<ExtArgs> | null;
    where: Prisma.ParkingRecordWhereUniqueInput;
};
export type ParkingRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingRecordSelect<ExtArgs> | null;
    omit?: Prisma.ParkingRecordOmit<ExtArgs> | null;
    include?: Prisma.ParkingRecordInclude<ExtArgs> | null;
    where: Prisma.ParkingRecordWhereUniqueInput;
};
export type ParkingRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingRecordSelect<ExtArgs> | null;
    omit?: Prisma.ParkingRecordOmit<ExtArgs> | null;
    include?: Prisma.ParkingRecordInclude<ExtArgs> | null;
    where?: Prisma.ParkingRecordWhereInput;
    orderBy?: Prisma.ParkingRecordOrderByWithRelationInput | Prisma.ParkingRecordOrderByWithRelationInput[];
    cursor?: Prisma.ParkingRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingRecordScalarFieldEnum | Prisma.ParkingRecordScalarFieldEnum[];
};
export type ParkingRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingRecordSelect<ExtArgs> | null;
    omit?: Prisma.ParkingRecordOmit<ExtArgs> | null;
    include?: Prisma.ParkingRecordInclude<ExtArgs> | null;
    where?: Prisma.ParkingRecordWhereInput;
    orderBy?: Prisma.ParkingRecordOrderByWithRelationInput | Prisma.ParkingRecordOrderByWithRelationInput[];
    cursor?: Prisma.ParkingRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingRecordScalarFieldEnum | Prisma.ParkingRecordScalarFieldEnum[];
};
export type ParkingRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingRecordSelect<ExtArgs> | null;
    omit?: Prisma.ParkingRecordOmit<ExtArgs> | null;
    include?: Prisma.ParkingRecordInclude<ExtArgs> | null;
    where?: Prisma.ParkingRecordWhereInput;
    orderBy?: Prisma.ParkingRecordOrderByWithRelationInput | Prisma.ParkingRecordOrderByWithRelationInput[];
    cursor?: Prisma.ParkingRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ParkingRecordScalarFieldEnum | Prisma.ParkingRecordScalarFieldEnum[];
};
export type ParkingRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingRecordSelect<ExtArgs> | null;
    omit?: Prisma.ParkingRecordOmit<ExtArgs> | null;
    include?: Prisma.ParkingRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingRecordCreateInput, Prisma.ParkingRecordUncheckedCreateInput>;
};
export type ParkingRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ParkingRecordCreateManyInput | Prisma.ParkingRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ParkingRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ParkingRecordOmit<ExtArgs> | null;
    data: Prisma.ParkingRecordCreateManyInput | Prisma.ParkingRecordCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ParkingRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ParkingRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingRecordSelect<ExtArgs> | null;
    omit?: Prisma.ParkingRecordOmit<ExtArgs> | null;
    include?: Prisma.ParkingRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingRecordUpdateInput, Prisma.ParkingRecordUncheckedUpdateInput>;
    where: Prisma.ParkingRecordWhereUniqueInput;
};
export type ParkingRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ParkingRecordUpdateManyMutationInput, Prisma.ParkingRecordUncheckedUpdateManyInput>;
    where?: Prisma.ParkingRecordWhereInput;
    limit?: number;
};
export type ParkingRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ParkingRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ParkingRecordUpdateManyMutationInput, Prisma.ParkingRecordUncheckedUpdateManyInput>;
    where?: Prisma.ParkingRecordWhereInput;
    limit?: number;
    include?: Prisma.ParkingRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ParkingRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingRecordSelect<ExtArgs> | null;
    omit?: Prisma.ParkingRecordOmit<ExtArgs> | null;
    include?: Prisma.ParkingRecordInclude<ExtArgs> | null;
    where: Prisma.ParkingRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.ParkingRecordCreateInput, Prisma.ParkingRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ParkingRecordUpdateInput, Prisma.ParkingRecordUncheckedUpdateInput>;
};
export type ParkingRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingRecordSelect<ExtArgs> | null;
    omit?: Prisma.ParkingRecordOmit<ExtArgs> | null;
    include?: Prisma.ParkingRecordInclude<ExtArgs> | null;
    where: Prisma.ParkingRecordWhereUniqueInput;
};
export type ParkingRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingRecordWhereInput;
    limit?: number;
};
export type ParkingRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ParkingRecordSelect<ExtArgs> | null;
    omit?: Prisma.ParkingRecordOmit<ExtArgs> | null;
    include?: Prisma.ParkingRecordInclude<ExtArgs> | null;
};
export {};
