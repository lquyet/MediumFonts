(function(e) {
    let cssFile = {
        'https://glyph.medium.com/css/unbound.css': 'assets/css/unbound.css',
        'https://glyph.medium.com/css/e/sr/latin/e/ssr/latin/e/ssb/latin/m2-unbound.css': 'assets/css/m2-unbound.css'
    }
    let handler = (i) => {
        if (i.tabId === -1) {
            return
        }
        return {
            redirectUrl: e.extension.getURL(cssFile[i.url])
        }
    }
    let options = {
        urls: Object.keys(cssFile),
        types: ['stylesheet']
    }
    e.webRequest.onBeforeRequest.addListener(handler, options, ['blocking'])

})(chrome);