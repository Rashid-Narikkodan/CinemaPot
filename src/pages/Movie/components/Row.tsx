function Row({ label, children }:{label:string, children:React.ReactNode}) {
  return (
    <div className="flex justify-between border-b border-zinc-800 pb-2">
      <span className="text-zinc-500">{label}</span>
      <span className="text-white font-medium text-right">
        {children}
      </span>
    </div>
  );
}

export default Row;