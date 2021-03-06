export const styles = {
  layout: {
    margin: '0 auto',
    padding: '10px 50px',
    fontSize: 14,
    lineHeight: 1.5,
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji"',
    color: '#6c757d',
    maxWidth: '1300px',
  },
  '@media (max-width: 800px)': {
    layout: {
      padding: '2vw',
      fontSize: '5vw',
      '& p': {
        margin: '5vw'
      }
    }
  }
}
