import ProductContainer from "../../Components/ProductContainer/ProductContainer";

export const AirFreshener = () => {
  return (
    <>
      <ProductContainer
        url={"https://678e5109a64c82aeb11ff2d4.mockapi.io/Ecospot/airfreshener"}
        coverImage={"AirFreshener.png"}
      />
    </>
  );
};

export const Lamp = () => {
  return (
    <>
      <ProductContainer
        url={"https://678e5109a64c82aeb11ff2d4.mockapi.io/Ecospot/lamp"}
        coverImage={"HomeDecorLamp.png"}
      />
    </>
  );
};

export const Mirror = () => {
  return (
    <>
      <ProductContainer
        url={"homeDecorMirror.json"}
        coverImage={"HomeDecorMirror.png"}
      />
    </>
  );
};

export const Kitchen = () => {
  return (
    <>
      <ProductContainer url={""} coverImage={"Kitchen.png"} />
    </>
  );
};
