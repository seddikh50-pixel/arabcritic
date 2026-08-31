import Header from "@/app/components/header/Header";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>
    </>
  );
}



// /
// ├── games
// ├── games/[slug]
// ├── search
// ├── reviews
// ├── login
// ├── register
// ├── profile/[username]
// └── admin



// User
// Game
// Review
// Rating
// Genre
// Platform



//relations 
// User
//  │
//  ├──── Reviews ──── Game
//  │
//  └──── Ratings ──── Game

// Game
//  │
//  ├── Genres
//  ├── Platforms
//  └── Reviews


// The Witcher 3

// التقييم العام: 9.4/10

// Genre:
// RPG
// Action

// Platforms:
// PC
// PS5
// Xbox

// Reviews:
// ★★★★★
// ★★★★★
// ★★★★☆




// 10  تحفة
// 9   ممتازة
// 8   جيدة جداً
// 7   جيدة
// 6   مقبولة
// 5   متوسطة
// 4   ضعيفة
// 3   سيئة
// 2   سيئة جداً
// 1   كارثية
// 0   لا تستحق



// Next.js
// TypeScript
// Tailwind CSS
// PostgreSQL
// Prisma
// Zod
// Authentication




//       ┌──────────────────────┐
//       │       USERS          │
//       │                      │
//       │ Guest / User / Admin │
//       └──────────┬───────────┘
//                  │
//                  │ HTTPS
//                  ▼
//  ┌─────────────────────────────┐
//  │          NEXT.JS            │
//  │         Frontend            │
//  │                             │
//  │ Home                       │
//  │ Games                       │
//  │ Game Details                │
//  │ Search                      │
//  │ Reviews                     │
//  │ Profile                     │
//  │ Login / Register            │
//  │ Admin Dashboard             │
//  └──────────────┬──────────────┘
//                 │
//                 │ REST API / HTTPS
//                 ▼
//  ┌─────────────────────────────┐
//  │          NODE.JS            │
//  │          BACKEND            │
//  │                             │
//  │ Auth Module                 │
//  │ Users Module                │
//  │ Games Module                │
//  │ Reviews Module              │
//  │ Ratings Module              │
//  │ Genres Module               │
//  │ Platforms Module            │
//  │ Admin Module                │
//  │ Search Module               │
//  │ Upload Module               │
//  └──────────────┬──────────────┘
//                 │
//                 │ Prisma ORM
//                 ▼
//  ┌─────────────────────────────┐
//  │        POSTGRESQL           │
//  │          DATABASE           │
//  │                             │
//  │ Users                       │
//  │ Games                       │
//  │ Reviews                     │
//  │ Ratings                     │
//  │ Genres                      │
//  │ Platforms                   │
//  │ ...                         │
//  └─────────────────────────────┘




//                         Guest
//   │
//   ├── مشاهدة الألعاب
//   ├── البحث
//   ├── مشاهدة التقييمات
//   └── قراءة المراجعات


// User
//   │
//   ├── كل صلاحيات Guest
//   ├── تقييم لعبة
//   ├── كتابة مراجعة
//   ├── تعديل مراجعاته
//   ├── حذف مراجعاته
//   ├── المفضلة
//   └── الملف الشخصي


// Admin
//   │
//   ├── كل صلاحيات User
//   ├── إدارة الألعاب
//   ├── إدارة المستخدمين
//   ├── إدارة المراجعات
//   ├── إدارة التصنيفات
//   ├── إدارة المنصات
//   └── Dashboard



// Game
// │
// ├── id
// ├── title
// ├── slug
// ├── description
// ├── coverImage
// ├── releaseDate
// ├── developer
// ├── publisher
// ├── trailer
// ├── createdAt
// └── updatedAt







// /admin

// Dashboard
// │
// ├── Overview
// │
// ├── Games
// │   ├── All Games
// │   ├── Add Game
// │   ├── Edit Game
// │   └── Delete Game
// │
// ├── Users
// │   ├── All Users
// │   ├── View User
// │   ├── Ban User
// │   └── Delete User
// │
// ├── Reviews
// │   ├── All Reviews
// │   ├── Reported Reviews
// │   └── Delete Review
// │
// ├── Genres
// │
// └── Platforms













// backend/
// │
// ├── src/
// │   │
// │   ├── auth/
// │   │   ├── auth.controller.ts
// │   │   ├── auth.service.ts
// │   │   └── auth.routes.ts
// │   │
// │   ├── users/
// │   │
// │   ├── games/
// │   │
// │   ├── reviews/
// │   │
// │   ├── ratings/
// │   │
// │   ├── genres/
// │   │
// │   ├── platforms/
// │   │
// │   ├── favorites/
// │   │
// │   ├── admin/
// │   │
// │   ├── middleware/
// │   │
// │   ├── utils/
// │   │
// │   └── server.ts
// │
// ├── prisma/
// │   └── schema.prisma
// │
// └── package.json









// frontend/
// │
// ├── app/
// │   ├── page.tsx
// │   │
// │   ├── games/
// │   │   ├── page.tsx
// │   │   └── [slug]/
// │   │       └── page.tsx
// │   │
// │   ├── search/
// │   │   └── page.tsx
// │   │
// │   ├── reviews/
// │   │   └── page.tsx
// │   │
// │   ├── login/
// │   │   └── page.tsx
// │   │
// │   ├── register/
// │   │   └── page.tsx
// │   │
// │   ├── profile/
// │   │   └── [username]/
// │   │       └── page.tsx
// │   │
// │   └── admin/
// │       ├── page.tsx
// │       ├── games/
// │       ├── users/
// │       └── reviews/
// │
// ├── components/
// │   ├── ui/
// │   ├── games/
// │   ├── reviews/
// │   ├── rating/
// │   └── layout/
// │
// └── lib/
//     └── api.ts




// 🔵 تجربة استثنائية
// 🟢 تجربة موصى بها
// 🟡 تجربة مقبولة
// 🟠 تجربة عادية
// 🔴 تجربة مخيبة