function Table({ children }) {
  return <table className="rounded-lg overflow-hidden">{children}</table>;
}

export default Table;

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="bg-secondary-200">{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr className="bg-secondary-0">{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
