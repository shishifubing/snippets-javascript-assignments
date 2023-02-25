function createObjWithoutProto() {
    return Object.create(null);
}

(() => {
    console.log('Task 3:');
    console.log(createObjWithoutProto());
    console.log(' ');
    console.log(' ');
})();