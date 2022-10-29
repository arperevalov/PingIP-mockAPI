-- CreateTable
CREATE TABLE "Server" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ip_address" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "last_ping" TEXT NOT NULL,
    "mac_address" TEXT NOT NULL,

    CONSTRAINT "Server_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Camera" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ip_address" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "last_ping" TEXT NOT NULL,
    "mac_address" TEXT NOT NULL,
    "parent_id" INTEGER NOT NULL,

    CONSTRAINT "Camera_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Camera" ADD CONSTRAINT "Camera_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Server"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
