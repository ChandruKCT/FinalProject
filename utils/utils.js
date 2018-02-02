
exports.find_document=function (ins,param) {

    return new Promise(function (resolve, reject) {
        ins.find(param).then(function (data) {
            console.log(data);
            if(data.length===0) {
                reject(new Error("user not foundd"));
            }
            resolve(data[0]);
        }).catch(function () {
            reject(new Error("could not retrieve data"));
        })
    })
};


exports.check_password=function (dbpass,reqpass) {
    //console.log(dbpass);
    console.log(reqpass);
    return new Promise(function (resolve,reject) {
        if(reqpass===dbpass)
        {
            resolve("CORRECT PASS");
        }
        reject(new Error("incorrect password"));
    })

};