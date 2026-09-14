import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/derlAndLight/theme-provider";

const arabicFont = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ArabCritic",
  description: "منصة عربية لتقييم ومراجعة ألعاب الفيديو",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={arabicFont.variable}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}



















// نعم. باختصار، لحذف قاعدة Prisma Postgres القديمة وإعادة بنائها من الـmigrations:

// 1. تسجيل الدخول
// npx prisma@latest auth login
// 2. ربط المشروع الصحيح
// npx prisma@latest project link proj_cmtfqftbq8y6zyoe3wgwn6gu5
// 3. معرفة قواعد البيانات
// npx prisma@latest postgres list

// خذ Database ID للقاعدة القديمة.

// 4. حذف القاعدة القديمة نهائيًا
// npx prisma@latest postgres delete DATABASE_ID

// مثال:

// npx prisma@latest postgres delete db_xxxxxxxxx
// 5. إنشاء قاعدة جديدة
// npx prisma@latest postgres create arabcritic

// انسخ Connection URL الذي يعطيك إياه وضعه في .env:

// DATABASE_URL="..."
// 6. التأكد من الـmigrations
// npx prisma@latest migration status
// 7. تطبيق الـmigrations على القاعدة الجديدة
// npx prisma@latest db migrate --to CONTRACT_ID

// في حالتنا كان:

// npx prisma@latest db migrate --to 710f9bbd3e75
// 8. التحقق النهائي
// npx prisma@latest migration status
// npx prisma@latest db verify

// ويجب أن ترى:

// ✔ Up to date
// ✔ Database marker and schema match contract









// # 1. توليد الـ contract
// npx prisma@latest contract emit

// # 2. إنشاء migration مخصص (كان مطلوبًا للتغيير)
// npx prisma@latest migration new

// # 3. إنشاء قاعدة بيانات جديدة
// npx prisma@latest postgres create arabcritic

// # 4. تهيئة قاعدة البيانات الحالية حسب الـ contract
// npx prisma@latest db init

// # 5. التحقق
// npx prisma@latest db verify

// # 6. التأكد من الـ migrations
// npx prisma@latest migration status
















// model User {
//   id        String   @id @default(cuid(2))
//   email     String   @unique
//   username  String   @unique
//   name      String?

//   createdAt TimestamptzString @default(now())
//   updatedAt temporal.updatedAtString()
// }

// model Game {
//   id          String   @id @default(cuid(2))
//   title       String
//   slug        String   @unique
//   description String?
//   cover       String?
//   releaseDate TimestamptzString?
//   developer   String?
//   publisher   String?
//   banner      String?

//   reviews     Review[]
//   platforms   Platform[]
//   genres      Genre[]

//   createdAt   TimestamptzString @default(now())
//   updatedAt   temporal.updatedAtString()
// }

// model Platform {
//   id        String   @id @default(cuid(2))
//   name      String
//   slug      String   @unique

//   games     Game[]

//   createdAt TimestamptzString @default(now())
//   updatedAt temporal.updatedAtString()
// }

// model GamePlatform {
//   gameId     String
//   platformId String

//   game       Game     @relation(fields: [gameId], references: [id],  onDelete: Cascade)
//   platform   Platform @relation(fields: [platformId], references: [id])

//   @@id([gameId, platformId])
// }

// model Genre {
//   id        String   @id @default(cuid(2))
//   name      String
//   slug      String   @unique

//   games     Game[]

//   createdAt TimestamptzString @default(now())
//   updatedAt temporal.updatedAtString()
// }

// model GameGenre {
//   gameId  String
//   genreId String

//   game    Game  @relation(fields: [gameId], references: [id],  onDelete: Cascade)
//   genre   Genre @relation(fields: [genreId], references: [id])

//   @@id([gameId, genreId])
// }



// model Reviewer {
//   id        String   @id @default(cuid(2))
//   name      String
//   slug      String   @unique
//   avatar    String?
//   bio       String?
//   website   String?

//   reviews   Review[]

//   createdAt TimestamptzString @default(now())
//   updatedAt temporal.updatedAtString()
// }

// model Review {
//   id          String   @id @default(cuid(2))
//   title       String
//   content     String?
//   score       Int?
//   url         String?
//   publishedAt TimestamptzString?

//   game        Game     @relation(fields: [gameId], references: [id] ,onDelete: Cascade)
//   gameId      String

//   reviewer    Reviewer @relation(fields: [reviewerId], references: [id])
//   reviewerId  String

//   createdAt   TimestamptzString @default(now())
//   updatedAt   temporal.updatedAtString()

//   @@unique([gameId, reviewerId])
//   @@index([gameId])
//   @@index([reviewerId])
// }