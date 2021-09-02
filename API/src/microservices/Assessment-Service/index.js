// const { Model } = require(`bookshelf`);
const { Assessments } = require(`../Database`);

exports.submit = async (assessment) => {
  // use the bookshelf model Assessments from API/src/microservices/Database to save
  // the assessment data in the PostgreSQL database
  // console.log(assessment);
  // await Assessments.forge({ cat_date_of_birth: assessment.birth, cat_name: assessment.catName }).save();

  assessment.created_at = new Date();
  const addScore = assessment;
  addScore.score = parseInt(assessment.question1, 10);

};

exports.getList = () => {

  // use the bookshelf model Assessments from API/src/microservices/Database to fetch
  // the assessment data from the PostgreSQL database
  const assessments = [];

  return assessments;
};
