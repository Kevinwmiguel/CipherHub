function crypto(msg){
    let newmsg = "";

    for (let i = 0; i < msg.length; i++) {
        let charCode = msg.charCodeAt(i) - 2;
        newmsg += String.fromCharCode(charCode);
    }
    return newmsg;
}