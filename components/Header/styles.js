export const styles = {
  link: {
    marginRight: 15,
    color: 'rgba(33, 37, 41, 0.5)',
    display: 'inline-block',
    textDecoration: 'none',
    position: 'relative',
    '&:focus': {
      color: '#007bff',
      outline: 'none'
    },
    '&:hover, &.active': {
      color: '#007bff',
      outline: 'none'
    },
    '&:hover::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      color: '#007bff',
      borderBottom: '1px solid #007bff'
    }
  },
  nav: {
    padding: '1%',
    backgroundColor: '#E9EEF2',
    borderRadius: '8px'
  }
}