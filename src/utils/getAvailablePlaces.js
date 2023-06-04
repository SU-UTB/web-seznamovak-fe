export const getAvailablePlaces = (totalPlaces, data) => {
  if (data.length <= 0) {
    return 0
  }
  const filteredDataSet = data[0].data.filter((row) => row.Fakulta)
  return totalPlaces - filteredDataSet.length
}