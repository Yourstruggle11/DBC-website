export const countWords = (content) => {
    if (content === undefined || content.length === 0) {
      return 0
    } else {
      let contentWithoutSpecialChars = content.replace(/[^\w\s]/gi, '').trim()
      contentWithoutSpecialChars = contentWithoutSpecialChars.replace(/[^a-zA-Z0-9\s]/, '').trim()
      const regEx = /\s+/
      const words = contentWithoutSpecialChars.split(regEx)
       return words.length
    }
  }