import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function customSelect() {
  const optionList = [
    { category: "Wheat", name: "Emmer" },
    { category: "Wheat", name: "Spelt" },
    { category: "Wheat", name: "Durum" },
    { category: "Wheat", name: "Kamut" },
    { category: "Wheat", name: "Red Fife" },
    { category: "Wheat", name: "Einkorn" },
    { category: "Wheat", name: "Bread Wheat" },
    { category: "Wheat", name: "Chopped Wheat" },
    { category: "Barley", name: "Six-row Barley" },
    { category: "Barley", name: "Two-row Barley" },
    { category: "Barley", name: "Hulled Barley" },
    { category: "Barley", name: "Hulless Barley" },
    { category: "Barley", name: "Malting Barley" },
    { category: "Barley", name: "Feeding Barley" },
    { category: "Corn", name: "Dent Corn" },
    { category: "Corn", name: "Flint Corn" },
    { category: "Corn", name: "Popcorn" },
    { category: "Corn", name: "Sweet Corn" },
    { category: "Corn", name: "Flour Corn" },
    { category: "Corn", name: "Indian Corn" },
    { category: "Corn", name: "High-oil Corn" },
    { category: "Millet", name: "Pearl Millet" },
    { category: "Millet", name: "Finger Millet" },
    { category: "Millet", name: "Foxtail Millet" },
    { category: "Millet", name: "Proso Millet" },
    { category: "Millet", name: "Kodo Millet" },
    { category: "Millet", name: "Little Millet" },
    { category: "Millet", name: "Barnyard Millet" },
    { category: "Oat", name: "Hulled Oat" },
    { category: "Oat", name: "Groats Oat" },
    { category: "Oat", name: "Rolled Oat" },
    { category: "Oat", name: "Steel-cut Oat" },
    { category: "Oat", name: "Instant Oat" },
    { category: "Oat", name: "Naked Oat" },
    { category: "Rice", name: "Long-grain Rice" },
    { category: "Rice", name: "Medium-grain Rice" },
    { category: "Rice", name: "Short-grain Rice" },
    { category: "Rice", name: "Basmati Rice" },
    { category: "Rice", name: "Jasmine Rice" },
    { category: "Rice", name: "Arborio Rice" },
    { category: "Rice", name: "Glutinous Rice" },
    { category: "Rice", name: "Wild Rice" },
    { category: "Rye", name: "Winter Rye" },
    { category: "Rye", name: "Spring Rye" },
    { category: "Rye", name: "Dark Rye" },
    { category: "Rye", name: "Light Rye" },
    { category: "Rye", name: "Pumpernickel Rye" },
    { category: "Sorghum", name: "Grain Sorghum" },
    { category: "Sorghum", name: "Sweet Sorghum" },
    { category: "Sorghum", name: "Forage Sorghum" },
    { category: "Sorghum", name: "Broomcorn Sorghum" },
    { category: "Sorghum", name: "Sudangrass Sorghum" },
    { category: "Teff", name: "Eragrostis tef" },
    { category: "Teff", name: "Red Teff" },
    { category: "Teff", name: "White Teff" },
    { category: "Triticale", name: "Hexaploid Triticale" },
    { category: "Triticale", name: "Octaploid Triticale" },
    { category: "Triticale", name: "Winter Triticale" },
    { category: "Triticale", name: "Spring Triticale" },
    { category: "Amaranth", name: "Red Amaranth" },
    { category: "Amaranth", name: "White Amaranth" },
    { category: "Amaranth", name: "Black Amaranth" },
    { category: "Amaranth", name: "Golden Amaranth" },
    { category: "Buckwheat", name: "Common Buckwheat" },
    { category: "Buckwheat", name: "Tartary Buckwheat" },
    { category: "Quinoa", name: "White Quinoa" },
    { category: "Quinoa", name: "Red Quinoa" },
    { category: "Quinoa", name: "Black Quinoa" },
  ];

  return (
    <Autocomplete
      id="grouped-crops"
      options={optionList}
      groupBy={(option) => option.category}
      getOptionLabel={(option) => option.name}
      sx={{ width: "100%", marginTop: '4px' }}
      renderInput={(params) => (
        <TextField {...params} hiddenLabel fullWidth size="small" />
      )}
    />
  );
}
