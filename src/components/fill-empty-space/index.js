export default function FillEmptySpace() {
  const style = {
    height: '200px',
    width: '100%',
    backgroundColor: 'white',
  };
  return (
    <>
      {[1, 2, 3, 4, 5].map((item) => (
        <div style={style}></div>
      ))}
    </>
  );
}
