import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CarModel = runtime.Types.Result.DefaultSelection<Prisma.$CarPayload>;
export type AggregateCar = {
    _count: CarCountAggregateOutputType | null;
    _avg: CarAvgAggregateOutputType | null;
    _sum: CarSumAggregateOutputType | null;
    _min: CarMinAggregateOutputType | null;
    _max: CarMaxAggregateOutputType | null;
};
export type CarAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    year: number | null;
};
export type CarSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    year: number | null;
};
export type CarMinAggregateOutputType = {
    id: number | null;
    brand: string | null;
    model: string | null;
    plate: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    userId: number | null;
    year: number | null;
    color: string | null;
};
export type CarMaxAggregateOutputType = {
    id: number | null;
    brand: string | null;
    model: string | null;
    plate: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    userId: number | null;
    year: number | null;
    color: string | null;
};
export type CarCountAggregateOutputType = {
    id: number;
    brand: number;
    model: number;
    plate: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    userId: number;
    year: number;
    color: number;
    _all: number;
};
export type CarAvgAggregateInputType = {
    id?: true;
    userId?: true;
    year?: true;
};
export type CarSumAggregateInputType = {
    id?: true;
    userId?: true;
    year?: true;
};
export type CarMinAggregateInputType = {
    id?: true;
    brand?: true;
    model?: true;
    plate?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    userId?: true;
    year?: true;
    color?: true;
};
export type CarMaxAggregateInputType = {
    id?: true;
    brand?: true;
    model?: true;
    plate?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    userId?: true;
    year?: true;
    color?: true;
};
export type CarCountAggregateInputType = {
    id?: true;
    brand?: true;
    model?: true;
    plate?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    userId?: true;
    year?: true;
    color?: true;
    _all?: true;
};
export type CarAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CarWhereInput;
    orderBy?: Prisma.CarOrderByWithRelationInput | Prisma.CarOrderByWithRelationInput[];
    cursor?: Prisma.CarWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CarCountAggregateInputType;
    _avg?: CarAvgAggregateInputType;
    _sum?: CarSumAggregateInputType;
    _min?: CarMinAggregateInputType;
    _max?: CarMaxAggregateInputType;
};
export type GetCarAggregateType<T extends CarAggregateArgs> = {
    [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCar[P]> : Prisma.GetScalarType<T[P], AggregateCar[P]>;
};
export type CarGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CarWhereInput;
    orderBy?: Prisma.CarOrderByWithAggregationInput | Prisma.CarOrderByWithAggregationInput[];
    by: Prisma.CarScalarFieldEnum[] | Prisma.CarScalarFieldEnum;
    having?: Prisma.CarScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CarCountAggregateInputType | true;
    _avg?: CarAvgAggregateInputType;
    _sum?: CarSumAggregateInputType;
    _min?: CarMinAggregateInputType;
    _max?: CarMaxAggregateInputType;
};
export type CarGroupByOutputType = {
    id: number;
    brand: string | null;
    model: string | null;
    plate: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    userId: number | null;
    year: number | null;
    color: string | null;
    _count: CarCountAggregateOutputType | null;
    _avg: CarAvgAggregateOutputType | null;
    _sum: CarSumAggregateOutputType | null;
    _min: CarMinAggregateOutputType | null;
    _max: CarMaxAggregateOutputType | null;
};
type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CarGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CarGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CarGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CarGroupByOutputType[P]>;
}>>;
export type CarWhereInput = {
    AND?: Prisma.CarWhereInput | Prisma.CarWhereInput[];
    OR?: Prisma.CarWhereInput[];
    NOT?: Prisma.CarWhereInput | Prisma.CarWhereInput[];
    id?: Prisma.IntFilter<"Car"> | number;
    brand?: Prisma.StringNullableFilter<"Car"> | string | null;
    model?: Prisma.StringNullableFilter<"Car"> | string | null;
    plate?: Prisma.StringFilter<"Car"> | string;
    createdAt?: Prisma.DateTimeFilter<"Car"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Car"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Car"> | Date | string | null;
    userId?: Prisma.IntNullableFilter<"Car"> | number | null;
    year?: Prisma.IntNullableFilter<"Car"> | number | null;
    color?: Prisma.StringNullableFilter<"Car"> | string | null;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    slots?: Prisma.CarSlotListRelationFilter;
    parkingRecords?: Prisma.ParkingRecordListRelationFilter;
};
export type CarOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    brand?: Prisma.SortOrderInput | Prisma.SortOrder;
    model?: Prisma.SortOrderInput | Prisma.SortOrder;
    plate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    year?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    slots?: Prisma.CarSlotOrderByRelationAggregateInput;
    parkingRecords?: Prisma.ParkingRecordOrderByRelationAggregateInput;
};
export type CarWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    plate?: string;
    AND?: Prisma.CarWhereInput | Prisma.CarWhereInput[];
    OR?: Prisma.CarWhereInput[];
    NOT?: Prisma.CarWhereInput | Prisma.CarWhereInput[];
    brand?: Prisma.StringNullableFilter<"Car"> | string | null;
    model?: Prisma.StringNullableFilter<"Car"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Car"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Car"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Car"> | Date | string | null;
    userId?: Prisma.IntNullableFilter<"Car"> | number | null;
    year?: Prisma.IntNullableFilter<"Car"> | number | null;
    color?: Prisma.StringNullableFilter<"Car"> | string | null;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    slots?: Prisma.CarSlotListRelationFilter;
    parkingRecords?: Prisma.ParkingRecordListRelationFilter;
}, "id" | "plate">;
export type CarOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    brand?: Prisma.SortOrderInput | Prisma.SortOrder;
    model?: Prisma.SortOrderInput | Prisma.SortOrder;
    plate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    year?: Prisma.SortOrderInput | Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CarCountOrderByAggregateInput;
    _avg?: Prisma.CarAvgOrderByAggregateInput;
    _max?: Prisma.CarMaxOrderByAggregateInput;
    _min?: Prisma.CarMinOrderByAggregateInput;
    _sum?: Prisma.CarSumOrderByAggregateInput;
};
export type CarScalarWhereWithAggregatesInput = {
    AND?: Prisma.CarScalarWhereWithAggregatesInput | Prisma.CarScalarWhereWithAggregatesInput[];
    OR?: Prisma.CarScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CarScalarWhereWithAggregatesInput | Prisma.CarScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Car"> | number;
    brand?: Prisma.StringNullableWithAggregatesFilter<"Car"> | string | null;
    model?: Prisma.StringNullableWithAggregatesFilter<"Car"> | string | null;
    plate?: Prisma.StringWithAggregatesFilter<"Car"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Car"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Car"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Car"> | Date | string | null;
    userId?: Prisma.IntNullableWithAggregatesFilter<"Car"> | number | null;
    year?: Prisma.IntNullableWithAggregatesFilter<"Car"> | number | null;
    color?: Prisma.StringNullableWithAggregatesFilter<"Car"> | string | null;
};
export type CarCreateInput = {
    brand?: string | null;
    model?: string | null;
    plate: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    year?: number | null;
    color?: string | null;
    user?: Prisma.UserCreateNestedOneWithoutCarsInput;
    slots?: Prisma.CarSlotCreateNestedManyWithoutCarInput;
    parkingRecords?: Prisma.ParkingRecordCreateNestedManyWithoutCarInput;
};
export type CarUncheckedCreateInput = {
    id?: number;
    brand?: string | null;
    model?: string | null;
    plate: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    userId?: number | null;
    year?: number | null;
    color?: string | null;
    slots?: Prisma.CarSlotUncheckedCreateNestedManyWithoutCarInput;
    parkingRecords?: Prisma.ParkingRecordUncheckedCreateNestedManyWithoutCarInput;
};
export type CarUpdateInput = {
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneWithoutCarsNestedInput;
    slots?: Prisma.CarSlotUpdateManyWithoutCarNestedInput;
    parkingRecords?: Prisma.ParkingRecordUpdateManyWithoutCarNestedInput;
};
export type CarUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    slots?: Prisma.CarSlotUncheckedUpdateManyWithoutCarNestedInput;
    parkingRecords?: Prisma.ParkingRecordUncheckedUpdateManyWithoutCarNestedInput;
};
export type CarCreateManyInput = {
    id?: number;
    brand?: string | null;
    model?: string | null;
    plate: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    userId?: number | null;
    year?: number | null;
    color?: string | null;
};
export type CarUpdateManyMutationInput = {
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CarUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CarListRelationFilter = {
    every?: Prisma.CarWhereInput;
    some?: Prisma.CarWhereInput;
    none?: Prisma.CarWhereInput;
};
export type CarOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CarCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    plate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
};
export type CarAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
};
export type CarMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    plate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
};
export type CarMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    plate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
};
export type CarSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
};
export type CarNullableScalarRelationFilter = {
    is?: Prisma.CarWhereInput | null;
    isNot?: Prisma.CarWhereInput | null;
};
export type CarScalarRelationFilter = {
    is?: Prisma.CarWhereInput;
    isNot?: Prisma.CarWhereInput;
};
export type CarCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CarCreateWithoutUserInput, Prisma.CarUncheckedCreateWithoutUserInput> | Prisma.CarCreateWithoutUserInput[] | Prisma.CarUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CarCreateOrConnectWithoutUserInput | Prisma.CarCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CarCreateManyUserInputEnvelope;
    connect?: Prisma.CarWhereUniqueInput | Prisma.CarWhereUniqueInput[];
};
export type CarUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CarCreateWithoutUserInput, Prisma.CarUncheckedCreateWithoutUserInput> | Prisma.CarCreateWithoutUserInput[] | Prisma.CarUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CarCreateOrConnectWithoutUserInput | Prisma.CarCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CarCreateManyUserInputEnvelope;
    connect?: Prisma.CarWhereUniqueInput | Prisma.CarWhereUniqueInput[];
};
export type CarUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CarCreateWithoutUserInput, Prisma.CarUncheckedCreateWithoutUserInput> | Prisma.CarCreateWithoutUserInput[] | Prisma.CarUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CarCreateOrConnectWithoutUserInput | Prisma.CarCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CarUpsertWithWhereUniqueWithoutUserInput | Prisma.CarUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CarCreateManyUserInputEnvelope;
    set?: Prisma.CarWhereUniqueInput | Prisma.CarWhereUniqueInput[];
    disconnect?: Prisma.CarWhereUniqueInput | Prisma.CarWhereUniqueInput[];
    delete?: Prisma.CarWhereUniqueInput | Prisma.CarWhereUniqueInput[];
    connect?: Prisma.CarWhereUniqueInput | Prisma.CarWhereUniqueInput[];
    update?: Prisma.CarUpdateWithWhereUniqueWithoutUserInput | Prisma.CarUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CarUpdateManyWithWhereWithoutUserInput | Prisma.CarUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CarScalarWhereInput | Prisma.CarScalarWhereInput[];
};
export type CarUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CarCreateWithoutUserInput, Prisma.CarUncheckedCreateWithoutUserInput> | Prisma.CarCreateWithoutUserInput[] | Prisma.CarUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CarCreateOrConnectWithoutUserInput | Prisma.CarCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CarUpsertWithWhereUniqueWithoutUserInput | Prisma.CarUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CarCreateManyUserInputEnvelope;
    set?: Prisma.CarWhereUniqueInput | Prisma.CarWhereUniqueInput[];
    disconnect?: Prisma.CarWhereUniqueInput | Prisma.CarWhereUniqueInput[];
    delete?: Prisma.CarWhereUniqueInput | Prisma.CarWhereUniqueInput[];
    connect?: Prisma.CarWhereUniqueInput | Prisma.CarWhereUniqueInput[];
    update?: Prisma.CarUpdateWithWhereUniqueWithoutUserInput | Prisma.CarUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CarUpdateManyWithWhereWithoutUserInput | Prisma.CarUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CarScalarWhereInput | Prisma.CarScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CarCreateNestedOneWithoutSlotsInput = {
    create?: Prisma.XOR<Prisma.CarCreateWithoutSlotsInput, Prisma.CarUncheckedCreateWithoutSlotsInput>;
    connectOrCreate?: Prisma.CarCreateOrConnectWithoutSlotsInput;
    connect?: Prisma.CarWhereUniqueInput;
};
export type CarUpdateOneWithoutSlotsNestedInput = {
    create?: Prisma.XOR<Prisma.CarCreateWithoutSlotsInput, Prisma.CarUncheckedCreateWithoutSlotsInput>;
    connectOrCreate?: Prisma.CarCreateOrConnectWithoutSlotsInput;
    upsert?: Prisma.CarUpsertWithoutSlotsInput;
    disconnect?: Prisma.CarWhereInput | boolean;
    delete?: Prisma.CarWhereInput | boolean;
    connect?: Prisma.CarWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CarUpdateToOneWithWhereWithoutSlotsInput, Prisma.CarUpdateWithoutSlotsInput>, Prisma.CarUncheckedUpdateWithoutSlotsInput>;
};
export type CarCreateNestedOneWithoutParkingRecordsInput = {
    create?: Prisma.XOR<Prisma.CarCreateWithoutParkingRecordsInput, Prisma.CarUncheckedCreateWithoutParkingRecordsInput>;
    connectOrCreate?: Prisma.CarCreateOrConnectWithoutParkingRecordsInput;
    connect?: Prisma.CarWhereUniqueInput;
};
export type CarUpdateOneRequiredWithoutParkingRecordsNestedInput = {
    create?: Prisma.XOR<Prisma.CarCreateWithoutParkingRecordsInput, Prisma.CarUncheckedCreateWithoutParkingRecordsInput>;
    connectOrCreate?: Prisma.CarCreateOrConnectWithoutParkingRecordsInput;
    upsert?: Prisma.CarUpsertWithoutParkingRecordsInput;
    connect?: Prisma.CarWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CarUpdateToOneWithWhereWithoutParkingRecordsInput, Prisma.CarUpdateWithoutParkingRecordsInput>, Prisma.CarUncheckedUpdateWithoutParkingRecordsInput>;
};
export type CarCreateWithoutUserInput = {
    brand?: string | null;
    model?: string | null;
    plate: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    year?: number | null;
    color?: string | null;
    slots?: Prisma.CarSlotCreateNestedManyWithoutCarInput;
    parkingRecords?: Prisma.ParkingRecordCreateNestedManyWithoutCarInput;
};
export type CarUncheckedCreateWithoutUserInput = {
    id?: number;
    brand?: string | null;
    model?: string | null;
    plate: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    year?: number | null;
    color?: string | null;
    slots?: Prisma.CarSlotUncheckedCreateNestedManyWithoutCarInput;
    parkingRecords?: Prisma.ParkingRecordUncheckedCreateNestedManyWithoutCarInput;
};
export type CarCreateOrConnectWithoutUserInput = {
    where: Prisma.CarWhereUniqueInput;
    create: Prisma.XOR<Prisma.CarCreateWithoutUserInput, Prisma.CarUncheckedCreateWithoutUserInput>;
};
export type CarCreateManyUserInputEnvelope = {
    data: Prisma.CarCreateManyUserInput | Prisma.CarCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CarUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CarWhereUniqueInput;
    update: Prisma.XOR<Prisma.CarUpdateWithoutUserInput, Prisma.CarUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CarCreateWithoutUserInput, Prisma.CarUncheckedCreateWithoutUserInput>;
};
export type CarUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CarWhereUniqueInput;
    data: Prisma.XOR<Prisma.CarUpdateWithoutUserInput, Prisma.CarUncheckedUpdateWithoutUserInput>;
};
export type CarUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CarScalarWhereInput;
    data: Prisma.XOR<Prisma.CarUpdateManyMutationInput, Prisma.CarUncheckedUpdateManyWithoutUserInput>;
};
export type CarScalarWhereInput = {
    AND?: Prisma.CarScalarWhereInput | Prisma.CarScalarWhereInput[];
    OR?: Prisma.CarScalarWhereInput[];
    NOT?: Prisma.CarScalarWhereInput | Prisma.CarScalarWhereInput[];
    id?: Prisma.IntFilter<"Car"> | number;
    brand?: Prisma.StringNullableFilter<"Car"> | string | null;
    model?: Prisma.StringNullableFilter<"Car"> | string | null;
    plate?: Prisma.StringFilter<"Car"> | string;
    createdAt?: Prisma.DateTimeFilter<"Car"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Car"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Car"> | Date | string | null;
    userId?: Prisma.IntNullableFilter<"Car"> | number | null;
    year?: Prisma.IntNullableFilter<"Car"> | number | null;
    color?: Prisma.StringNullableFilter<"Car"> | string | null;
};
export type CarCreateWithoutSlotsInput = {
    brand?: string | null;
    model?: string | null;
    plate: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    year?: number | null;
    color?: string | null;
    user?: Prisma.UserCreateNestedOneWithoutCarsInput;
    parkingRecords?: Prisma.ParkingRecordCreateNestedManyWithoutCarInput;
};
export type CarUncheckedCreateWithoutSlotsInput = {
    id?: number;
    brand?: string | null;
    model?: string | null;
    plate: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    userId?: number | null;
    year?: number | null;
    color?: string | null;
    parkingRecords?: Prisma.ParkingRecordUncheckedCreateNestedManyWithoutCarInput;
};
export type CarCreateOrConnectWithoutSlotsInput = {
    where: Prisma.CarWhereUniqueInput;
    create: Prisma.XOR<Prisma.CarCreateWithoutSlotsInput, Prisma.CarUncheckedCreateWithoutSlotsInput>;
};
export type CarUpsertWithoutSlotsInput = {
    update: Prisma.XOR<Prisma.CarUpdateWithoutSlotsInput, Prisma.CarUncheckedUpdateWithoutSlotsInput>;
    create: Prisma.XOR<Prisma.CarCreateWithoutSlotsInput, Prisma.CarUncheckedCreateWithoutSlotsInput>;
    where?: Prisma.CarWhereInput;
};
export type CarUpdateToOneWithWhereWithoutSlotsInput = {
    where?: Prisma.CarWhereInput;
    data: Prisma.XOR<Prisma.CarUpdateWithoutSlotsInput, Prisma.CarUncheckedUpdateWithoutSlotsInput>;
};
export type CarUpdateWithoutSlotsInput = {
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneWithoutCarsNestedInput;
    parkingRecords?: Prisma.ParkingRecordUpdateManyWithoutCarNestedInput;
};
export type CarUncheckedUpdateWithoutSlotsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parkingRecords?: Prisma.ParkingRecordUncheckedUpdateManyWithoutCarNestedInput;
};
export type CarCreateWithoutParkingRecordsInput = {
    brand?: string | null;
    model?: string | null;
    plate: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    year?: number | null;
    color?: string | null;
    user?: Prisma.UserCreateNestedOneWithoutCarsInput;
    slots?: Prisma.CarSlotCreateNestedManyWithoutCarInput;
};
export type CarUncheckedCreateWithoutParkingRecordsInput = {
    id?: number;
    brand?: string | null;
    model?: string | null;
    plate: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    userId?: number | null;
    year?: number | null;
    color?: string | null;
    slots?: Prisma.CarSlotUncheckedCreateNestedManyWithoutCarInput;
};
export type CarCreateOrConnectWithoutParkingRecordsInput = {
    where: Prisma.CarWhereUniqueInput;
    create: Prisma.XOR<Prisma.CarCreateWithoutParkingRecordsInput, Prisma.CarUncheckedCreateWithoutParkingRecordsInput>;
};
export type CarUpsertWithoutParkingRecordsInput = {
    update: Prisma.XOR<Prisma.CarUpdateWithoutParkingRecordsInput, Prisma.CarUncheckedUpdateWithoutParkingRecordsInput>;
    create: Prisma.XOR<Prisma.CarCreateWithoutParkingRecordsInput, Prisma.CarUncheckedCreateWithoutParkingRecordsInput>;
    where?: Prisma.CarWhereInput;
};
export type CarUpdateToOneWithWhereWithoutParkingRecordsInput = {
    where?: Prisma.CarWhereInput;
    data: Prisma.XOR<Prisma.CarUpdateWithoutParkingRecordsInput, Prisma.CarUncheckedUpdateWithoutParkingRecordsInput>;
};
export type CarUpdateWithoutParkingRecordsInput = {
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneWithoutCarsNestedInput;
    slots?: Prisma.CarSlotUpdateManyWithoutCarNestedInput;
};
export type CarUncheckedUpdateWithoutParkingRecordsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    slots?: Prisma.CarSlotUncheckedUpdateManyWithoutCarNestedInput;
};
export type CarCreateManyUserInput = {
    id?: number;
    brand?: string | null;
    model?: string | null;
    plate: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    year?: number | null;
    color?: string | null;
};
export type CarUpdateWithoutUserInput = {
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    slots?: Prisma.CarSlotUpdateManyWithoutCarNestedInput;
    parkingRecords?: Prisma.ParkingRecordUpdateManyWithoutCarNestedInput;
};
export type CarUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    slots?: Prisma.CarSlotUncheckedUpdateManyWithoutCarNestedInput;
    parkingRecords?: Prisma.ParkingRecordUncheckedUpdateManyWithoutCarNestedInput;
};
export type CarUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    brand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plate?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    year?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CarCountOutputType = {
    slots: number;
    parkingRecords: number;
};
export type CarCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    slots?: boolean | CarCountOutputTypeCountSlotsArgs;
    parkingRecords?: boolean | CarCountOutputTypeCountParkingRecordsArgs;
};
export type CarCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarCountOutputTypeSelect<ExtArgs> | null;
};
export type CarCountOutputTypeCountSlotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CarSlotWhereInput;
};
export type CarCountOutputTypeCountParkingRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ParkingRecordWhereInput;
};
export type CarSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    brand?: boolean;
    model?: boolean;
    plate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    userId?: boolean;
    year?: boolean;
    color?: boolean;
    user?: boolean | Prisma.Car$userArgs<ExtArgs>;
    slots?: boolean | Prisma.Car$slotsArgs<ExtArgs>;
    parkingRecords?: boolean | Prisma.Car$parkingRecordsArgs<ExtArgs>;
    _count?: boolean | Prisma.CarCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["car"]>;
export type CarSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    brand?: boolean;
    model?: boolean;
    plate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    userId?: boolean;
    year?: boolean;
    color?: boolean;
    user?: boolean | Prisma.Car$userArgs<ExtArgs>;
}, ExtArgs["result"]["car"]>;
export type CarSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    brand?: boolean;
    model?: boolean;
    plate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    userId?: boolean;
    year?: boolean;
    color?: boolean;
    user?: boolean | Prisma.Car$userArgs<ExtArgs>;
}, ExtArgs["result"]["car"]>;
export type CarSelectScalar = {
    id?: boolean;
    brand?: boolean;
    model?: boolean;
    plate?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    userId?: boolean;
    year?: boolean;
    color?: boolean;
};
export type CarOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "brand" | "model" | "plate" | "createdAt" | "updatedAt" | "deletedAt" | "userId" | "year" | "color", ExtArgs["result"]["car"]>;
export type CarInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Car$userArgs<ExtArgs>;
    slots?: boolean | Prisma.Car$slotsArgs<ExtArgs>;
    parkingRecords?: boolean | Prisma.Car$parkingRecordsArgs<ExtArgs>;
    _count?: boolean | Prisma.CarCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CarIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Car$userArgs<ExtArgs>;
};
export type CarIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Car$userArgs<ExtArgs>;
};
export type $CarPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Car";
    objects: {
        user: Prisma.$UserPayload<ExtArgs> | null;
        slots: Prisma.$CarSlotPayload<ExtArgs>[];
        parkingRecords: Prisma.$ParkingRecordPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        brand: string | null;
        model: string | null;
        plate: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: number | null;
        year: number | null;
        color: string | null;
    }, ExtArgs["result"]["car"]>;
    composites: {};
};
export type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CarPayload, S>;
export type CarCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CarCountAggregateInputType | true;
};
export interface CarDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Car'];
        meta: {
            name: 'Car';
        };
    };
    findUnique<T extends CarFindUniqueArgs>(args: Prisma.SelectSubset<T, CarFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CarClient<runtime.Types.Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CarClient<runtime.Types.Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CarFindFirstArgs>(args?: Prisma.SelectSubset<T, CarFindFirstArgs<ExtArgs>>): Prisma.Prisma__CarClient<runtime.Types.Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CarClient<runtime.Types.Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CarFindManyArgs>(args?: Prisma.SelectSubset<T, CarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CarCreateArgs>(args: Prisma.SelectSubset<T, CarCreateArgs<ExtArgs>>): Prisma.Prisma__CarClient<runtime.Types.Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CarCreateManyArgs>(args?: Prisma.SelectSubset<T, CarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CarDeleteArgs>(args: Prisma.SelectSubset<T, CarDeleteArgs<ExtArgs>>): Prisma.Prisma__CarClient<runtime.Types.Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CarUpdateArgs>(args: Prisma.SelectSubset<T, CarUpdateArgs<ExtArgs>>): Prisma.Prisma__CarClient<runtime.Types.Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CarDeleteManyArgs>(args?: Prisma.SelectSubset<T, CarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CarUpdateManyArgs>(args: Prisma.SelectSubset<T, CarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CarUpsertArgs>(args: Prisma.SelectSubset<T, CarUpsertArgs<ExtArgs>>): Prisma.Prisma__CarClient<runtime.Types.Result.GetResult<Prisma.$CarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CarCountArgs>(args?: Prisma.Subset<T, CarCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CarCountAggregateOutputType> : number>;
    aggregate<T extends CarAggregateArgs>(args: Prisma.Subset<T, CarAggregateArgs>): Prisma.PrismaPromise<GetCarAggregateType<T>>;
    groupBy<T extends CarGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CarGroupByArgs['orderBy'];
    } : {
        orderBy?: CarGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CarFieldRefs;
}
export interface Prisma__CarClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.Car$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Car$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    slots<T extends Prisma.Car$slotsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Car$slotsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CarSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    parkingRecords<T extends Prisma.Car$parkingRecordsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Car$parkingRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ParkingRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CarFieldRefs {
    readonly id: Prisma.FieldRef<"Car", 'Int'>;
    readonly brand: Prisma.FieldRef<"Car", 'String'>;
    readonly model: Prisma.FieldRef<"Car", 'String'>;
    readonly plate: Prisma.FieldRef<"Car", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Car", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Car", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Car", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"Car", 'Int'>;
    readonly year: Prisma.FieldRef<"Car", 'Int'>;
    readonly color: Prisma.FieldRef<"Car", 'String'>;
}
export type CarFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSelect<ExtArgs> | null;
    omit?: Prisma.CarOmit<ExtArgs> | null;
    include?: Prisma.CarInclude<ExtArgs> | null;
    where: Prisma.CarWhereUniqueInput;
};
export type CarFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSelect<ExtArgs> | null;
    omit?: Prisma.CarOmit<ExtArgs> | null;
    include?: Prisma.CarInclude<ExtArgs> | null;
    where: Prisma.CarWhereUniqueInput;
};
export type CarFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSelect<ExtArgs> | null;
    omit?: Prisma.CarOmit<ExtArgs> | null;
    include?: Prisma.CarInclude<ExtArgs> | null;
    where?: Prisma.CarWhereInput;
    orderBy?: Prisma.CarOrderByWithRelationInput | Prisma.CarOrderByWithRelationInput[];
    cursor?: Prisma.CarWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarScalarFieldEnum | Prisma.CarScalarFieldEnum[];
};
export type CarFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSelect<ExtArgs> | null;
    omit?: Prisma.CarOmit<ExtArgs> | null;
    include?: Prisma.CarInclude<ExtArgs> | null;
    where?: Prisma.CarWhereInput;
    orderBy?: Prisma.CarOrderByWithRelationInput | Prisma.CarOrderByWithRelationInput[];
    cursor?: Prisma.CarWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarScalarFieldEnum | Prisma.CarScalarFieldEnum[];
};
export type CarFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSelect<ExtArgs> | null;
    omit?: Prisma.CarOmit<ExtArgs> | null;
    include?: Prisma.CarInclude<ExtArgs> | null;
    where?: Prisma.CarWhereInput;
    orderBy?: Prisma.CarOrderByWithRelationInput | Prisma.CarOrderByWithRelationInput[];
    cursor?: Prisma.CarWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarScalarFieldEnum | Prisma.CarScalarFieldEnum[];
};
export type CarCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSelect<ExtArgs> | null;
    omit?: Prisma.CarOmit<ExtArgs> | null;
    include?: Prisma.CarInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CarCreateInput, Prisma.CarUncheckedCreateInput>;
};
export type CarCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CarCreateManyInput | Prisma.CarCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CarCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CarOmit<ExtArgs> | null;
    data: Prisma.CarCreateManyInput | Prisma.CarCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CarIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CarUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSelect<ExtArgs> | null;
    omit?: Prisma.CarOmit<ExtArgs> | null;
    include?: Prisma.CarInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CarUpdateInput, Prisma.CarUncheckedUpdateInput>;
    where: Prisma.CarWhereUniqueInput;
};
export type CarUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CarUpdateManyMutationInput, Prisma.CarUncheckedUpdateManyInput>;
    where?: Prisma.CarWhereInput;
    limit?: number;
};
export type CarUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CarOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CarUpdateManyMutationInput, Prisma.CarUncheckedUpdateManyInput>;
    where?: Prisma.CarWhereInput;
    limit?: number;
    include?: Prisma.CarIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CarUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSelect<ExtArgs> | null;
    omit?: Prisma.CarOmit<ExtArgs> | null;
    include?: Prisma.CarInclude<ExtArgs> | null;
    where: Prisma.CarWhereUniqueInput;
    create: Prisma.XOR<Prisma.CarCreateInput, Prisma.CarUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CarUpdateInput, Prisma.CarUncheckedUpdateInput>;
};
export type CarDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSelect<ExtArgs> | null;
    omit?: Prisma.CarOmit<ExtArgs> | null;
    include?: Prisma.CarInclude<ExtArgs> | null;
    where: Prisma.CarWhereUniqueInput;
};
export type CarDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CarWhereInput;
    limit?: number;
};
export type Car$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Car$slotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Car$parkingRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CarDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarSelect<ExtArgs> | null;
    omit?: Prisma.CarOmit<ExtArgs> | null;
    include?: Prisma.CarInclude<ExtArgs> | null;
};
export {};
