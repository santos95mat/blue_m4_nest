-- CreateTable
CREATE TABLE "os" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "problem_name" TEXT,
    "user_id" TEXT,

    CONSTRAINT "os_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OsToSL" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OsToSL_AB_unique" ON "_OsToSL"("A", "B");

-- CreateIndex
CREATE INDEX "_OsToSL_B_index" ON "_OsToSL"("B");

-- AddForeignKey
ALTER TABLE "os" ADD CONSTRAINT "os_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "os" ADD CONSTRAINT "os_problem_name_fkey" FOREIGN KEY ("problem_name") REFERENCES "problems"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OsToSL" ADD CONSTRAINT "_OsToSL_A_fkey" FOREIGN KEY ("A") REFERENCES "os"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OsToSL" ADD CONSTRAINT "_OsToSL_B_fkey" FOREIGN KEY ("B") REFERENCES "sl"("id") ON DELETE CASCADE ON UPDATE CASCADE;
