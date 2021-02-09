const { Router } = require('express');
const router = Router();
const cubesService = require('../services/cubesService');
const accessoriesService = require('../services/accessoriesService');

router.get('/', (req, res) => {
    cubesService.getAll(req.query)
        .then((cubes) => {
            res.render('index', { cubes: cubes, title: 'Browse' });
        })
        .catch(() => res.status(500).end());
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    cubesService.create(req.body)
        .then(() => res.redirect('/cubes'))
        .catch((err) => {
            console.log(err);
            res.status(500).end();
        });
});

router.get('/details/:cubeId', (req, res) => {
    cubesService.getOne(req.params.cubeId)
        .then((cube) => {
            var accessories = [];
            cube.accessories.forEach(async(x) => {
                var accessory = await accessoriesService.getOne(x);
                accessories.push(accessory);
            });
            res.render('details', { cube: cube, accessories: accessories, title: 'Details' });
        })
        .catch(() => res.status(500).end());
});

router.get('/edit/:cubeId', (req, res) => {
    cubesService.getOne(req.params.cubeId)
        .then((cube) => {
            res.render('edit', { cube: cube, title: 'Edit' });
        })
        .catch(() => res.status(500).end());
});

router.get('/attach/:cubeId', async(req, res) => {
    var cube = await cubesService.getOne(req.params.cubeId).lean();
    var accessories = await accessoriesService.getAll().lean();
    var outputAccessories = [];
    accessories.forEach(x => {
        if (cube.accessories.includes(x._id) == false) {
            outputAccessories.push(x);
        };
    });

    console.log(outputAccessories);
    res.render('attachAccessory', { cube: cube, accessories: outputAccessories });
});

router.post('/attach/:cubeId', (req, res) => {
    cubesService.attachAccessory(req.params.cubeId, req.body.accessory)
        .then(() => res.redirect(`/cubes/details/${req.params.cubeId}`))
});

router.post('/edit', (req, res) => {
    cubesService.editCube(req.body)
        .then((cube) => {
            res.redirect('/');
        })
        .catch(() => res.status(500).end());
});

router.get('/delete/:cubeId', (req, res) => {
    cubesService.deleteCube(req.params.cubeId)
        .then((cube) => {
            res.redirect('/cubes');
        })
        .catch(() => res.status(500).end());
});

module.exports = router;