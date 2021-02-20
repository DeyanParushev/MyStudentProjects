const { Router } = require('express');
const router = Router();
const coursesService = require('../services/courcesService');
const isGuest = require('../middlewares/isGuest');

router.get('/', async(req, res) => {
    try {
        if (!req.user) {
            var courses = await coursesService.getTopThree();
            res.render('guest-home', { courses: courses });
        } else {
            var courses = await coursesService.getAll();
            res.render('user-home', { courses: courses });
        }
    } catch (exception) {
        console.log(exception);
    }
});

router.get('/create', isGuest, async(req, res) => {
    res.render('create-course', { title: 'Create Course' });
})

router.post('/create', isGuest, async(req, res) => {
    try {
        await coursesService.create(req.body, req.user);
        res.redirect('/');
    } catch (exception) {
        res.render('create-course', { course: req.body, error: exception })
    }
})

router.get('/details/:courseId', isGuest, async(req, res) => {
    try {
        var course = await coursesService.getOne(req.params.courseId);
        if (req.user == course.creator) {
            res.locals.isCreator = true;
        }

        var studentIsEnrolled = course.students.find((x) => x._id == req.user);
        if (studentIsEnrolled) {
            res.locals.isEnrolled = true;
        }

        res.render('course-details', { course: course, title: 'Course Details' });
    } catch {
        res.redirect('/');
    }

    return
});

router.get('/edit/:courseId', isGuest, async(req, res) => {
    try {
        var course = await coursesService.getOne(req.params.courseId);

        if (course.creator !== req.user) {
            throw 'You are not the creator of this course.';
        }
        var course = await coursesService.getOne(req.params.courseId);
        res.render('edit-course', { course: course, title: 'Edit Course' });
    } catch (exception) {
        res.redirect('/');
    }
});

router.post('/edit/:courseId', isGuest, async(req, res) => {
    try {
        var course = await coursesService.getOne(req.params.courseId);
        if (course.creator !== req.user) {
            throw 'You are not the creator of this course.';
        }

        var updatedCourse = await coursesService.update(req.params.courseId, req.body);
        res.locals.isCreator = true;
        res.locals.isEnrolled = false;
        res.render('course-details', { course: updatedCourse });
    } catch (exception) {
        var returnCourse = req.body;
        returnCourse._id = req.params.courseId;
        res.render('edit-course', { course: returnCourse, error: exception });
    }
})

router.get('/delete/:courseId', isGuest, async(req, res) => {
    try {
        var course = await coursesService.getOne(req.params.courseId);
        if (course.creator !== req.user) {
            throw 'You are not the creator of this course.';
        }

        await coursesService.deleteOne(req.params.courseId);
        res.redirect('/');
    } catch (exception) {
        console.log(exception);
    }
})

router.get('/enroll/:courseId', isGuest, async(req, res) => {
    try {
        await coursesService.enroll(req.params.courseId, req.user);
        res.redirect('/');
    } catch (exception) {
        console.log(exception);
    }
});

module.exports = router;