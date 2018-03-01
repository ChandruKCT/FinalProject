const rand=require('randomstring');
const  util_controller=require('../utils/utils.js');
const request=require('request');
const fs=require('fs');
exports.code_execute=async function (req,res) {
    try {

        let fname=rand.generate(9);
        let type=req.body.type;
        let code=req.body.code;
        let w=await util_controller.write_file(fname,type,code);
        let problem_id="2";
        await request('http://localhost:3000/test/input/'+problem_id).pipe(fs.createWriteStream("codes/"+problem_id+'-input.txt'));
        await request('http://localhost:3000/test/output/'+problem_id).pipe(fs.createWriteStream("codes/"+problem_id+'-output.txt'));
        let compile=await util_controller.compile_and_run_code('codes/'+fname,type,problem_id);
        let run =await util_controller.run_code('codes/'+fname,problem_id);
        res.status(200);
        res.end(JSON.stringify(run));

    }
    catch (err)
    {
        res.status(500);
        res.end(err.message);
    }
}