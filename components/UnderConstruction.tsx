export default function UnderConstruction() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center">
      <section className="w-full max-w-2xl rounded-2xl border border-black/10 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-md px-6 py-12 lg:px-12 text-center shadow-2xl">
        <p className="chakra text-sm uppercase tracking-[0.28em] mb-4">
          Temporary Notice
        </p>
        <h1 className="text-4xl lg:text-5xl font-semibold mb-5 chakra">
          Under Construction
        </h1>
        <p className="text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
          This website is being completely rebuilt. Everything is currently
          offline while a new version is in progress.
        </p>
      </section>
    </main>
  );
}
