const title = (text: string, border = {}) => ({
  table: {
    widths: ['*'],
    body: [[{text, border: [true, true, true, false], ...border}]],
  },
  layout: {
    paddingLeft: function () {
      return 18
    },
  },
})

export {title}
