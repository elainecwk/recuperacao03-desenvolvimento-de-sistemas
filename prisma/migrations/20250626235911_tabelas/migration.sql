-- CreateTable
CREATE TABLE "Biblioteca" (
    "id" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "authors" TEXT[],
    "publication_year" TEXT NOT NULL,
    "page_count" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "Biblioteca_pkey" PRIMARY KEY ("id")
);
