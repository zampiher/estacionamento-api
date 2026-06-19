import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CarSlotModel = runtime.Types.Result.DefaultSelection<Prisma.$CarSlotPayload>;
export type AggregateCarSlot = {
    _count: CarSlotCountAggregateOutputType | null;
    _avg: CarSlotAvgAggregateOutputType | null;
    _sum: CarSlotSumAggregateOutputType | null;
    _min: CarSlotMinAggregateOutputType | null;
    _max: CarSlotMaxAggregateOutputType | null;
};
export type CarSlotAvgAggregateOutputType = {
    id: number | null;
    price: runtime.Decimal | null;
    carId: number | null;
};
export type CarSlotSumAggregateOutputType = {
    id: number | null;
    price: runtime.Decimal | null;
    carId: number | null;
};
export type CarSlotMinAggregateOutputType = {
    id: number | null;
    price: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    carId: number | null;
};
export type CarSlotMaxAggregateOutputType = {
    id: number | null;
    price: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    carId: number | null;
};
export type CarSlotCountAggregateOutputType = {
    id: number;
    price: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    carId: number;
    _all: number;
};
export type CarSlotAvgAggregateInputType = {
    id?: true;
    price?: true;
    carId?: true;
};
export type CarSlotSumAggregateInputType = {
    id?: true;
    price?: true;
    carId?: true;
};
export type CarSlotMinAggregateInputType = {
    id?: true;
    price?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    carId?: true;
};
export type CarSlotMaxAggregateInputType = {
    id?: true;
    price?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    carId?: true;
};
export type CarSlotCountAggregateInputType = {
    id?: true;
    price?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    carId?: true;
    _all?: true;
};
export type CarSlotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CarSlotWhereInput;
    orderBy?: Prisma.CarSlotOrderByWithRelationInput | Prisma.CarSlotOrderByWithRelationInput[];
    cursor?: Prisma.CarSlotWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CarSlotCountAggregateInputType;
    _avg?: CarSlotAvgAggregateInputType;
    _sum?: CarSlotSumAggregateInputType;
    _min?: CarSlotMinAggregateInputType;
    _max?: CarSlotMaxAggregateInputType;
};
export type GetCarSlotAggregateType<T extends CarSlotAggregateArgs> = {
    [P in keyof T & keyof AggregateCarSlot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCarSlot[P]> : Prisma.GetScalarType<T[P], AggregateCarSlot[P]>;
};
export type CarSlotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CarSlotWhereInput;
    orderBy?: Prisma.CarSlotOrderByWithAggregationInput | Prisma.CarSlotOrderByWithAggregationInput[];
    by: Prisma.CarSlotScalarFieldEnum[] | Prisma.CarSlotScalarFieldEnum;
    having?: Prisma.CarSlotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CarSlotCountAggregateInputType | true;
    _avg?: CarSlotAvgAggregateInputType;
    _sum?: CarSlotSumAggregateInputType;
    _min?: CarSlotMinAggregateInputType;
    _max?: CarSlotMaxAggregateInputType;
};
export type CarSlotGroupByOutputType = {
    id: number;
    price: runtime.Decimal;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    carId: number | null;
    _count: CarSlotCountAggregateOutputType | null;
    _avg: CarSlotAvgAggregateOutputType | null;
    _sum: CarSlotSumAggregateOutputType | null;
    _min: CarSlotMinAggregateOutputType | null;
    _max: CarSlotMaxAggregateOutputType | null;
};
type GetCarSlotGroupByPayload<T extends CarSlotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CarSlotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CarSlotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CarSlotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CarSlotGroupByOutputType[P]>;
}>>;
export type CarSlotWhereInput = {
    AND?: Prisma.CarSlotWhereInput | Prisma.CarSlotWhereInput[];
    OR?: Prisma.CarSlotWhereInput[];
    NOT?: Prisma.CarSlotWhereInput | Prisma.CarSlotWhereInput[];
    id?: Prisma.IntFilter<"CarSlot"> | number;
    price?: Prisma.DecimalFilter<"CarSlot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"CarSlot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CarSlot"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"CarSlot"> | Date | string | null;
    carId?: Prisma.IntNullableFilter<"CarSlot"> | number | null;
    car?: Prisma.XOR<Prisma.CarNullableScalarRelationFilter, Prisma.CarWhereInput> | null;
    parkingRecords?: Prisma.ParkingRecordListRelationFilter;
};
export type CarSlotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    carId?: Prisma.SortOrderInput | Prisma.SortOrder;
    car?: Prisma.CarOrderByWithRelationInput;
    parkingRecords?: Prisma.ParkingRecordOrderByRelationAggregateInput;
};
export type CarSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.CarSlotWhereInput | Prisma.CarSlotWhereInput[];
    OR?: Prisma.CarSlotWhereInput[];
    NOT?: Prisma.CarSlotWhereInput | Prisma.CarSlotWhereInput[];
    price?: Prisma.DecimalFilter<"CarSlot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"CarSlot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CarSlot"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"CarSlot"> | Date | string | null;
    carId?: Prisma.IntNullableFilter<"CarSlot"> | number | null;
    car?: Prisma.XOR<Prisma.CarNullableScalarRelationFilter, Prisma.CarWhereInput> | null;
    parkingRecords?: Prisma.ParkingRecordListRelationFilter;
}, "id">;
export type CarSlotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    carId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CarSlotCountOrderByAggregateInput;
    _avg?: Prisma.CarSlotAvgOrderByAggregateInput;
    _max?: Prisma.CarSlotMaxOrderByAggregateInput;
    _min?: Prisma.CarSlotMinOrderByAggregateInput;
    _sum?: Prisma.CarSlotSumOrderByAggregateInput;
};
export type CarSlotScalarWhereWithAggregatesInput = {
    AND?: Prisma.CarSlotScalarWhereWithAggregatesInput | Prisma.CarSlotScalarWhereWithAggregatesInput[];
    OR?: Prisma.CarSlotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CarSlotScalarWhereWithAggregatesInput | Prisma.CarSlotScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"CarSlot"> | number;
    price?: Prisma.DecimalWithAggregatesFilter<"CarSlot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CarSlot"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CarSlot"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CarSlot"> | Date | string | null;
    carId?: Prisma.IntNullableWithAggregatesFilter<"CarSlot"> | number | null;
};
export type CarSlotCreateInput = {
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    car?: Prisma.CarCreateNestedOneWithoutSlotsInput;
    parkingRecords?: Prisma.ParkingRecordCreateNestedManyWithoutSlotInput;
};
export type CarSlotUncheckedCreateInput = {
    id?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    carId?: number | null;
    parkingRecords?: Prisma.ParkingRecordUncheckedCreateNestedManyWithoutSlotInput;
};
export type CarSlotUpdateInput = {
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    car?: Prisma.CarUpdateOneWithoutSlotsNestedInput;
    parkingRecords?: Prisma.ParkingRecordUpdateManyWithoutSlotNestedInput;
};
export type CarSlotUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    parkingRecords?: Prisma.ParkingRecordUncheckedUpdateManyWithoutSlotNestedInput;
};
export type CarSlotCreateManyInput = {
    id?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    carId?: number | null;
};
export type CarSlotUpdateManyMutationInput = {
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CarSlotUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type CarSlotListRelationFilter = {
    every?: Prisma.CarSlotWhereInput;
    some?: Prisma.CarSlotWhereInput;
    none?: Prisma.CarSlotWhereInput;
};
export type CarSlotOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CarSlotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    carId?: Prisma.SortOrder;
};
export type CarSlotAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    carId?: Prisma.SortOrder;
};
export type CarSlotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    carId?: Prisma.SortOrder;
};
export type CarSlotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    carId?: Prisma.SortOrder;
};
export type CarSlotSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    carId?: Prisma.SortOrder;
};
export type CarSlotScalarRelationFilter = {
    is?: Prisma.CarSlotWhereInput;
    isNot?: Prisma.CarSlotWhereInput;
};
export type CarSlotCreateNestedManyWithoutCarInput = {
    create?: Prisma.XOR<Prisma.CarSlotCreateWithoutCarInput, Prisma.CarSlotUncheckedCreateWithoutCarInput> | Prisma.CarSlotCreateWithoutCarInput[] | Prisma.CarSlotUncheckedCreateWithoutCarInput[];
    connectOrCreate?: Prisma.CarSlotCreateOrConnectWithoutCarInput | Prisma.CarSlotCreateOrConnectWithoutCarInput[];
    createMany?: Prisma.CarSlotCreateManyCarInputEnvelope;
    connect?: Prisma.CarSlotWhereUniqueInput | Prisma.CarSlotWhereUniqueInput[];
};
export type CarSlotUncheckedCreateNestedManyWithoutCarInput = {
    create?: Prisma.XOR<Prisma.CarSlotCreateWithoutCarInput, Prisma.CarSlotUncheckedCreateWithoutCarInput> | Prisma.CarSlotCreateWithoutCarInput[] | Prisma.CarSlotUncheckedCreateWithoutCarInput[];
    connectOrCreate?: Prisma.CarSlotCreateOrConnectWithoutCarInput | Prisma.CarSlotCreateOrConnectWithoutCarInput[];
    createMany?: Prisma.CarSlotCreateManyCarInputEnvelope;
    connect?: Prisma.CarSlotWhereUniqueInput | Prisma.CarSlotWhereUniqueInput[];
};
export type CarSlotUpdateManyWithoutCarNestedInput = {
    create?: Prisma.XOR<Prisma.CarSlotCreateWithoutCarInput, Prisma.CarSlotUncheckedCreateWithoutCarInput> | Prisma.CarSlotCreateWithoutCarInput[] | Prisma.CarSlotUncheckedCreateWithoutCarInput[];
    connectOrCreate?: Prisma.CarSlotCreateOrConnectWithoutCarInput | Prisma.CarSlotCreateOrConnectWithoutCarInput[];
    upsert?: Prisma.CarSlotUpsertWithWhereUniqueWithoutCarInput | Prisma.CarSlotUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: Prisma.CarSlotCreateManyCarInputEnvelope;
    set?: Prisma.CarSlotWhereUniqueInput | Prisma.CarSlotWhereUniqueInput[];
    disconnect?: Prisma.CarSlotWhereUniqueInput | Prisma.CarSlotWhereUniqueInput[];
    delete?: Prisma.CarSlotWhereUniqueInput | Prisma.CarSlotWhereUniqueInput[];
    connect?: Prisma.CarSlotWhereUniqueInput | Prisma.CarSlotWhereUniqueInput[];
    update?: Prisma.CarSlotUpdateWithWhereUniqueWithoutCarInput | Prisma.CarSlotUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?: Prisma.CarSlotUpdateManyWithWhereWithoutCarInput | Prisma.CarSlotUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: Prisma.CarSlotScalarWhereInput | Prisma.CarSlotScalarWhereInput[];
};
export type CarSlotUncheckedUpdateManyWithoutCarNestedInput = {
    create?: Prisma.XOR<Prisma.CarSlotCreateWithoutCarInput, Prisma.CarSlotUncheckedCreateWithoutCarInput> | Prisma.CarSlotCreateWithoutCarInput[] | Prisma.CarSlotUncheckedCreateWithoutCarInput[];
    connectOrCreate?: Prisma.CarSlotCreateOrConnectWithoutCarInput | Prisma.CarSlotCreateOrConnectWithoutCarInput[];
    upsert?: Prisma.CarSlotUpsertWithWhereUniqueWithoutCarInput | Prisma.CarSlotUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: Prisma.CarSlotCreateManyCarInputEnvelope;
    set?: Prisma.CarSlotWhereUniqueInput | Prisma.CarSlotWhereUniqueInput[];
    disconnect?: Prisma.CarSlotWhereUniqueInput | Prisma.CarSlotWhereUniqueInput[];
    delete?: Prisma.CarSlotWhereUniqueInput | Prisma.CarSlotWhereUniqueInput[];
    connect?: Prisma.CarSlotWhereUniqueInput | Prisma.CarSlotWhereUniqueInput[];
    update?: Prisma.CarSlotUpdateWithWhereUniqueWithoutCarInput | Prisma.CarSlotUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?: Prisma.CarSlotUpdateManyWithWhereWithoutCarInput | Prisma.CarSlotUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: Prisma.CarSlotScalarWhereInput | Prisma.CarSlotScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type CarSlotCreateNestedOneWithoutParkingRecordsInput = {
    create?: Prisma.XOR<Prisma.CarSlotCreateWithoutParkingRecordsInput, Prisma.CarSlotUncheckedCreateWithoutParkingRecordsInput>;
    connectOrCreate?: Prisma.CarSlotCreateOrConnectWithoutParkingRecordsInput;
    connect?: Prisma.CarSlotWhereUniqueInput;
};
export type CarSlotUpdateOneRequiredWithoutParkingRecordsNestedInput = {
    create?: Prisma.XOR<Prisma.CarSlotCreateWithoutParkingRecordsInput, Prisma.CarSlotUncheckedCreateWithoutParkingRecordsInput>;
    connectOrCreate?: Prisma.CarSlotCreateOrConnectWithoutParkingRecordsInput;
    upsert?: Prisma.CarSlotUpsertWithoutParkingRecordsInput;
    connect?: Prisma.CarSlotWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CarSlotUpdateToOneWithWhereWithoutParkingRecordsInput, Prisma.CarSlotUpdateWithoutParkingRecordsInput>, Prisma.CarSlotUncheckedUpdateWithoutParkingRecordsInput>;
};
export type CarSlotCreateWithoutCarInput = {
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    parkingRecords?: Prisma.ParkingRecordCreateNestedManyWithoutSlotInput;
};
export type CarSlotUncheckedCreateWithoutCarInput = {
    id?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    parkingRecords?: Prisma.ParkingRecordUncheckedCreateNestedManyWithoutSlotInput;
};
export type CarSlotCreateOrConnectWithoutCarInput = {
    where: Prisma.CarSlotWhereUniqueInput;
    create: Prisma.XOR<Prisma.CarSlotCreateWithoutCarInput, Prisma.CarSlotUncheckedCreateWithoutCarInput>;
};
export type CarSlotCreateManyCarInputEnvelope = {
    data: Prisma.CarSlotCreateManyCarInput | Prisma.CarSlotCreateManyCarInput[];
    skipDuplicates?: boolean;
};
export type CarSlotUpsertWithWhereUniqueWithoutCarInput = {
    where: Prisma.CarSlotWhereUniqueInput;
    update: Prisma.XOR<Prisma.CarSlotUpdateWithoutCarInput, Prisma.CarSlotUncheckedUpdateWithoutCarInput>;
    create: Prisma.XOR<Prisma.CarSlotCreateWithoutCarInput, Prisma.CarSlotUncheckedCreateWithoutCarInput>;
};
export type CarSlotUpdateWithWhereUniqueWithoutCarInput = {
    where: Prisma.CarSlotWhereUniqueInput;
    data: Prisma.XOR<Prisma.CarSlotUpdateWithoutCarInput, Prisma.CarSlotUncheckedUpdateWithoutCarInput>;
};
export type CarSlotUpdateManyWithWhereWithoutCarInput = {
    where: Prisma.CarSlotScalarWhereInput;
    data: Prisma.XOR<Prisma.CarSlotUpdateManyMutationInput, Prisma.CarSlotUncheckedUpdateManyWithoutCarInput>;
};
export type CarSlotScalarWhereInput = {
    AND?: Prisma.CarSlotScalarWhereInput | Prisma.CarSlotScalarWhereInput[];
    OR?: Prisma.CarSlotScalarWhereInput[];
    NOT?: Prisma.CarSlotScalarWhereInput | Prisma.CarSlotScalarWhereInput[];
    id?: Prisma.IntFilter<"CarSlot"> | number;
    price?: Prisma.DecimalFilter<"CarSlot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"CarSlot"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CarSlot"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"CarSlot"> | Date | string | null;
    carId?: Prisma.IntNullableFilter<"CarSlot"> | number | null;
};
export type CarSlotCreateWithoutParkingRecordsInput = {
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    car?: Prisma.CarCreateNestedOneWithoutSlotsInput;
};
export type CarSlotUncheckedCreateWithoutParkingRecordsInput = {
    id?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    carId?: number | null;
};
export type CarSlotCreateOrConnectWithoutParkingRecordsInput = {
    where: Prisma.CarSlotWhereUniqueInput;
    create: Prisma.XOR<Prisma.CarSlotCreateWithoutParkingRecordsInput, Prisma.CarSlotUncheckedCreateWithoutParkingRecordsInput>;
};
export type CarSlotUpsertWithoutParkingRecordsInput = {
    update: Prisma.XOR<Prisma.CarSlotUpdateWithoutParkingRecordsInput, Prisma.CarSlotUncheckedUpdateWithoutParkingRecordsInput>;
    create: Prisma.XOR<Prisma.CarSlotCreateWithoutParkingRecordsInput, Prisma.CarSlotUncheckedCreateWithoutParkingRecordsInput>;
    where?: Prisma.CarSlotWhereInput;
};
export type CarSlotUpdateToOneWithWhereWithoutParkingRecordsInput = {
    where?: Prisma.CarSlotWhereInput;
    data: Prisma.XOR<Prisma.CarSlotUpdateWithoutParkingRecordsInput, Prisma.CarSlotUncheckedUpdateWithoutParkingRecordsInput>;
};
export type CarSlotUpdateWithoutParkingRecordsInput = {
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    car?: Prisma.CarUpdateOneWithoutSlotsNestedInput;
};
export type CarSlotUncheckedUpdateWithoutParkingRecordsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    carId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type CarSlotCreateManyCarInput = {
    id?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type CarSlotUpdateWithoutCarInput = {
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    parkingRecords?: Prisma.ParkingRecordUpdateManyWithoutSlotNestedInput;
};
export type CarSlotUncheckedUpdateWithoutCarInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    parkingRecords?: Prisma.ParkingRecordUncheckedUpdateManyWithoutSlotNestedInput;
};
export type CarSlotUncheckedUpdateManyWithoutCarInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type CarSlotCountOutputType = {
    parkingRecords: number;
};
export type CarSlotCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    parkingRecords?: boolean | CarSlotCountOutputTypeCountParkingRecordsArgs;
};
export type CarSlotCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSlotCountOutputTypeSelect<ExtArgs> | null;
};
export type CarSlotCountOutputTypeCountParkingRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingRecordWhereInput;
};
export type CarSlotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    price?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    carId?: boolean;
    car?: boolean | Prisma.CarSlot$carArgs<ExtArgs>;
    parkingRecords?: boolean | Prisma.CarSlot$parkingRecordsArgs<ExtArgs>;
    _count?: boolean | Prisma.CarSlotCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["carSlot"]>;
export type CarSlotSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    price?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    carId?: boolean;
    car?: boolean | Prisma.CarSlot$carArgs<ExtArgs>;
}, ExtArgs["result"]["carSlot"]>;
export type CarSlotSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    price?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    carId?: boolean;
    car?: boolean | Prisma.CarSlot$carArgs<ExtArgs>;
}, ExtArgs["result"]["carSlot"]>;
export type CarSlotSelectScalar = {
    id?: boolean;
    price?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    carId?: boolean;
};
export type CarSlotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "price" | "createdAt" | "updatedAt" | "deletedAt" | "carId", ExtArgs["result"]["carSlot"]>;
export type CarSlotInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    car?: boolean | Prisma.CarSlot$carArgs<ExtArgs>;
    parkingRecords?: boolean | Prisma.CarSlot$parkingRecordsArgs<ExtArgs>;
    _count?: boolean | Prisma.CarSlotCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CarSlotIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    car?: boolean | Prisma.CarSlot$carArgs<ExtArgs>;
};
export type CarSlotIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    car?: boolean | Prisma.CarSlot$carArgs<ExtArgs>;
};
export type $CarSlotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CarSlot";
    objects: {
        car: Prisma.$CarPayload<ExtArgs> | null;
        parkingRecords: Prisma.$ParkingRecordPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        price: runtime.Decimal;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        carId: number | null;
    }, ExtArgs["result"]["carSlot"]>;
    composites: {};
};
export type CarSlotGetPayload<S extends boolean | null | undefined | CarSlotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CarSlotPayload, S>;
export type CarSlotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CarSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CarSlotCountAggregateInputType | true;
};
export interface CarSlotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CarSlot'];
        meta: {
            name: 'CarSlot';
        };
    };
    findUnique<T extends CarSlotFindUniqueArgs>(args: Prisma.SelectSubset<T, CarSlotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CarSlotClient<runtime.Types.Result.GetResult<Prisma.$CarSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CarSlotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CarSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CarSlotClient<runtime.Types.Result.GetResult<Prisma.$CarSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CarSlotFindFirstArgs>(args?: Prisma.SelectSubset<T, CarSlotFindFirstArgs<ExtArgs>>): Prisma.Prisma__CarSlotClient<runtime.Types.Result.GetResult<Prisma.$CarSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CarSlotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CarSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CarSlotClient<runtime.Types.Result.GetResult<Prisma.$CarSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CarSlotFindManyArgs>(args?: Prisma.SelectSubset<T, CarSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CarSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CarSlotCreateArgs>(args: Prisma.SelectSubset<T, CarSlotCreateArgs<ExtArgs>>): Prisma.Prisma__CarSlotClient<runtime.Types.Result.GetResult<Prisma.$CarSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CarSlotCreateManyArgs>(args?: Prisma.SelectSubset<T, CarSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CarSlotCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CarSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CarSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CarSlotDeleteArgs>(args: Prisma.SelectSubset<T, CarSlotDeleteArgs<ExtArgs>>): Prisma.Prisma__CarSlotClient<runtime.Types.Result.GetResult<Prisma.$CarSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CarSlotUpdateArgs>(args: Prisma.SelectSubset<T, CarSlotUpdateArgs<ExtArgs>>): Prisma.Prisma__CarSlotClient<runtime.Types.Result.GetResult<Prisma.$CarSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CarSlotDeleteManyArgs>(args?: Prisma.SelectSubset<T, CarSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CarSlotUpdateManyArgs>(args: Prisma.SelectSubset<T, CarSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CarSlotUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CarSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CarSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CarSlotUpsertArgs>(args: Prisma.SelectSubset<T, CarSlotUpsertArgs<ExtArgs>>): Prisma.Prisma__CarSlotClient<runtime.Types.Result.GetResult<Prisma.$CarSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CarSlotCountArgs>(args?: Prisma.Subset<T, CarSlotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CarSlotCountAggregateOutputType> : number>;
    aggregate<T extends CarSlotAggregateArgs>(args: Prisma.Subset<T, CarSlotAggregateArgs>): Prisma.PrismaPromise<GetCarSlotAggregateType<T>>;
    groupBy<T extends CarSlotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CarSlotGroupByArgs['orderBy'];
    } : {
        orderBy?: CarSlotGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CarSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CarSlotFieldRefs;
}
export interface Prisma__CarSlotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    car<T extends Prisma.CarSlot$carArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CarSlot$carArgs<ExtArgs>>): Prisma.Prisma__CarClient<runtime.Types.Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    parkingRecords<T extends Prisma.CarSlot$parkingRecordsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CarSlot$parkingRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CarSlotFieldRefs {
    readonly id: Prisma.FieldRef<"CarSlot", 'Int'>;
    readonly price: Prisma.FieldRef<"CarSlot", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"CarSlot", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CarSlot", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"CarSlot", 'DateTime'>;
    readonly carId: Prisma.FieldRef<"CarSlot", 'Int'>;
}
export type CarSlotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSlotSelect<ExtArgs> | null;
    omit?: Prisma.CarSlotOmit<ExtArgs> | null;
    include?: Prisma.CarSlotInclude<ExtArgs> | null;
    where: Prisma.CarSlotWhereUniqueInput;
};
export type CarSlotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSlotSelect<ExtArgs> | null;
    omit?: Prisma.CarSlotOmit<ExtArgs> | null;
    include?: Prisma.CarSlotInclude<ExtArgs> | null;
    where: Prisma.CarSlotWhereUniqueInput;
};
export type CarSlotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSlotSelect<ExtArgs> | null;
    omit?: Prisma.CarSlotOmit<ExtArgs> | null;
    include?: Prisma.CarSlotInclude<ExtArgs> | null;
    where?: Prisma.CarSlotWhereInput;
    orderBy?: Prisma.CarSlotOrderByWithRelationInput | Prisma.CarSlotOrderByWithRelationInput[];
    cursor?: Prisma.CarSlotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarSlotScalarFieldEnum | Prisma.CarSlotScalarFieldEnum[];
};
export type CarSlotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSlotSelect<ExtArgs> | null;
    omit?: Prisma.CarSlotOmit<ExtArgs> | null;
    include?: Prisma.CarSlotInclude<ExtArgs> | null;
    where?: Prisma.CarSlotWhereInput;
    orderBy?: Prisma.CarSlotOrderByWithRelationInput | Prisma.CarSlotOrderByWithRelationInput[];
    cursor?: Prisma.CarSlotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarSlotScalarFieldEnum | Prisma.CarSlotScalarFieldEnum[];
};
export type CarSlotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSlotSelect<ExtArgs> | null;
    omit?: Prisma.CarSlotOmit<ExtArgs> | null;
    include?: Prisma.CarSlotInclude<ExtArgs> | null;
    where?: Prisma.CarSlotWhereInput;
    orderBy?: Prisma.CarSlotOrderByWithRelationInput | Prisma.CarSlotOrderByWithRelationInput[];
    cursor?: Prisma.CarSlotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarSlotScalarFieldEnum | Prisma.CarSlotScalarFieldEnum[];
};
export type CarSlotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSlotSelect<ExtArgs> | null;
    omit?: Prisma.CarSlotOmit<ExtArgs> | null;
    include?: Prisma.CarSlotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CarSlotCreateInput, Prisma.CarSlotUncheckedCreateInput>;
};
export type CarSlotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CarSlotCreateManyInput | Prisma.CarSlotCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CarSlotCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSlotSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CarSlotOmit<ExtArgs> | null;
    data: Prisma.CarSlotCreateManyInput | Prisma.CarSlotCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CarSlotIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CarSlotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSlotSelect<ExtArgs> | null;
    omit?: Prisma.CarSlotOmit<ExtArgs> | null;
    include?: Prisma.CarSlotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CarSlotUpdateInput, Prisma.CarSlotUncheckedUpdateInput>;
    where: Prisma.CarSlotWhereUniqueInput;
};
export type CarSlotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CarSlotUpdateManyMutationInput, Prisma.CarSlotUncheckedUpdateManyInput>;
    where?: Prisma.CarSlotWhereInput;
    limit?: number;
};
export type CarSlotUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSlotSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CarSlotOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CarSlotUpdateManyMutationInput, Prisma.CarSlotUncheckedUpdateManyInput>;
    where?: Prisma.CarSlotWhereInput;
    limit?: number;
    include?: Prisma.CarSlotIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CarSlotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSlotSelect<ExtArgs> | null;
    omit?: Prisma.CarSlotOmit<ExtArgs> | null;
    include?: Prisma.CarSlotInclude<ExtArgs> | null;
    where: Prisma.CarSlotWhereUniqueInput;
    create: Prisma.XOR<Prisma.CarSlotCreateInput, Prisma.CarSlotUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CarSlotUpdateInput, Prisma.CarSlotUncheckedUpdateInput>;
};
export type CarSlotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSlotSelect<ExtArgs> | null;
    omit?: Prisma.CarSlotOmit<ExtArgs> | null;
    include?: Prisma.CarSlotInclude<ExtArgs> | null;
    where: Prisma.CarSlotWhereUniqueInput;
};
export type CarSlotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CarSlotWhereInput;
    limit?: number;
};
export type CarSlot$carArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSelect<ExtArgs> | null;
    omit?: Prisma.CarOmit<ExtArgs> | null;
    include?: Prisma.CarInclude<ExtArgs> | null;
    where?: Prisma.CarWhereInput;
};
export type CarSlot$parkingRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CarSlotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSlotSelect<ExtArgs> | null;
    omit?: Prisma.CarSlotOmit<ExtArgs> | null;
    include?: Prisma.CarSlotInclude<ExtArgs> | null;
};
export {};
