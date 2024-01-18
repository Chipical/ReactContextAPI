export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>Fresh Delicious Bread For All</h2>

      <ul id="products">{children}</ul>
    </section>
  );
}
