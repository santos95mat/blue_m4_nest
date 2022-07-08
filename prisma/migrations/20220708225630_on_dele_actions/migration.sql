/*
  Warnings:

  - You are about to drop the column `codigo` on the `sl` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `sl` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `sl` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "favorite" DROP CONSTRAINT "favorite_sl_name_fkey";

-- DropForeignKey
ALTER TABLE "favorite" DROP CONSTRAINT "favorite_user_id_fkey";

-- DropForeignKey
ALTER TABLE "sl" DROP CONSTRAINT "sl_empresa_id_fkey";

-- DropIndex
DROP INDEX "sl_codigo_key";

-- AlterTable
ALTER TABLE "sl" DROP COLUMN "codigo",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "sl_name_key" ON "sl"("name");

-- AddForeignKey
ALTER TABLE "sl" ADD CONSTRAINT "sl_empresa_id_fkey" FOREIGN KEY ("empresa_id") REFERENCES "empresa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorite" ADD CONSTRAINT "favorite_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorite" ADD CONSTRAINT "favorite_sl_name_fkey" FOREIGN KEY ("sl_name") REFERENCES "sl"("name") ON DELETE CASCADE ON UPDATE CASCADE;
