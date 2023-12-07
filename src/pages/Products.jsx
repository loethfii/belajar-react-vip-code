import CardProducts from "../components/Fragments/CardProducts";

const ProductsPage = () => {
  const datas = [
    {
      image:
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tas Canti Murah",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque! ",
      harga: 100000,
    },
    {
      image:
        "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Topi keren murah banget",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque!",
      harga: 200000,
    },
    {
      image:
        "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/10/18/999822bb-f444-4602-9203-1643d3f2393a.jpg",
      title: "Minyak wangi rasa anggur",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, doloremque!",
      harga: 200000,
    },
  ];
  return (
    <div className="flex justify-center mt-10 flex-wrap">
      {datas.map((data, index) => (
        <CardProducts key={index}>
          <CardProducts.Header image={data.image} />
          <CardProducts.Body title={data.title}>
            {data.description}
          </CardProducts.Body>
          <CardProducts.Footer harga={data.harga} />
        </CardProducts>
      ))}
      {/* <CardProducts>
        <CardProducts.Header image="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <CardProducts.Body title="Tas Canti Murah">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          doloremque!
        </CardProducts.Body>
        <CardProducts.Footer harga="100.000" />
      </CardProducts> */}
    </div>
  );
};

export default ProductsPage;
