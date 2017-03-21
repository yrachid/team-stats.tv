
const dimension =
  (calculateWidth, calculateHeight) => body => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);

    return ({
      width: calculateWidth(window.innerWidth),
      height: calculateHeight(window.innerHeight)
    });
  }
const options = {
  'half': dimension(w => w / 2.022, h => h / 2.03),
  'one-third': dimension(w => w / 3.06 , h => h / 2)
};

const sizes =  name => options[name];
