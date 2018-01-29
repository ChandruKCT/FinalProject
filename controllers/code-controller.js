const rand=require('randomstring');
const  util_controller=require('../utils/utils.js');

exports.code_execute=async function (req,res) {
    try {

        let fname=rand.generate(9);
        let type=req.body.type;
        let code=req.body.code;
        let w=await util_controller.write_file(fname,type,code);
        let compile=await util_controller.compile_and_run_code('codes/'+fname,type,'codes/'+fname);
        res.status(200);
        res.end(JSON.stringify(compile));

    }
    catch (err)
    {
        res.status(500);
        res.end(err.message);
    }
}