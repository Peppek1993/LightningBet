module.exports = {
    purge: [],
    theme: {
        extend: {
            boxShadow: {
                'layout': '4px 4px 6px rgba(0, 0, 0, 0.3)',
                'layoutright': '-3px 0px 6px rgba(0, 0, 0, 0.3)',
                'layoutleft': '7px 7px 10px rgba(0, 0, 0, 0.3)'
            },
            flex: {
                'flex10': '10'
            },
            gridTemplateColumns: {
                'headerWrapper': '14rem 1fr 14rem',
            },
            height: {
                'bets': '36rem'
            }
        },
    },
    variants: {
        borderWidth: ['hover'],
        textColor: ['active', 'hover'],
        backgroundColor: ['odd', 'even', 'hover']
    },
    plugins: [],
}