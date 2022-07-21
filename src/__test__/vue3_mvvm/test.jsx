h(
  'ul',
  items.map(({ id, text }) => {
    h(li, { key: id }, text);
  })
);

<ul>
  {items.map(({ id, text }) => {
    return <li key={id}>{text}</li>;
  })}
</ul>;
