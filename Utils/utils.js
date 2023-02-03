for (let stoveBurner = 0; stoveBurner < 4; stoveBurner++) {
  document.querySelector(".stove-burners").innerHTML +=
    "<img class='stove-burner-off' src='./Resources/Assets/stove_burner_off.png'/>";
}
for (let stoveLighter = 0; stoveLighter < 5; stoveLighter++) {
  document.querySelector(".stove-lighters-container").innerHTML +=
    "<button type='button' class='stove-lighter'></button>";
}
export const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};