-- CreateTable
CREATE TABLE "ParkingRecord" (
    "id" SERIAL NOT NULL,
    "entryTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "exitTime" TIMESTAMP(3),
    "price" DECIMAL(65,30),
    "carId" INTEGER NOT NULL,
    "slotId" INTEGER NOT NULL,

    CONSTRAINT "ParkingRecord_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ParkingRecord" ADD CONSTRAINT "ParkingRecord_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingRecord" ADD CONSTRAINT "ParkingRecord_slotId_fkey" FOREIGN KEY ("slotId") REFERENCES "CarSlot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
