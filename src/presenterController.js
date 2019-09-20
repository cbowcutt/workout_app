global.idToPresenter = {};

var controller = {

    inputReceived: function (event, componentID) {
        global.idToPresenter[componentID].inputReceived(event);
    },

    mapToPresenter: function (componentID) {
        return global.idToPresenter[componentID];
    },
    registerPresenter: function (componentID, presenter) {
        global.idToPresenter[componentID] = presenter;
    }
}


module.exports = controller;