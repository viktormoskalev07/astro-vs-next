Astro vs Next.js Performance Comparison

Introduction

This repository compares the performance of Astro and Next.js by measuring their page sizes and JavaScript payloads.

Test Results

Next.js Pages

Server-rendered page: next-app-speed-test.vercel.app – 122 KB

Client-rendered page: next-app-speed-test.vercel.app/js – 121 KB

Astro Pages

Server-rendered page (no JS): astro-vs-next.vercel.app – 2 KB

Client-rendered page: astro-vs-next.vercel.app/js – 64 KB

Key Observations

Astro's server-rendered page is significantly lighter (2 KB) compared to Next.js (122 KB).

Astro's client-rendered page with JavaScript is still almost 2x smaller than Next.js (64 KB vs. 121 KB).

Next.js adds a large JavaScript payload even on server-rendered pages, while Astro keeps the client-side code minimal.

Conclusion

Astro provides a true server-side experience, reducing JavaScript payload and improving performance. In contrast, Next.js optimizations still introduce unnecessary JavaScript, leading to heavier page loads.

For projects focused on performance-first, lightweight pages, Astro is a clear winner over Next.js.

