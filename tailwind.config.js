module.exports = {
    purge: [],
    theme: {
        extend: {
            gridTemplateRows: {
                'layout': '60px 1fr'
            },
            boxShadow: {
                'layout': '4px 4px 6px rgba(0, 0, 0, 0.3)',
                'layoutright': '-3px 0px 6px rgba(0, 0, 0, 0.3)',
                'layoutleft': '7px 7px 10px rgba(0, 0, 0, 0.3)'
            },
            flex: {
                'flex10': '10'
            }
        },
    },
    variants: {
        borderWidth: ['hover']
    },
    plugins: [],
}