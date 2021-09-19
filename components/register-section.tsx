import {title} from './title-section'
import {noBorderTop, noBorderBottom, noBorderTopBottom} from './border'

const flexLayout = (title: string, money: string) => ({
  table: {
    widths: ['60%', '40%'],
    body: [
      [
        {
          text: title,
          margin: [0, 0, 0, 0],
        },
        {
          text: money,
          margin: [0, 0, 0, 0],
          alignment: 'right',
        },
      ],
    ],
  },
  layout: 'noBorders',
})

const registerSection = () => ({
  stack: [
    {
      ...title('2 Register Contents'),
    },
    {
      stack: [
        {
          table: {
            widths: [20, 95, '*'],
            body: [
              [
                {text: '', border: [true, false, false, false]},
                {text: 'Register Plan', ...noBorderBottom},
                {
                  text: 'SERVICE A',
                  ...noBorderBottom,
                },
              ],
            ],
          },
        },
        {
          table: {
            widths: [20, 95, 155, 70, '*'],
            body: [
              [
                {text: '', ...noBorderTopBottom},
                {text: 'Register Day', ...noBorderBottom},
                {text: '10/5/2021 16:04:15', ...noBorderBottom},
                {text: 'Signed Day', ...noBorderBottom},
                {text: '10/5/2021 16:25:59', ...noBorderBottom},
              ],
            ],
          },
        },
        {
          table: {
            widths: [20, 95, '*'],
            body: [
              [
                {text: '', border: [true, false, false, false]},
                {text: 'Contract Number', ...noBorderBottom},
                {text: '77777KKK2021050', ...noBorderBottom},
              ],
              [
                {text: '', border: [true, false, false, false]},
                {text: 'Time List', ...noBorderBottom},
                {
                  text: '17/6/2021~',
                  ...noBorderBottom,
                },
              ],
              [
                {text: '', border: [true, false, false, false]},
                {text: 'Monthly Mileage', ...noBorderBottom},
                {
                  text: '1,500Km',
                  ...noBorderBottom,
                },
              ],
            ],
          },
        },
        {
          table: {
            widths: [20, 95, 91, 138, 68, '*'],
            body: [
              [
                {text: '', rowSpan: 3, ...noBorderTopBottom},
                {
                  text: 'Lease fee and consumption tax, etc',
                  rowSpan: 3,
                  margin: [0, 30, 0, 0],
                  ...noBorderBottom,
                },
                {
                  rowSpan: 3,
                  text: '1 time\n(Monthly)',
                  margin: [0, 20, 0, 0],
                  alignment: 'center',
                  ...noBorderBottom,
                },
                {
                  ...flexLayout('Lease fee excluding tax', '71,500円'),
                  ...noBorderBottom,
                },
                {
                  rowSpan: 3,
                  text: 'Bonus addition amount (added in January / July)',
                  alignment: 'center',
                  margin: [0, 10, 0, 0],
                  ...noBorderBottom,
                },
                flexLayout('Lease fee excluding tax', '0円'),
              ],
              [
                {text: '', border: [true, false, false, true]},
                {text: ''},
                {
                  text: '',
                },
                flexLayout('Consumption tax, etc.', '71,500円'),
                {
                  text: '',
                },
                flexLayout('Consumption tax, etc.', '0円'),
              ],
              [
                {text: ''},
                {text: ''},
                {
                  text: '',
                },
                {
                  ...flexLayout('Total', '78,650円'),
                  ...noBorderBottom,
                },
                {
                  text: '',
                },
                {
                  ...flexLayout('Total', '0円'),
                  ...noBorderBottom,
                },
              ],
            ],
          },
          layout: {
            paddingTop: function (i: number) {
              return 0
            },
            paddingBottom: function (i: number) {
              return 0
            },
          },
        },
        {
          table: {
            widths: [20, 95, 91, 138, '*'],
            body: [
              [
                {text: ''},
                {text: ''},
                {
                  text: 'Total lease fee (tax included)',
                },
                {
                  text: '2,831,400円',
                  alignment: 'right',
                },
                {
                  text: '',
                },
              ],
            ],
          },
        },
        {
          table: {
            widths: [20, 95, 91, 29, 100, '*'],
            body: [
              [
                {text: '', ...noBorderTop},
                {text: '', ...noBorderTop},
                {
                  text: 'Total',
                  ...noBorderTop,
                },
                {
                  text: 'Lease fee (tax included)',
                  ...noBorderTop,
                },
                {
                  text: '2,831,400円',
                  alignment: 'right',
                  ...noBorderTop,
                },
                {
                  text: '',
                  ...noBorderTop,
                },
              ],
            ],
          },
        },
      ],
    },
  ],
})

export {registerSection}
