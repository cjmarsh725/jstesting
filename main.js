const statusFilter = (...args) => {
  if (args.indexOf('error') !== -1) {
    return 'error';
  } else if (args.indexOf('C') !== -1) {
    return 'C';
  } else if (args.indexOf('B') !== -1) {
    return 'B';
  } else {
    return 'A';
  }
}