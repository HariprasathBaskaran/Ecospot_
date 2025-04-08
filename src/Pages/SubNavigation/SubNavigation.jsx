import Dropdown from "../../Components/Dropdown/Dropdown";

function SubNavigation() {
  return (
    <>
      <div
        className=" container-fluid bg-light d-flex justify-content-center position-sticky"
        style={{ top: "54px", zIndex: 10, marginBottom: "0.5rem" }}
      >
        <Dropdown
          MainMenu={"All products"}
          SubMenu={[
            "Bamboo Chairs",
            "Decor Flowers",
            "Mirror",
            "Decor Piggy Bank",
            "Wall art",
            "Candle Holder",
            "Tissue Holder",
            "Lamp",
            "Wooden specs holder",
            "ToothBrush",
            "Loofah scrubber",
            "Body Brush",
            "Shampoo bar",
            "Natural Shampoo",
            "Handmade shop",
            "Kids soap",
            "Pumice Stone",
            "Tongue scrapper",
            "Bamboo soap tray",
          ]}
        />
        <Dropdown
          MainMenu={"Home Decor"}
          SubMenu={[
            "Bamboo Chairs",
            "Air Freshener",
            "Mirror",
            "Decor Piggy Bank",
            "Wall art",
            "Candle Holder",
            "Tissue Holder",
            "Lamp",
            "Wooden specs holder",
          ]}
          subLink={["", "AirFreshener", "Mirror", "", "", "", "", "Lamp"]}
        />
        <Dropdown
          MainMenu={"Daily Essentials"}
          SubMenu={[
            "ToothBrush",
            "Loofah scrubber",
            "Body Brush",
            "Shampoo bar",
            "Natural Shampoo",
            "Handmade shop",
            "Kids soap",
            "Pumice Stone",
            "Tongue scrapper",
            "Bamboo soap tray",
          ]}
        />
        <Dropdown
          MainMenu={"cleaning Supplies"}
          SubMenu={["Toilet Cleaner", "Floor Cleaner", "Wall Cleaner"]}
        />
        <Dropdown
          MainMenu={"Kitchen"}
          SubMenu={[
            "Bamboo Cutlery",
            "Wooden Cutlery",
            "Bamboo Water bottle",
            "Bamboo Spoons",
            "Reusable Plates",
            "Resuable Cups",
          ]}
        />
        <Dropdown
          MainMenu={"Makeup"}
          SubMenu={["brush", "mirror"]}
          // subLink={["airfreshener", "", "lamp"]}
        />{" "}
        <Dropdown
          MainMenu={"Gifts"}
          SubMenu={["Birthday", "Wedding", "Corporate Events"]}
        />
      </div>
    </>
  );
}

export default SubNavigation;
