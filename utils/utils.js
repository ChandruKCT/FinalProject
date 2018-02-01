const spawn = require('child_process').execFile;

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

exports.compile_and_run_code= function (filename, type) {
    return new Promise(async function (resolve,reject) {
        setTimeout(function () {
            reject(new Error("exceeded"));
        },1000);
        let compile =await spawn('gcc', [filename+"."+type,'-o',filename],function (error) {
            if (error) {
                console.log(error.message);
                reject(error);
            }
            var run = spawn('./'+filename, [],function (error,stdout) {
                if (error) {
                    console.log(error.message);
                    reject(error.message);
                }
                console.log(stdout);
            resolve(String(stdout));
        });
        });
       /* compile.on('close', function (data) {
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
                    resolve(output);
                });
            }
        });*/
    });

}

const fs = require("fs");
exports.write_file=function (name,type,text) {
    let file_name="codes/"+name+"."+type;
    fs.writeFileSync(file_name,text,function () {
        console.log("written");
    });
}

