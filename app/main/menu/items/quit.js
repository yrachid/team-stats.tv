module.exports = (window, app) => ({
    label: 'Quit',
    accelerator: 'Command+Q',
    click() {
        app.quit()
    }
})
