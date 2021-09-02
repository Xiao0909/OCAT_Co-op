const router = require(`express`).Router();
const { AssessmentService } = require(`../../libs`);

router.post(`/submit`, (req, res, next) => {
  try {
    const { assessment } = req.body;
    // call the submit function from the server/libs/AssessmentService
    console.log(req.body);
    AssessmentService.submit(assessment);
  } catch (error) {
    next(error);
  }
});

router.get(`/list`, async (req, res, next) => {
  try {
    // call the getList function from the server/libs/AssessmentService
    // return assessments to front-end
    // return await AssessmentService.getList();
    const assessment = await AssessmentService.getList();
    res
      .status(200)
      .json({ assessment });
  } catch (error) {
    next(error);
  }
});

exports.router = router;
exports.path = `/api/assessment`;
