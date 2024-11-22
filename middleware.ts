import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
   publicRoutes: [
      '/',
      '/event/:id',
      '/api/webhook/clerk',
      '/api/webhook/stripe',
      '/api/uploadthing',
   ],
   ignoredRoutes: [
      '/api/webhook/clerk',
      '/api/webhook/stripe',
      '/api/uploadthing',
   ],
});

export const config = {
   matcher: [
      // Matcher untuk menangani semua rute kecuali file statis dan Next.js internals
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Selalu aktifkan untuk API routes
      '/(api|trpc)(.*)',
   ],
};
