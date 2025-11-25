import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="mb-4 text-9xl font-bold text-primary-600">404</h1>
        <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
          Page Not Found
        </h2>
        <p className="mb-8 text-lg text-neutral-600 dark:text-neutral-400">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-primary-600 px-8 py-3 font-medium text-white transition-colors hover:bg-primary-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
