
export const BasicTypes = () => {

  let name : string | number = 'Matias';
  name = 123;

  const skills : (string|number)[] = [];

  skills.push(1);
  skills.push('Fly');

  return (
    <>
      <h3>Basic types</h3>
      <p>
        Name: { name }.
      </p>
    </>
  )
}
