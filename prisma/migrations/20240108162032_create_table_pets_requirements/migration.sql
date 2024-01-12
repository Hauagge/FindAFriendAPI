/*
  Warnings:

  - You are about to drop the column `petId` on the `requirements` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "requirements" DROP CONSTRAINT "requirements_petId_fkey";

-- AlterTable
ALTER TABLE "requirements" DROP COLUMN "petId";

-- CreateTable
CREATE TABLE "petRequirements" (
    "id" TEXT NOT NULL,
    "petId" TEXT NOT NULL,
    "requirementsId" TEXT NOT NULL,

    CONSTRAINT "petRequirements_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "petRequirements" ADD CONSTRAINT "petRequirements_petId_fkey" FOREIGN KEY ("petId") REFERENCES "pets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "petRequirements" ADD CONSTRAINT "petRequirements_requirementsId_fkey" FOREIGN KEY ("requirementsId") REFERENCES "requirements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
