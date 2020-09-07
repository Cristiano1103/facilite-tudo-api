const multer = require('multer');
const parser = multer({ dest: 'public/uploads/' })
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    var fullUrl = req.protocol + '://' + req.get('host') + '/';

    parser.single('foto')(req, res, err => {
        if (err)
            res.status(500).json({ error: 1, payload: err });
        else {
            const image = {};
            image.id = req.file.filename;
            image.url = `${fullUrl}/uploads/${image.id}`;
            res.status(200).json({ error: 0, payload: { id: image.id, url: image.url } });
        }
    });

    const diretorio = 'public/uploads/'

    setTimeout(() => {

        fs.readdir(diretorio, (err, files) => {
            if(err) throw err
    
            for(const file of files){
                fs.unlink(path.join(diretorio, file), err => {
                    if(err) throw err
                })
            }
        })
        
    }, 4000);






}