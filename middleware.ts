import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Tentukan rute yang dilindungi menggunakan createRouteMatcher
const isProtectedRoute = createRouteMatcher([
   '/api/webhook/clerk',
   '/api/webhook/stripe',
   '/api/uploadthing'
])

export default clerkMiddleware(async (auth, req) => {
   // Jika rute cocok dengan yang dilindungi, pastikan otentikasi pengguna
   if (isProtectedRoute(req)) await auth.protect()
})

export const config = {
   matcher: [
      // Abaikan rute internal Next.js dan file statis kecuali ditemukan dalam parameter pencarian
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Selalu jalankan untuk API routes
      '/(api|trpc)(.*)',
      // Menentukan rute lainnya yang sesuai
      '/',
      '/event/:id',
      '/api/webhook/clerk',
      '/api/webhook/stripe',
      '/api/uploadthing',
   ],
}
