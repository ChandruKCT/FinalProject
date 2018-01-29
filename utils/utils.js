const spawn = require('child_process').spawn;

exports.find_document=function (ins,param) {
    console.log(param);
    return new Promise(function (resolve, reject) {
        ins.find(param).then(function (data) {
            if(data.length===0)
            {
                reject(new Error("user not found"));
            }
            resolve(data[0]);
        }).catch(function () {
            reject(new Error("could not retrieve data"));
        })
    })
}


exports.check_password=function (dbpass,reqpass) {
    console.log(dbpass);
    console.log(reqpass);
    return new Promise(function (resolve,reject) {
        if(reqpass===dbpass)
        {
            resolve("CORRECT PASS");
        }
        reject(new Error("incorrect password"));
    })

}

exports.compile_and_run_code=async function (filename, type) {
        let compile =await spawn('gcc', [filename+"."+type,'-o',filename]);
    return new Promise(function (resolve,reject) {
        compile.on('close', function (data) {
            if (data === 0) {
                var run = spawn('./'+filename, []);
                run.stdout.on('data', function (output) {
                    console.log(String(output));
                    resolve(String(output));
                });
                run.stderr.on('data', function (output) {
                    console.log(String(output));
                    reject(new Error("could not run code"));
                });
                run.on('close', function (output) {
                    console.log('stdout: ' + output);

                })
            }
        })
    })

}

const fs = require("fs");



exports.write_file=function (name,type,text) {
    let file_name="codes/"+name+"."+type;
    fs.writeFileSync(file_name,text,function () {
        console.log("written");
    });
}

