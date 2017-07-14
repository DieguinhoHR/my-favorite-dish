module.exports = {
    'Home Test': function(client) {
        client
            .url('/')
            .pause(1000)
            .end()

    }
}