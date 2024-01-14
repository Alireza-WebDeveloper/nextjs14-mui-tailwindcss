import ButtonLink from '../../Ui/ButtonLink';

// Component
const Links = () => {
  return (
    <section className="flex items-center gap-3">
      <ButtonLink href="/" text="صفحه اصلی" />
      <ButtonLink href="/" text="محصولات" />
      <ButtonLink href="/" text="درباره ما" />
    </section>
  );
};

export default Links;
