export default function UnderConstruction() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center">
      <section className="w-full max-w-4xl rounded-2xl border border-black/10 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-md px-6 py-12 lg:px-12 text-center shadow-2xl">
        <p className="chakra text-sm uppercase tracking-[0.28em] mb-4">
          Quick Update
        </p>
        <h1 className="text-4xl lg:text-5xl font-semibold mb-5 chakra">
          Rebuilding My Personal Site
        </h1>
        <p className="text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
          I am currently rebuilding this site from the ground up. Thanks for
          stopping by while I work on a cleaner, more personal version.
        </p>
      </section>
    </main>
  );
}
