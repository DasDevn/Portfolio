function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 min-h-[calc(100vh-112px)]">
      <img
        src="/hero-avatar.png"
        alt="Devan Eisnor avatar"
        className="w-40 sm:w-60 md:w-80 lg:w-[28rem] h-auto mb-6 rounded-full border-2 border-black"
      />
      <h1 className="text-5xl mb-4">Devan Eisnor</h1>
      <p className="text-2xl">Junior Developer and IT Graduate</p>
    </section>
  );
}

export default Hero;
