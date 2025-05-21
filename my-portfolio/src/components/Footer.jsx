function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-black text-center text-sm p-3 z-10 h-12">
      © {new Date().getFullYear()} Devan Eisnor
    </footer>
  );
}

export default Footer;
