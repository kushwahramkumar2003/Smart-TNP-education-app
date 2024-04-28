-- CreateTable
CREATE TABLE "StudentRegistrationToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'STUDENT',

    CONSTRAINT "StudentRegistrationToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentRegistrationToken_token_key" ON "StudentRegistrationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "StudentRegistrationToken_email_key" ON "StudentRegistrationToken"("email");
