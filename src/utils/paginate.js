export default  (data, pageNumber, pageLength) => {
    const offset = (pageNumber - 1) * pageLength
    return data.slice(offset).slice(0, pageLength)
}
