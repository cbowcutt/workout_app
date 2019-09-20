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
    },

    buttonClicked: function(event, buttonProps) {
        console.log("SUP");
        console.log(global.idToPresenter);
        global.idToPresenter[buttonProps.ownerId].buttonClicked(event, buttonProps.behavior)
    } 
}


module.exports = controller;