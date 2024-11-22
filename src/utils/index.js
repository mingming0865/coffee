export const getImage = (path) => {
  // https://forever21.hungvu.net/2021-01-23T16:10:10.184Z00419031-01.jpg
  //"uploads/2021-01-23T16:10:10.184Z00419031-01.jpg"
  const imageName = path?.replace('uploads/', '')
  return `https://forever21.hungvu.net/${imageName}`
}