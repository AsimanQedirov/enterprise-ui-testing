const Lists = (props: { list: Record<string, any>[] }) => {
  return (
    <ul>
      {props.list.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default Lists;
