type FooterProps = {
  t: (key: string) => string;
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          © {new Date().getFullYear()} {t("footer.text")}
        </p>
      </div>
    </footer>
  );
}
