// 代码生成时间: 2025-10-02 17:43:57
const _ = require('lodash');

/**
 * Online Exam System class
 * @class OnlineExamSystem
 */
class OnlineExamSystem {
  constructor() {
    this.questions = []; // Store questions
    this.scores = []; // Store scores
  }

  /**
   * Adds a question to the system
   * @param {Object} question - The question object to add
   */
  addQuestion(question) {
    if (!_.isPlainObject(question) || _.isEmpty(question)) {
      throw new Error('Invalid question format');
    }
    this.questions.push(question);
  }

  /**
   * Retrieves all questions
   * @returns {Array} - The array of questions
   */
  getQuestions() {
    return this.questions;
  }

  /**
   * Submits answers for a student
   * @param {Object} answers - The student's answers
   * @param {Number} studentId - The ID of the student
   */
  submitAnswers(answers, studentId) {
    if (!_.isPlainObject(answers) || _.isEmpty(answers)) {
      throw new Error('Invalid answers format');
    }
    if (!_.isNumber(studentId)) {
      throw new Error('Invalid student ID');
    }
    const score = this.calculateScore(answers);
    this.recordScore(score, studentId);
  }

  /**
   * Calculates the score based on the student's answers
   * @param {Object} answers - The student's answers
   * @returns {Number} - The calculated score
   */
  calculateScore(answers) {
    let score = 0;
    this.questions.forEach((question) => {
      const answer = answers[question.id];
      if (answer && answer === question.correctAnswer) {
        score += question.points;
      }
    });
    return score;
  }

  /**
   * Records the score for a student
   * @param {Number} score - The score to record
   * @param {Number} studentId - The ID of the student
   */
  recordScore(score, studentId) {
    this.scores.push({
      studentId,
      score
    });
  }

  /**
   * Retrieves scores for all students
   * @returns {Array} - The array of scores
   */
  getScores() {
    return this.scores;
  }
}

// Example usage:
const examSystem = new OnlineExamSystem();

try {
  examSystem.addQuestion({ id: 1, question: 'What is 2 + 2?', correctAnswer: '4', points: 10 });
  examSystem.addQuestion({ id: 2, question: 'What is the capital of France?', correctAnswer: 'Paris', points: 10 });

  examSystem.submitAnswers({ 1: '4', 2: 'Paris' }, 1);
  examSystem.submitAnswers({ 1: '5', 2: 'Paris' }, 2);

  console.log(examSystem.getScores());
} catch (error) {
  console.error(error.message);
}