function Contact() {
  return (
    <section className="min-h-[calc(100vh-112px)] flex flex-col items-center justify-center px-6 text-center font-mono text-lg leading-relaxed">
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-4">I'd love to hear from you! Whether it's about a project, a collaboration, or just to say hello — feel free to reach out.</p>
        <p className="mb-2">
          📧 <a href="mailto:devan.eisnor@gmail.com" className="underline hover:text-blue-600">devan.eisnor@gmail.com</a>
        </p>
        <p className="mb-2">
          📱 <a href="tel:9025807030" className="underline hover:text-blue-600">(902) 580-7030</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
