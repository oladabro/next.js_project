export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  const paths = data.map((scout) => {
    return {
      params: { id: scout.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const resp = await fetch('https://jsonplaceholder.typicode.com/users/' + id);

  const data = await resp.json();

  return {
    props: { scout: data },
  };
};

const Details = ({ scout }) => {
  console.log(scout);
  return (
    <div>
      <h1>{scout.name}</h1>
      <p>email: {scout.email}</p>
      <p>miasto: {scout.address.city}</p>
    </div>
  );
};

export default Details;
